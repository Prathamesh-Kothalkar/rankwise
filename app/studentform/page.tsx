"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { MultiSelect } from "@/components/multi-select"
import { GraduationCap, Search } from "lucide-react"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"
import axios from "axios"

export default function Home() {
  const router = useRouter()

  const [percentile, setPercentile] = useState("")
  const [gender, setGender] = useState("")
  const [category, setCategory] = useState("")
  const [branches, setBranches] = useState<string[]>([])
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  
  const [branchOptions, setBranchOptions] = useState<{ label: string; value: string }[]>([])
  const [locationOptions, setLocationOptions] = useState<string[]>([])
  const [categoryOptions, setCategoryOptions] = useState<string[]>([])

  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault()

    const res = await fetch("/api/users/college-recommendations", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        percentile: parseFloat(percentile),
        gender,
        category,
        branches,
        location,
      }),
    })

    const data = await res.json()
    if (res.ok) {
      const queryParams = new URLSearchParams({
        percentile,
        gender,
        category,
        location,
        branches: branches.join(","),
      })
      router.push(`/results?${queryParams.toString()}`)
      setIsLoading(false)
    } else {
      setIsLoading(false)
      alert(data.error || "Something went wrong")
    }
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/users/college-recommendations")
        const { branches, locations, categories } = response.data

        // Map branches into label/value pair for MultiSelect
        const branchOptionsMapped = branches.map((branch: any) => {
          const branchValue = typeof branch === "object" ? branch.branch : branch
          return {
            label: branchValue,
            value: branchValue,
          }
        })
        let branchOptions = branchOptionsMapped
        setBranchOptions(branchOptions)
        setLocationOptions(locations)
        setCategoryOptions(categories)

      } catch (error) {
        console.error("Error fetching initial data:", error)
      }
    }
    fetchData()
  }, [])

  // Helper to avoid hydration warning:
  const isDataLoaded =
    branchOptions.length > 0 && locationOptions.length > 0 && categoryOptions.length > 0

  return (
    <>
      <Navbar />
      <div className="container flex min-h-screen flex-col items-center justify-center py-12 mt-16">
        <Card className="mx-auto w-full max-w-md transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Find Your College</CardTitle>
            <CardDescription>
              Enter your details to get college recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            {isDataLoaded ? (
              <form onSubmit={handleSubmit}>
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="percentile">Percentile</label>
                    <Input
                      id="percentile"
                      type="number"
                      min="0"
                      max="100"
                      value={percentile}
                      onChange={(e) => setPercentile(e.target.value)}
                      required
                    />
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="gender">Gender</label>
                    <Select onValueChange={setGender}>
                      <SelectTrigger id="gender">
                        <SelectValue placeholder="Select your gender" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Male">Male</SelectItem>
                        <SelectItem value="Female">Female</SelectItem>
                        <SelectItem value="Other">Other</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="category">Category</label>
                    <Select onValueChange={setCategory}>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Select your category" />
                      </SelectTrigger>
                      <SelectContent>
                        {categoryOptions.map((cat,index) => (
                          <SelectItem key={index} value={cat.category}>
                            {cat.category}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="branch">Branch Preference</label>
                    <MultiSelect
                      placeholder="Select branches"
                      options={branchOptions}
                      selected={branches}
                      onChange={setBranches}
                    />

                  </div>

                  <div className="flex flex-col space-y-1.5">
                    <label htmlFor="location">Location</label>
                    <Select onValueChange={setLocation}>
                      <SelectTrigger id="location">
                        <SelectValue placeholder="Select preferred location" />
                      </SelectTrigger>
                      <SelectContent>
                        {locationOptions.map((loc,index) => (
                          <SelectItem key={index} value={loc.location}>
                            {loc.location}
                          </SelectItem>
                        ))}
                        <SelectItem value="Any">Any Location</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <CardFooter className="flex justify-center mt-4">
                  {isLoading ? (
                    <Button disabled className="w-full bg-teal-600 hover:bg-teal-700">
                      <Search className="animate-ping" /> Finding Colleges...
                    </Button>
                  ) : (
                    <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                      <Search className="mr-2 h-4 w-4" /> Find Colleges
                    </Button>
                  )}
                </CardFooter>
              </form>
            ) : (
              <div className="animate-pulse space-y-4">
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-12 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-12 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-12 bg-gray-300 rounded"></div>
                <div className="h-6 bg-gray-300 rounded"></div>
                <div className="h-12 bg-gray-300 rounded"></div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </>
  )
}
