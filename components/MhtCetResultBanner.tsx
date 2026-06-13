"use client";

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GraduationCap, ExternalLink, TrendingUp,} from "lucide-react";
import Link from "next/link";

const MhtCetResultBanner = () => {
  return (
    <Card className="w-full max-w-5xl mx-auto my-8 overflow-hidden border-2 border-blue-500 shadow-xl">
      <CardContent className="p-0">
        <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white p-8">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1 rounded-full text-sm font-medium">
                <TrendingUp className="w-4 h-4" />
                MHT-CET 2026
              </div>

              <h2 className="text-3xl md:text-4xl font-bold">
                MHT-CET Result 2026 Released
              </h2>

              <p className="text-blue-100 max-w-2xl text-lg">
                Check your percentile and instantly discover the best
                engineering colleges you can get through CAP rounds using
                Guess My College.
              </p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://portal-2026.maharashtracet.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    size="lg"
                    className="bg-white text-blue-700 hover:bg-blue-50"
                  >
                    <ExternalLink className="mr-2 h-5 w-5" />
                    Check Result
                  </Button>
                </a>

                <Link href="/studentform">
                  <Button
                    size="lg"
                    variant="outline"
                    className="border-white bg-blue-600 text-white hover:bg-white hover:text-blue-700"
                  >
                    <GraduationCap className="mr-2 h-5 w-5" />
                    Predict My Colleges
                  </Button>
                </Link>
              </div>
            </div>

            <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-6 min-w-[260px]">
              <GraduationCap className="w-16 h-16 mx-auto mb-3" />
              <h3 className="text-2xl font-bold">Search Colleges through GMC-AI</h3>
              <p className="text-blue-100 mt-2">
                Enter your percentile and get AI-powered college predictions.
              </p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MhtCetResultBanner;