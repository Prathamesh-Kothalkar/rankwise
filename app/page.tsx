"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap, Search, BarChart, Sparkle, Ban } from "lucide-react";
import React, { useEffect } from "react";
import Link from "next/link";
import AppInstallButton from "@/components/AppInstallButton";
import EzoicAd from "@/components/EzoicAd";
import YoutubeChannelAd from "@/components/UtubeBanner";
import PersonalizedPdf from "@/components/PersonalizedPdf";
import ModelUpdateModal from "@/components/ModelUpdate";
import MhtCetResultBanner from "@/components/MhtCetResultBanner";

export default function HomePage() {
  const router = useRouter();
  const handleRedirect = () => {
    router.push("/studentform");
  };

  return (
    <div className="min-h-screen bg-white text-[#0F766E]">
      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white sticky top-0 z-10">
        <h1 className="text-xl font-bold">Guess My College</h1>
        <div className="flex items-center gap-4">
          <button
            onClick={handleRedirect}
            className="bg-[#0F766E] hover:bg-[#0e665f] text-white px-4 py-2 rounded-lg transition-all"
          >
            Try Now
          </button>
        </div>
      </nav>


    {/* <div className="p-5">
        <PersonalizedPdf/>
    </div> */}


    {/* <ModelUpdateModal/> */}

   

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center justify-between px-6 md:px-16 py-20 gap-10">
        <div className="max-w-xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
            Get Your Best College Recommendation for MHT-CET
          </h2>
          <p className="text-lg mb-6 text-gray-700">
            GMC (Guess My College) uses AI to help you discover the best engineering colleges in Maharashtra based on your MHT-CET score.
          </p>
          <div className="flex gap-4">
            <Button
              onClick={handleRedirect}
              className="bg-[#0F766E] hover:bg-[#0e665f] text-white px-8 py-3 rounded-lg text-lg transition-all"
            >
              Try Now
            </Button>
            <Link
              href="/blog"
              className="bg-[#0F766E] hover:bg-[#0e665f] text-white px-4 py-2 rounded-lg transition-all"
            >
              Blogs
            </Link>
          </div>
        </div>

        <div>
          <Image
            width={500}
            height={500}
            alt="AI-powered college suggestion"
            className="w-full max-w-md"
            src="/sampleimg.jpg"
            loading="eager"
          />
        </div>
      </section>


       <MhtCetResultBanner/>
      

      

      {/* SEO-Rich Content */}
      <section className="p-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">Welcome to Guess My College</h2>
        <p className="text-lg mb-4 text-gray-700">
          Guess My College is a smart, AI-powered college predictor built for students appearing for the MHT-CET examination in Maharashtra. Whether you're a first-time aspirant or reappearing to improve your score, GMC offers you a personalized and data-driven college prediction system that saves time and increases your chances of admission. Our mission is to make the college admission process less stressful and more transparent for students and parents.
        </p>
        {/* <div className="px-4">
          <YoutubeChannelAd
            channelUrl="https://www.youtube.com/@MHTCETADDA143"
            videoUrl="https://www.youtube.com/embed/D6IGyc0Kf-o?si=d6dNd_biqZcUKNfR&amp;controls=0"
            title="Explore Colleges with Us!"
            description="Subscribe to our channel for tips, college comparisons, and real student experiences."
          />
        </div> */}

        
            
        
        <p className="text-lg mb-4 text-gray-700">
          By analyzing past years' cutoffs across multiple engineering colleges, courses, and categories, we match your CET score with colleges where you have the best shot. We support personalized filtering based on category (OBC, SC, ST, OPEN), gender, branch preferences (like Computer, Mechanical, Civil), and desired college locations. Our database is continually updated to reflect the latest changes in cutoff trends, making your predictions more accurate and timely.
        </p>
        <p className="text-lg text-gray-700">
          GMC also helps you visualize your options using clean summaries and exportable results. Thousands of students trust us every year during CAP rounds to plan ahead with clarity. Get started now, and take one step closer to your dream engineering college in Maharashtra!
        </p>
        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <Link
            href="/studentform"
            className="bg-[#0F766E] hover:bg-[#0e665f] text-white px-8 py-3 rounded-lg text-lg transition-all text-center"
          >
            Try GMC Now
          </Link>
          <AppInstallButton />
        </div>

      </section>
      {/* How to Use Section */}
      <HowToUse />
      {/* How It Works + FAQs */}
      <HowItWorksAndFAQ />
    </div>
  );
}

export function HowToUse() {
  const steps = [
    {
      icon: <GraduationCap className="w-6 h-6 text-primary" />,
      title: "Step 1: Enter Your CET Score",
      description: "Simply enter your MHT-CET Score to begin the college prediction process.",
    },
    {
      icon: <Search className="w-6 h-6 text-primary" />,
      title: "Step 2: Select Category & Other Details",
      description: "Choose your category (e.g., OBC, OPEN), Gender, Interested Branches and Location for more accurate results.",
    },
    {
      icon: <BarChart className="w-6 h-6 text-primary" />,
      title: "Step 3: View & Export Results",
      description: "Get a list of eligible colleges based on previous cutoffs. Export results as PDF or CSV.",
    },
    {
      icon: <Sparkle className="w-6 h-6 text-primary" />,
      title: "Step 4: Summarize Using AI",
      description: "Get a clean summary of top choices with one click using AI.",
    },
  ];

  return (
    <section className="py-16 bg-[#F0FDF9]">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-12">How to Use</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border border-gray-200 shadow-md rounded-xl transition-all hover:scale-[1.02] hover:shadow-xl"
            >
              <CardHeader className="flex items-center gap-3">
                {step.icon}
                <CardTitle className="text-lg">{step.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600">{step.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        <script type='text/javascript' src='//pl27070923.profitableratecpm.com/e2/38/a4/e238a4c4ba34dfeb572a088579232d26.js'></script>
      </div>
    </section>
  );
}

export function HowItWorksAndFAQ() {
  const howItWorks = [
    {
      title: "1. Enter Your MHT-CET Score",
      desc: "Provide your MHT-CET score to begin the recommendation process.",
    },
    {
      title: "2. Get Personalized Matches",
      desc: "Our AI analyzes your profile and matches it with top colleges.",
    },
    {
      title: "3. Explore & Apply",
      desc: "View detailed info about your matched colleges and take action.",
    },
  ];

  const faqs = [
    {
      question: "Is Guess My College free to use?",
      answer: "Yes! GMC is completely free for students to explore college recommendations.",
    },
    {
      question: "Which exams does it support?",
      answer: "Currently, GMC only supports MH-CET based recommendations for engineering colleges.",
    },
    {
      question: "How accurate are the recommendations?",
      answer: "We use AI and past admission data to provide highly relevant and personalized suggestions.",
    },
    {
      question: "Can I apply directly through GMC?",
      answer: "We provide links and guidance, but final application is done via the official CAP portal.",
    },
  ];

  return (
    <div className="bg-white px-6 md:px-16 py-20 space-y-24">
      {/* How It Works */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-10 text-center">
          {howItWorks.map((item, i) => (
            <Card
              key={i}
              className="bg-[#F0FDF9] p-6 rounded-xl shadow-md transition hover:scale-[1.02] hover:shadow-xl"
            >
              <CardContent className="text-xl font-semibold mb-2">{item.title}</CardContent>
              <p className="text-gray-700">{item.desc}</p>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section>
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="space-y-6 max-w-3xl mx-auto">
          {faqs.map((faq, i) => (
            <details
              key={i}
              className="bg-[#F0FDF9] p-4 rounded-lg shadow-sm transition-all hover:bg-[#e4f7f0] cursor-pointer"
            >
              <summary className="font-semibold text-lg">{faq.question}</summary>
              <p className="text-gray-700 mt-2">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
