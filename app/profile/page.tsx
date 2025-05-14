"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import axios from "axios"

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarImage,
  AvatarFallback,
} from "@/components/ui/avatar"
import { Label } from "@/components/ui/label"
import { GraduationCap } from "lucide-react"
import { getSession, signOut } from "next-auth/react"

export default function Profile() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [percentile, setPercentile] = useState("")
  const [branches, setBranches] = useState("")
  const [location, setLocation] = useState("")
  const [loading, setLoading] = useState(true)

  const router = useRouter()

  useEffect(() => {
    const fetchProfile = async () => {
      const session = await getSession()
      if (!session) {
        router.push("/login") // Redirect to login page
        return
      }

      try {
        const res = await axios.get("/api/users/profile");
        const data = res.data
        setName(data.name || "")
        setEmail(data.email || "")
        setPhone(data.phone || "")
        setPercentile(data.percentile?.toString() || "")
        setBranches(data.branches?.join(", ") || "")
        setLocation(data.location?.join(", ") || "")
      } catch (err) {
        console.error("Error fetching profile:", err)
      } finally {
        setLoading(false)
      }
    }

    fetchProfile()
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      await axios.post("/api/users/profile", {
        firstname: name.split(" ")[0],
        lastname: name.split(" ").slice(1).join(" ") || "",
        email,
        phone,
        percentile:Number(percentile),
        branches:branches.split(',').map((c: string) => c.trim()),
        location:location.split(',').map((c: string) => c.trim()),
      })
      alert("Profile saved successfully!")
    } catch (err) {
      console.error("Error saving profile:", err)
      alert("Failed to save profile.")
    }
  }

  if (loading) return <div className="text-center py-10">Loading...</div>

  return (
    <>
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

      {/* Profile Card */}
      <div className="min-h-screen bg-muted flex items-center justify-center py-12 px-4">
        <Card className="w-full max-w-lg shadow-xl rounded-2xl">
          <CardHeader>
            <CardTitle className="text-center text-2xl font-semibold">
              Your Profile
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col items-center gap-6">
              <Avatar className="h-24 w-24">
                <AvatarImage src="/placeholder-user.jpg" alt="User Avatar" />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>

              <form className="w-full space-y-4" onSubmit={handleSubmit}>
                <div className="grid gap-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="percentile">Percentile</Label>
                  <Input
                    id="percentile"
                    placeholder="Enter your percentile"
                    value={percentile}
                    onChange={(e) => setPercentile(e.target.value)}
                    required
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="branches">Interested Branches</Label>
                  <Input
                    id="branches"
                    placeholder="e.g. CSE, IT, AIML"
                    value={branches}
                    onChange={(e) => setBranches(e.target.value)}
                  />
                </div>

                <div className="grid gap-2">
                  <Label htmlFor="location">Preferred Location</Label>
                  <Input
                    id="location"
                    placeholder="e.g. Pune, Mumbai"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>

                <Button type="submit" className="w-full mt-4 bg-teal-600 hover:bg-teal-700">
                  Save Changes
                </Button>

                <Button
                  type="button"
                  className="w-full mt-4 bg-red-600 hover:bg-red-700"
                  onClick={() => signOut()}
                >
                  Log out
                </Button>
              </form>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  )
}
