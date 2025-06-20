"use client"

import React, { useEffect, useState } from "react"
import Head from "next/head"
import Link from "next/link"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { getSession } from "next-auth/react"
import {
  Card, CardContent, CardDescription, CardHeader, CardTitle
} from "@/components/ui/card"
import {
  Table, TableBody, TableCell, TableHead, TableHeader, TableRow
} from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import {
  Dialog, DialogContent, DialogDescription, DialogFooter,
  DialogHeader, DialogTitle, DialogClose
} from "@/components/ui/dialog"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger
} from "@/components/ui/dropdown-menu"
import {
  Tabs, TabsContent, TabsList, TabsTrigger
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft, Bookmark, BookmarkCheck, Download, FileDown, Sparkles
} from "lucide-react"
import { utils as XLSXUtils, writeFile as XLSXWriteFile } from "xlsx"
import Navbar from "@/components/Navbar"

import jsPDF from "jspdf"
import "jspdf-autotable"

type College = {
  id: number
  collegeCode: number
  collegeName: string
  branch: string
  category: string
  cutoff: number
  gender: string
  location: string
  status: string
  createdAt: string
  isBookmarked: boolean
}

export default function ResultsPage() {
  const [colleges, setColleges] = useState<College[]>([])
  const [searchTerm, setSearchTerm] = useState("")
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean | null>(null)
  const [aiDialogOpen, setAiDialogOpen] = useState(false)
  const [showLoginDialog, setShowLoginDialog] = useState(false)
  const [aiResponse, setAiResponse] = useState("")
  const [loadingCollegeId, setLoadingCollegeId] = useState<number | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  const searchParams = useSearchParams()
  const percentile = searchParams.get("percentile")
  const gender = searchParams.get("gender")
  const category = searchParams.get("category")
  const location = searchParams.get("location")
  const branches = searchParams.get("branches")?.split(",") || []

  useEffect(() => {
    const checkAndFetch = async () => {
      const session = await getSession()
      setIsUserLoggedIn(!!session)
      try {
        const response = await axios.post("/api/users/college-recommendations", {
          percentile, gender, category, location, branches,
        })
        const fetched = response.data.results.map((college: College) => ({
          ...college, isBookmarked: false,
        }))
        setColleges(fetched)
      } catch (err) {
        console.error("Error fetching:", err)
      } finally {
        setIsLoading(false)
      }
    }
    checkAndFetch()
  }, [])

  const toggleBookmark = (id: number) => {
    setColleges(prev =>
      prev.map(col => col.id === id ? { ...col, isBookmarked: !col.isBookmarked } : col)
    )
  }

  const handleGenAi = async (collegeId: number) => {
    if (!isUserLoggedIn) {
      setShowLoginDialog(true)
      return
    }
    setLoadingCollegeId(collegeId)
    try {
      const res = await axios.post(`/api/users/genai/info/${collegeId}`)
      setAiResponse(res.data.summary)
      setAiDialogOpen(true)
    } catch (err) {
      alert("Failed to generate AI summary")
    } finally {
      setLoadingCollegeId(null)
    }
  }

  const exportData = (format: string) => {
    if (!isUserLoggedIn) {
      setShowLoginDialog(true)
      return
    }
    const exportCols = colleges.map(({ id, isBookmarked, ...rest }) => rest)
    if (format === "csv") {
      const ws = XLSXUtils.json_to_sheet(exportCols)
      const wb = XLSXUtils.book_new()
      XLSXUtils.book_append_sheet(wb, ws, "Colleges")
      XLSXWriteFile(wb, "colleges.csv")
    } else if (format === "pdf") {
      alert("PDF export coming soon.")
    }
  }

  const filteredColleges = colleges.filter(c =>
    c.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
    c.location.toLowerCase().includes(searchTerm.toLowerCase())
  )
  const bookmarked = colleges.filter(c => c.isBookmarked)

  return (
    <>
      <Head>
        <title>College Recommendations - Guess My College</title>
        <meta name="description" content="View your personalized MHT-CET college recommendations with category, cutoff, and AI support. Filter and export results easily." />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2991036805731287"
          crossOrigin="anonymous"
        ></script>
      </Head>

      <Navbar />

      <div className="p-3 mt-16">
        <div className="flex justify-between items-center mb-4">
          <div className="flex gap-2 items-center">
            <Link href="/studentform"><Button variant="outline"><ArrowLeft className="h-4 w-4" /></Button></Link>
            <h1 className="text-xl font-bold">College Recommendations</h1>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline"><Download className="mr-2 h-4 w-4" /> Export</Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onClick={() => exportData("csv")}>
                <FileDown className="mr-2 h-4 w-4" /> CSV
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => exportData("pdf")}>
                <FileDown className="mr-2 h-4 w-4" /> PDF
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <Input
          placeholder="Search colleges, branches..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="mb-6"
        />

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Colleges</TabsTrigger>
            <TabsTrigger value="bookmarked">
              Bookmarked
              {bookmarked.length > 0 && (
                <Badge variant="secondary" className="ml-2">{bookmarked.length}</Badge>
              )}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all">
            <CollegeTable
              colleges={filteredColleges}
              toggleBookmark={toggleBookmark}
              handleGenAi={handleGenAi}
              loadingCollegeId={loadingCollegeId}
              isLoading={isLoading}
            />
          </TabsContent>
          <TabsContent value="bookmarked">
            <CollegeTable
              colleges={bookmarked}
              toggleBookmark={toggleBookmark}
              handleGenAi={handleGenAi}
              loadingCollegeId={loadingCollegeId}
              isLoading={isLoading}
            />
          </TabsContent>
        </Tabs>

        <div className="p-3">
          <div className="bg-[#0F766E] text-white text-center px-4 py-3 rounded-md mt-6 text-sm">
            <p>
              <strong>No college found?</strong> Call us at{" "}
              <a href="tel:9595444319" className="underline hover:text-gray-200">9595444319</a>{" "}
              or email <a href="mailto:guessmycollege@gmail.com" className="underline hover:text-gray-200">guessmycollege@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* AI Summary Dialog */}
      <Dialog open={aiDialogOpen} onOpenChange={setAiDialogOpen}>
        <DialogContent>
          <DialogHeader><DialogTitle>AI Summary</DialogTitle></DialogHeader>
          <div className="p-4 text-sm">{aiResponse}</div>
          <DialogFooter><DialogClose asChild><Button variant="outline">Close</Button></DialogClose></DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Login Dialog */}
      <Dialog open={showLoginDialog} onOpenChange={setShowLoginDialog}>
        <DialogContent>
          <DialogHeader><DialogTitle>Login Required</DialogTitle></DialogHeader>
          <DialogFooter>
            <Link href="/login"><Button className="w-full bg-teal-600 hover:bg-teal-700">Login Now</Button></Link>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

const CollegeTable = ({
  colleges, toggleBookmark, handleGenAi, loadingCollegeId, isLoading
}: {
  colleges: College[]
  toggleBookmark: (id: number) => void
  handleGenAi: (collegeId: number) => void
  loadingCollegeId: number | null
  isLoading: boolean
}) => (
  <Card>
    <CardHeader className="pb-0">
      <CardTitle>Colleges</CardTitle>
      <CardDescription>Based on your preferences</CardDescription>
    </CardHeader>
    <CardContent>
      {isLoading ? (
        <div className="text-center py-10 text-gray-600">Loading recommendations...</div>
      ) : colleges.length === 0 ? (
        <div className="text-center py-10 text-gray-500">No colleges found.</div>
      ) : (
        <div className="border rounded-md">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>College</TableHead>
                <TableHead>Branch</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Location</TableHead>
                <TableHead>Cutoff</TableHead>
                <TableHead>Bookmark</TableHead>
                <TableHead>AI Summary</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {colleges.map(c => (
                <TableRow key={c.id}>
                  <TableCell>{c.collegeName}</TableCell>
                  <TableCell>{c.branch}</TableCell>
                  <TableCell>{c.category}</TableCell>
                  <TableCell>{c.location}</TableCell>
                  <TableCell>{c.cutoff}%</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => toggleBookmark(c.id)}>
                      {c.isBookmarked ? <BookmarkCheck className="text-teal-600" /> : <Bookmark />}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleGenAi(c.id)}
                      disabled={loadingCollegeId === c.id}
                    >
                      {loadingCollegeId === c.id ? (
                        <span className="text-sm text-gray-500 animate-pulse">Loading...</span>
                      ) : (
                        <>
                          <Sparkles className="text-purple-500 h-4 w-4" /> <span className="ml-1">AI</span>
                        </>
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </CardContent>
  </Card>
)
