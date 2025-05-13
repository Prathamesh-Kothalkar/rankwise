"use client"

import Link from "next/link"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MultiSelect } from "@/components/multi-select"
import { GraduationCap, Search } from "lucide-react"

export default function Home() {
  const router = useRouter()

  const [percentile, setPercentile] = useState("")
  const [gender, setGender] = useState("")
  const [category, setCategory] = useState("")
  const [branches, setBranches] = useState<string[]>([])
  const [location, setLocation] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
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
    alert(JSON.stringify(data, null, 2));
    if (res.ok) {
      router.push("/results") // You can enhance this to pass data via search params or state
    } else {
      alert(data.error || "Something went wrong")
    }
  }

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      {/* Header */}
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8 text-teal-600" />
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]">
            RankWise
          </h1>
        </div>
        <h2 className="max-w-[750px] text-lg text-muted-foreground sm:text-xl">
          Discover the perfect college based on your entrance exam percentile and preferences
        </h2>
      </div>

      {/* Form Card */}
      <Card className="mx-auto w-full max-w-md transition-all hover:shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl">Find Your College</CardTitle>
          <CardDescription>Enter your details to get college recommendations</CardDescription>
        </CardHeader>
        <CardContent>
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
                    <SelectItem value="General">General</SelectItem>
                    <SelectItem value="OBC">OBC</SelectItem>
                    <SelectItem value="SC">SC</SelectItem>
                    <SelectItem value="ST">ST</SelectItem>
                    <SelectItem value="EWS">EWS</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex flex-col space-y-1.5">
                <label htmlFor="branch">Branch Preference</label>
                <MultiSelect
                  placeholder="Select branches"
                  options={[
                    { label: "Computer Science", value: "CS/CSE" },
                    { label: "Information Technology", value: "IT" },
                    { label: "Electronics", value: "ECE" },
                    { label: "Electrical", value: "EE" },
                    { label: "Mechanical", value: "MECH" },
                    { label: "Civil", value: "CIVIL" },
                    { label: "Chemical", value: "CHE" },
                  ]}
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
                    <SelectItem value="Sangli">West India</SelectItem>
                    <SelectItem value="Pune">West India</SelectItem>
                    <SelectItem value="Nagpur">Central India</SelectItem>
                    <SelectItem value="Amravati">Amravati</SelectItem>
                    <SelectItem value="Any">Any Location</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <CardFooter className="flex justify-center mt-4">
              <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700">
                <Search className="mr-2 h-4 w-4" /> Find Colleges
              </Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
