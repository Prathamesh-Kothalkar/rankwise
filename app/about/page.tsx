import { Metadata } from "next"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/Navbar"
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "About Us | Guess My College",
  description: "Learn more about Guess My College and the mission behind the platform.",
}

export default function AboutPage() {
  return (
    <>
    <Navbar/>
   
    <div className="max-w-4xl mx-auto px-4 py-12 mt-16">
      <Card className="shadow-xl border border-[#0F766E] rounded-2xl">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">About Us</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 text-black text-sm md:text-base leading-relaxed">
          <p>
            <strong>Guess My College</strong> is a student-centric platform built to help aspiring engineers in Maharashtra
            find the right college based on their CET rank. We analyze past years' data, including cutoff trends and admission patterns,
            to provide accurate and meaningful predictions.
          </p>

          <p>
            The idea was born out of a real need faced by thousands of students every year who struggle to understand which college they might get.
            Instead of browsing hundreds of cutoff PDFs and guessing, we aim to give clarity and save time by providing a clean, intuitive, and intelligent tool.
          </p>

          <p>
            This platform is developed by <strong>Prathamesh Kothalkar</strong> & Mayuresh Kothalkar, a developer and student's who understands the challenges firsthand and
            is committed to simplifying the admission journey for others.
          </p>

          <h2 className="text-xl font-semibold mt-6">🔍 What We Offer</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>College predictions based on your CET rank</li>
            <li>Previous year closing ranks by branch and category</li>
            <li>Bookmark colleges and explore with ease</li>
            <li>Regular updates and improvements based on feedback</li>
          </ul>

          <h2 className="text-xl font-semibold mt-6">📌 Our Mission</h2>
          <p>
            To make college prediction and selection transparent, accurate, and stress-free for every student in Maharashtra.
          </p>

          <h2 className="text-xl font-semibold mt-6">📫 Contact Us</h2>
          <p>
            We’d love to hear from you! For feedback, queries, or collaborations, feel free to reach out:
            <br />
            📧 <a href="mailto:support@guessmycollege.in" className="text-blue-400 underline">support@guessmycollege.in</a>
          </p>
        </CardContent>
      </Card>
    </div>
    <Footer/>
     </>
  )
}
