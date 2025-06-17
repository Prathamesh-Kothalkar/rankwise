import Navbar from "@/components/Navbar"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import React from "react"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us | Guess My College",
  description:
    "Have questions or feedback? Contact us at Guess My College. We're here to help!",
  
}

export default function ContactUsPage() {
  const [result, setResult] = React.useState("")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setResult("Sending...")

    const form = e.currentTarget
    const formData = new FormData(form)
    formData.append("access_key", "be9302da-227f-4d25-8d74-38e85417057b")
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("Form submitted successfully ✅")
      form.reset()
    } else {
      console.error("Error:", data)
      setResult("Something went wrong. Please try again.")
    }
  }

  return (
    <>
      <Navbar />
      <main className="max-w-3xl mx-auto mt-20 px-4 sm:px-6 lg:px-8">
        <Card className="shadow-md">
          <CardHeader>
            <CardTitle className="text-3xl font-bold">Contact Us</CardTitle>
            <p className="text-sm text-muted-foreground mt-1">
              Have questions or feedback? We're here to help!
            </p>
          </CardHeader>
          <CardContent className="space-y-8">
            {/* Contact Info */}
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h2 className="text-lg font-semibold mb-1">Email</h2>
                <a
                  href="mailto:guessmycollege@gmail.com"
                  className="text-blue-600 hover:underline break-all"
                >
                  guessmycollege@gmail.com
                </a>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Phone</h2>
                <p className="text-gray-800">+91 9595444319</p>
              </div>
              <div className="sm:col-span-2">
                <h2 className="text-lg font-semibold mb-1">Address</h2>
                <p className="text-gray-800 leading-relaxed">
                  GuessMyCollege Inc. <br />
                  Narhe, Pune <br />
                  Maharashtra, India - 411041
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="name" className="block font-medium mb-1">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0E665F]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block font-medium mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0E665F]"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block font-medium mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Type your message..."
                    className="w-full rounded-md border border-gray-300 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#0E665F]"
                    required
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full sm:w-fit bg-[#0E665F] text-white"
                >
                  Send Message
                </Button>
              </form>

              {result && (
                <p className="text-sm mt-4 text-center text-[#0E665F]">
                  {result}
                </p>
              )}
            </div>
          </CardContent>
        </Card>
      </main>
    </>
  )
}
