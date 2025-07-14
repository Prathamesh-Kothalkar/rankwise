"use client";

import React from "react";
import { FileText } from "lucide-react";

export default function PersonalizedPdf() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-br from-purple-600 to-indigo-800 px-6 py-8 shadow-2xl rounded-3xl sm:px-8 sm:py-10 text-white transform transition-all duration-300 hover:scale-[1.02] hover:shadow-purple-500/50">
      <div
        className="absolute left-1/2 top-1/2 -z-10 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 opacity-20 blur-3xl"
        aria-hidden="true"
      />
      <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="flex-1 text-center sm:text-left">
          <p className="text-sm sm:text-base font-semibold text-purple-200 mb-1">Exclusive Offer!</p>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
            <span className="block">Get Your Customized College List</span>
            <span className="block mt-1 sm:inline-block">@ just <span className="text-yellow-300">₹99</span>!</span>
          </h2>
        </div>
        <div className="flex-shrink-0">
          <a
            href="/personalizedpdf.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-semibold rounded-full shadow-lg text-indigo-900 bg-yellow-300 hover:bg-yellow-200 hover:scale-105 transform transition-all duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-offset-2 focus:ring-offset-purple-700"
          >
            <FileText className="w-5 h-5 mr-3" />
                Get Sample
          </a>
        </div>
      </div>
    </div>
  );
}