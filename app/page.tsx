"use client"
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

export default function HomePage() {
  const router= useRouter();
  const handleRedirect = () => {
    router.push("/studentform");
  };
  return (
    <div className="min-h-screen bg-white text-[#0F766E]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md">
        <h1 className="text-2xl font-bold">Guess My College</h1>
        <Button 
        className="bg-[#0F766E] text-white px-6 py-2 rounded-lg hover:bg-[#0e665f] transition"
        onClick={handleRedirect}>
          Try for Free
        </Button>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10">
        {/* Text Content */}
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Get Your Best College Recommendation for MHT-CET
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            GMC (Guess My College) uses AI to help you discover the best engineering colleges in Maharashtra based on your MHT-CET score.
          </p>
          <Button 
          className="bg-[#0F766E] text-white px-8 py-3 rounded-lg text-lg hover:bg-[#0e665f] transition"
          onClick={handleRedirect}>
            Try for Free
          </Button>
        </div>

        {/* Hero Image / Illustration */}
        <div>
          <Image
            width={500}
            height={500}
            alt="Rankwise Image"
            className="w-full max-w-md mx-auto"
            src="/sampleimg.jpg"
            />
        </div>
      </section>

       <div className="">
          <HowItWorksAndFAQ />
        </div>

      {/* Footer (Optional) */}
     <Footer/>
    </div>
  );
}


export  function HowItWorksAndFAQ() {
  return (
    <div className="bg-white text-[#0F766E] px-6 md:px-16 py-16 space-y-24">

      {/* How It Works Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {[
            {
              title: "1. Enter Your MHT-CET Score",
              desc: "Provide your MHT-CET score to begin the recommendation process."
            },
            {
              title: "2. Get Personalized Matches",
              desc: "Our AI analyzes your profile and matches it with top colleges."
            },
            {
              title: "3. Explore & Apply",
              desc: "View detailed info about your matched colleges and take action."
            }
          ].map((item, i) => (
            <Card key={i} className="bg-[#F0FDF9] p-6 rounded-xl shadow-md">
              <CardContent className="text-xl font-semibold mb-2">{item.title}</CardContent>
              <p className="text-gray-700">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {[
            {
              question: "Is Guess My College free to use?",
              answer: "Yes! GMC is completely free for students to explore college recommendations."
            },
            {
              question: "Which exams does it support?",
              answer: "Currently, GMS only supports MH-CET based recommendations for engineering colleges."
            },
            {
              question: "How accurate are the recommendations?",
              answer: "We use AI and past admission data to provide highly relevant and personalized suggestions."
            },
            {
              question: "Can I apply directly through GMS?",
              answer: "We provide links and guidance, but the final application is done through the official CAP portal."
            }
          ].map((faq, i) => (
            <details key={i} className="bg-[#F0FDF9] p-4 rounded-lg shadow-sm">
              <summary className="cursor-pointer font-semibold text-lg">{faq.question}</summary>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}

