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
import { set } from "react-hook-form"

export default function Home() {
  const router = useRouter()

  const [percentile, setPercentile] = useState("")
  const [gender, setGender] = useState("")
  const [category, setCategory] = useState("")
  const [branches, setBranches] = useState<string[]>([])
  const [location, setLocation] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isUserInfoLoading, setIsUserInfoLoading] = useState(false)

  const [branchOptions, setBranchOptions] = useState<{ label: string; value: string }[]>([])
  const [locationOptions, setLocationOptions] = useState<string[]>([])
  const [categoryOptions, setCategoryOptions] = useState<string[]>([])

  // User Info States
  const [showUserInfoForm, setShowUserInfoForm] = useState(false)
  const [userInfo, setUserInfo] = useState({ name: "", email: "", phone: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

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
    } else {
      alert(data.error || "Something went wrong")
    }

    setIsLoading(false)
  }

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get("/api/users/college-recommendations")
        const { branches, locations, categories } = response.data

        const branchOptionsMapped = branches.map((branch: any) => {
          const branchValue = typeof branch === "object" ? branch.branch : branch
          return {
            label: branchValue,
            value: branchValue,
          }
        })
        setBranchOptions(branchOptionsMapped)
        setLocationOptions(locations)
        setCategoryOptions(categories)
      } catch (error) {
        console.error("Error fetching initial data:", error)
      }
    }

    fetchData()

    // Show user info form once
    const hasSubmittedInfo = localStorage.getItem("userInfoSubmitted")
    if (!hasSubmittedInfo) {
      setShowUserInfoForm(true)
    }
  }, [])

  const isDataLoaded =
    branchOptions.length > 0 && locationOptions.length > 0 && categoryOptions.length > 0

  return (
    <>
      <Navbar />

      {/* User Info Modal */}
      {showUserInfoForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
            <h2 className="text-lg font-semibold">We’d love to know you!</h2>
            <p className="text-sm text-gray-600">
              Enter your info to help us personalize recommendations.
            </p>
            <form
              onSubmit={async (e) => {
                e.preventDefault()
                setIsUserInfoLoading(true)
                try {
                  await axios.post("/api/users/info", userInfo)
                  localStorage.setItem("userInfoSubmitted", "true")
                  setShowUserInfoForm(false)
                  setIsUserInfoLoading(false)
                  alert("User info submitted successfully!")
                } catch (err) {
                  alert("Failed to submit info. Try again.")
                  setIsUserInfoLoading(false)
                }
              }}
              className="space-y-4 p-6"
            >
              <Input
                placeholder="Name"
                value={userInfo.name}
                type="text"
                onChange={(e) => setUserInfo({ ...userInfo, name: e.target.value })}
                required
              />
              <Input
                placeholder="Email"
                value={userInfo.email}
                type="email"
                title="Please enter a valid email address"
                onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
                required
              />
              <Input
                placeholder="Phone"
                value={userInfo.phone}
                type="tel"
                pattern="[0-9]{10}"
                title="Please enter a valid 10-digit phone number"
                onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
                required
              />
              <div className="flex justify-end space-x-2 mt-4">
                <Button
                  type="submit"
                  className="bg-[#0F766E] text-white hover:bg-[#0F766E]/90"
                  disabled={isUserInfoLoading}
                >
                  {isUserInfoLoading ? "Submitting..." : "Submit"}
                </Button>
              </div>
            </form>
          </div>
        </div>

      )}

      <div className="container flex min-h-screen flex-col items-center justify-center py-12 mt-16">
        <Card className="mx-auto w-full max-w-md transition-all hover:shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl">Find Your College</CardTitle>
            <CardDescription>
              Enter your details to get college recommendations<br />
              <span className="text-sm text-gray-500">
                Want to see the full cutoff list? Just enter{" "}
                <span className="bg-yellow-100 text-yellow-800 font-medium px-1 rounded">100</span>{" "}
                as your percentile.
              </span>
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
                        {categoryOptions.map((cat: any, index) => (
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
                        {locationOptions.map((loc: any, index) => (
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
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      <div className="p-3">
        <div className="bg-[#0F766E] text-white text-sm md:text-base text-center px-4 py-3 rounded-md shadow-md mt-6">
          <p>
            <strong>Less Percentile / No College Found ?</strong> No problem! Get a consultation call at{" "}
            <a href="tel:9595238661" className="underline hover:text-gray-200">9595444319</a>{" "}
            or email us at{" "}
            <a href="mailto:guessmycollege@gmail.com" className="underline hover:text-gray-200">
              guessmycollege@gmail.com
            </a>. We're here to help!
          </p>
        </div>
      </div>
    </>
  )
}
