"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import axios from "axios"
import { useSearchParams } from "next/navigation"
import { getSession } from "next-auth/react"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import {
  Button
} from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  ArrowLeft,
  Bookmark,
  BookmarkCheck,
  Download,
  FileDown,
  Sparkles,
} from "lucide-react"
import { utils as XLSXUtils, writeFile as XLSXWriteFile } from "xlsx"
import jsPDF from "jspdf"
import "jspdf-autotable"
import Navbar from "@/components/Navbar"

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
  const [isUserLoggedIn, setIsUserLoggedIn] = useState<Boolean>(true)
  const [aiDialogOpen, setAiDialogOpen] = useState<boolean>(false)
  const [aiResponse, setAiResponse] = useState<String>("")
  const [loadingCollegeId, setLoadingCollegeId] = useState<number | null>(null)

  const searchParams = useSearchParams()

  const percentile = searchParams.get("percentile")
  const gender = searchParams.get("gender")
  const category = searchParams.get("category")
  const location = searchParams.get("location")
  const branches = searchParams.get("branches")?.split(",") || []

  useEffect(() => {
    const fetchColleges = async () => {
      const response = await axios.post("/api/users/college-recommendations", {
        percentile,
        gender,
        category,
        location,
        branches,
      })
      const fetchedColleges = response.data.results.map((college: College) => ({
        ...college,
        isBookmarked: false,
      }))
      setColleges(fetchedColleges)
    }

    const checkUserLoggedIn = async () => {
      const session = await getSession()
      setIsUserLoggedIn(!!session)
    }

    checkUserLoggedIn()
    fetchColleges()
  }, [])

  const toggleBookmark = (id: number) => {
    setColleges(
      colleges.map((college) =>
        college.id === id
          ? { ...college, isBookmarked: !college.isBookmarked }
          : college
      )
    )
  }

  const handleGenAi = async (collegeId: number) => {
    if (!isUserLoggedIn) {
      alert("Please log in to use AI features.")
      return
    }
    try {
      setLoadingCollegeId(collegeId)
      const response = await axios.post(`/api/users/genai/info/${collegeId}`)
      setAiResponse(response.data.summary)
      setAiDialogOpen(true)
    } catch (error) {
      console.error("Error generating AI response:", error)
      alert("Failed to generate AI response.")
    } finally {
      setLoadingCollegeId(null)
    }
  }

  const exportData = (format: string) => {
    if (!isUserLoggedIn) {
      alert("Please log in to export data.")
      return
    }

    const exportCols = colleges.map(({ id, isBookmarked, ...rest }) => rest)

    if (format === "csv") {
      const ws = XLSXUtils.json_to_sheet(exportCols)
      const wb = XLSXUtils.book_new()
      XLSXUtils.book_append_sheet(wb, ws, "Colleges")
      XLSXWriteFile(wb, "colleges.csv")
    } else if (format === "pdf") {
      const doc = new jsPDF()
      const columns = Object.keys(exportCols[0])
      const rows = exportCols.map((row) => columns.map((col) => row[col]))
      doc.autoTable({
        head: [columns],
        body: rows,
        styles: { fontSize: 9 },
        margin: { top: 20 },
      })
      doc.save("colleges.pdf")
    } else {
      alert(`Exporting ${format} not supported.`)
    }
  }

  const filteredColleges = colleges.filter(
    (college) =>
      college.collegeName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const bookmarkedColleges = colleges.filter((college) => college.isBookmarked)

  return (
    <>
      <Navbar />
      <div className="p-3 mt-16">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 m-2">
            <Link href="/studentform">
              <Button variant="outline" size="icon">
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <h1 className="text-xl sm:text-xl font-bold">College Recommendations</h1>
          </div>
        </div>

        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="relative w-full max-w-sm">
            <Input
              placeholder="Search colleges, branches..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
            <SearchIcon className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
          </div>
          <div className="flex gap-2">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline">
                  <Download className="mr-2 h-4 w-4" />
                  Export
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => exportData("pdf")}>
                  <FileDown className="mr-2 h-4 w-4" />
                  Export as PDF
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => exportData("csv")}>
                  <FileDown className="mr-2 h-4 w-4" />
                  Export as CSV
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <Tabs defaultValue="all">
          <TabsList>
            <TabsTrigger value="all">All Colleges</TabsTrigger>
            <TabsTrigger value="bookmarked">
              Bookmarked
              {bookmarkedColleges.length > 0 && (
                <Badge variant="secondary" className="ml-2">
                  {bookmarkedColleges.length}
                </Badge>
              )}
            </TabsTrigger>
          </TabsList>
          <TabsContent value="all" className="mt-6">
            <CollegeTable
              colleges={filteredColleges}
              toggleBookmark={toggleBookmark}
              handleGenAi={handleGenAi}
              loadingCollegeId={loadingCollegeId}
            />
          </TabsContent>
          <TabsContent value="bookmarked" className="mt-6">
            <CollegeTable
              colleges={bookmarkedColleges}
              toggleBookmark={toggleBookmark}
              handleGenAi={handleGenAi}
              loadingCollegeId={loadingCollegeId}
            />
          </TabsContent>
        </Tabs>
      </div>
      <CardFooter className="text-center py-6 text-sm text-gray-500">
        © 2025 Rankwise. All rights reserved.
      </CardFooter>

      <Dialog open={aiDialogOpen} onOpenChange={setAiDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>AI Summary</DialogTitle>
            <DialogDescription>
              Here is the AI generated summary for this college:
            </DialogDescription>
          </DialogHeader>
          <div className="p-4 max-h-[300px] overflow-y-auto text-sm text-gray-700 whitespace-pre-line">
            {aiResponse}
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Close</Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}

const CollegeTable = ({
  colleges,
  toggleBookmark,
  handleGenAi,
  loadingCollegeId,
}: {
  colleges: College[]
  toggleBookmark: (id: number) => void
  handleGenAi: (collegeId: number) => void
  loadingCollegeId: number | null
}) => (
  <Card>
    <CardHeader className="pb-0">
      <CardTitle>Colleges</CardTitle>
      <CardDescription>Based on your preferences</CardDescription>
    </CardHeader>
    <CardContent>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>College Name</TableHead>
              <TableHead>Branch</TableHead>
              <TableHead>Category</TableHead>
              <TableHead>Location</TableHead>
              <TableHead>Past Cutoff</TableHead>
              <TableHead>Bookmark</TableHead>
              <TableHead>AI Summary</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {colleges.length > 0 ? (
              colleges.map((college) => (
                <TableRow key={college.id}>
                  <TableCell>{college.collegeName}</TableCell>
                  <TableCell>{college.branch}</TableCell>
                  <TableCell>{college.category}</TableCell>
                  <TableCell>{college.location}</TableCell>
                  <TableCell>{college.cutoff}%</TableCell>
                  <TableCell>
                    <Button variant="ghost" size="icon" onClick={() => toggleBookmark(college.id)}>
                      {college.isBookmarked ? (
                        <BookmarkCheck className="h-5 w-5 text-teal-600" />
                      ) : (
                        <Bookmark className="h-5 w-5" />
                      )}
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handleGenAi(college.id)}
                      disabled={loadingCollegeId === college.id}
                    >
                      {loadingCollegeId === college.id ? (
                        <span className="animate-pulse text-sm text-gray-500">Loading...</span>
                      ) : (
                        <>
                          <Sparkles className="text-purple-500 mr-1 h-4 w-4" />
                          <span>AI</span>
                        </>
                      )}
                    </Button>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-6">
                  No colleges found matching your search.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  </Card>
)

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="8" />
    <path d="M21 21l-4.3-4.3" />
  </svg>
)
