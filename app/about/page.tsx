import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"

export const metadata: Metadata = {
  title: "About Us | Guess My College",
  description: "Learn more about Guess My College and the mission behind the platform.",
}

export default function AboutPage() {
  return (
    <>
      <Navbar />

      <main className="max-w-4xl mx-auto px-4 py-16 mt-16">
        <Card className="shadow-lg border border-[#0F766E] rounded-2xl">
          <CardHeader>
            <CardTitle className="text-3xl font-bold text-primary">About Us</CardTitle>
          </CardHeader>

          <CardContent className="space-y-6 text-gray-800 text-sm md:text-base leading-relaxed">
            <p>
              <strong>Guess My College</strong> is a student-first platform designed to assist aspiring engineers in Maharashtra
              in identifying the most suitable colleges based on their CET rank. We leverage historical cutoff data and admission
              patterns to generate accurate, actionable predictions.
            </p>

            <p>
              The inspiration behind this platform stems from the challenges faced by thousands of students every year who are unsure
              about which colleges they might qualify for. Instead of spending hours digging through PDFs and forums, we offer
              a smart, simplified, and modern alternative.
            </p>

            <p>
              Built and maintained by <strong>Prathamesh Kothalkar</strong> & <strong>Mayuresh Kothalkar</strong> students and developers who understand
              these struggles firsthand  Guess My College is a genuine attempt to ease this journey for others.
            </p>

            <h2 className="text-xl font-semibold mt-6">What We Offer</h2>
            <ul className="list-disc list-inside space-y-2 pl-4">
              <li>College predictions based on CET rank</li>
              <li>Previous year closing ranks filtered by branch and category</li>
              <li>Bookmark feature to track your favorite colleges</li>
              <li>Clean, responsive, and mobile-friendly UI</li>
              <li>Continuous updates based on real student feedback</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
            <p>
              To bring transparency, accuracy, and confidence to the college selection process for every student in Maharashtra.
            </p>

            <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
            <p>
              We'd love to hear from you! Whether it’s a suggestion, question, or collaboration idea — we’re just an email away:
              <br />
              📧{" "}
              <a href="mailto:guessmycollege@gmail.com" className="text-blue-500 underline">
                guessmycollege@gmail.com
              </a>
            </p>
          </CardContent>
        </Card>
      </main>
    </>
  )
}
