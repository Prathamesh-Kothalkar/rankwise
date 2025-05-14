"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { GraduationCap, LogIn } from "lucide-react"
import { useRouter } from "next/navigation"
import { signIn } from "next-auth/react"

export default function LoginPage() {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
  })

  const [errors, setErrors] = useState({
    username: "",
    password: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }))
    }
  }

  const validateForm = () => {
    let valid = true
    const newErrors = { ...errors }

    if (!formData.username.trim()) {
      newErrors.username = "username is required"
      valid = false
    }

    if (!formData.password) {
      newErrors.password = "Password is required"
      valid = false
    }

    setErrors(newErrors)
    return valid
  }

  const router = useRouter()

const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault()

  if (!validateForm()) return

  const res = await signIn("credentials", {
    username: formData.username,
    password: formData.password,
    redirect: false,
  })

  if (res?.ok) {
    router.push("/") 
  } else {
    setErrors((prev) => ({
      ...prev,
      password: "Invalid credentials",
    }))
  }
}

  return (
    <div className="container flex min-h-screen flex-col items-center justify-center py-12">
      <div className="mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 text-center">
        <div className="flex items-center justify-center gap-2">
          <GraduationCap className="h-8 w-8 text-teal-600" />
          <h1 className="text-3xl font-bold leading-tight tracking-tighter md:text-5xl">RankWise</h1>
        </div>
      </div>

      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Welcome Back</CardTitle>
          <CardDescription>Login to access your saved colleges and preferences</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="username">username</Label>
                <Input
                  id="username"
                  name="username"
                  type="text"
                  placeholder="Enter your username"
                  value={formData.username}
                  onChange={handleChange}
                />
                {errors.username && <p className="text-sm text-red-500">{errors.username}</p>}
              </div>

              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                />
                {errors.password && <p className="text-sm text-red-500">{errors.password}</p>}
              </div>

              <div className="flex justify-end">
                <Link href="/forgot-password" className="text-sm font-medium text-teal-600 hover:underline">
                  Forgot password?
                </Link>
              </div>
            </div>

            <Button className="mt-6 w-full bg-teal-600 hover:bg-teal-700" type="submit">
              <LogIn className="mr-2 h-4 w-4" /> Login
            </Button>
          </form>
        </CardContent>
        <CardFooter className="flex justify-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/register" className="font-medium text-teal-600 hover:underline">
              Register
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  )
}
