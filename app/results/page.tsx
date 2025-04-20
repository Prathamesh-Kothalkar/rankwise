"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Bookmark, BookmarkCheck, Download, FileDown, Filter, SortAsc } from "lucide-react"

// Sample data for demonstration
const collegeData = [
  {
    id: 1,
    name: "Indian Institute of Technology, Delhi",
    branch: "Computer Science",
    category: "General",
    location: "North India",
    cutoff: 98.5,
    isBookmarked: false,
  },
  {
    id: 2,
    name: "National Institute of Technology, Trichy",
    branch: "Information Technology",
    category: "OBC",
    location: "South India",
    cutoff: 97.2,
    isBookmarked: false,
  },
  {
    id: 3,
    name: "Birla Institute of Technology, Pilani",
    branch: "Electronics",
    category: "General",
    location: "North India",
    cutoff: 96.8,
    isBookmarked: false,
  },
  {
    id: 4,
    name: "College of Engineering, Pune",
    branch: "Computer Science",
    category: "SC",
    location: "West India",
    cutoff: 92.5,
    isBookmarked: false,
  },
  {
    id: 5,
    name: "Delhi Technological University",
    branch: "Mechanical",
    category: "General",
    location: "North India",
    cutoff: 94.7,
    isBookmarked: false,
  },
  {
    id: 6,
    name: "Vellore Institute of Technology",
    branch: "Information Technology",
    category: "General",
    location: "South India",
    cutoff: 93.1,
    isBookmarked: false,
  },
  {
    id: 7,
    name: "Indian Institute of Technology, Bombay",
    branch: "Computer Science",
    category: "General",
    location: "West India",
    cutoff: 99.2,
    isBookmarked: false,
  },
  {
    id: 8,
    name: "National Institute of Technology, Warangal",
    branch: "Electrical",
    category: "OBC",
    location: "South India",
    cutoff: 95.6,
    isBookmarked: false,
  },
]

export default function ResultsPage() {
  const [colleges, setColleges] = useState(collegeData)
  const [searchTerm, setSearchTerm] = useState("")

  const toggleBookmark = (id: number) => {
    setColleges(
      colleges.map((college) => (college.id === id ? { ...college, isBookmarked: !college.isBookmarked } : college)),
    )
  }

  const filteredColleges = colleges.filter(
    (college) =>
      college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.branch.toLowerCase().includes(searchTerm.toLowerCase()) ||
      college.location.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const bookmarkedColleges = colleges.filter((college) => college.isBookmarked)

  const exportData = (format: string) => {
    alert(`Exporting data in ${format} format`)
    // Implementation would go here
  }

  return (
    <div className="container py-8">
      <div className="mb-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/">
            <Button variant="outline" size="icon">
              <ArrowLeft className="h-4 w-4" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">College Recommendations</h1>
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

      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full max-w-sm">
          <Input
            placeholder="Search colleges, branches..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            <Filter className="mr-2 h-4 w-4" />
            Filter
          </Button>
          <Button variant="outline" size="sm">
            <SortAsc className="mr-2 h-4 w-4" />
            Sort
          </Button>
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
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>All Colleges</CardTitle>
              <CardDescription>Based on your percentile and preferences</CardDescription>
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
                      <TableHead className="w-[80px]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredColleges.length > 0 ? (
                      filteredColleges.map((college) => (
                        <TableRow key={college.id}>
                          <TableCell className="font-medium">{college.name}</TableCell>
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
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center">
                          No colleges found matching your search.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="bookmarked" className="mt-6">
          <Card>
            <CardHeader className="pb-0">
              <CardTitle>Bookmarked Colleges</CardTitle>
              <CardDescription>Colleges you've saved for later</CardDescription>
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
                      <TableHead className="w-[80px]">Action</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bookmarkedColleges.length > 0 ? (
                      bookmarkedColleges.map((college) => (
                        <TableRow key={college.id}>
                          <TableCell className="font-medium">{college.name}</TableCell>
                          <TableCell>{college.branch}</TableCell>
                          <TableCell>{college.category}</TableCell>
                          <TableCell>{college.location}</TableCell>
                          <TableCell>{college.cutoff}%</TableCell>
                          <TableCell>
                            <Button variant="ghost" size="icon" onClick={() => toggleBookmark(college.id)}>
                              <BookmarkCheck className="h-5 w-5 text-teal-600" />
                            </Button>
                          </TableCell>
                        </TableRow>
                      ))
                    ) : (
                      <TableRow>
                        <TableCell colSpan={6} className="h-24 text-center">
                          You haven't bookmarked any colleges yet.
                        </TableCell>
                      </TableRow>
                    )}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

function Search(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}
