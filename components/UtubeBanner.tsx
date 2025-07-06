"use client";

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Youtube } from "lucide-react";
import Link from "next/link";

interface YoutubeChannelAdProps {
  channelUrl: string;
  videoUrl?: string;
  title?: string;
  description?: string;
}

const YoutubeChannelAd: React.FC<YoutubeChannelAdProps> = ({
  channelUrl,
  videoUrl,
  title = "Best YouTube Channel for MHTCET Dobuts",
  description = "Watch college reviews, admission tips, placement guidance, and more on this official channel.",
}) => {
  return (
    <Card className="w-full max-w-4xl mx-auto my-8 shadow-xl border border-red-500">
      <CardHeader>
        <CardTitle className="text-red-600 flex items-center gap-2">
          <Youtube className="w-6 h-6" /> {title}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col md:flex-row gap-6 items-center">
        {videoUrl ? (
          <div className="w-full md:w-1/2 aspect-video">
            <iframe
              src={videoUrl}
              className="w-full h-full rounded-xl border"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="YouTube Video"
            />
          </div>
        ) : (
          <div className="w-full md:w-1/2 aspect-video bg-gray-100 flex items-center justify-center rounded-xl border text-gray-400">
            No video preview
          </div>
        )}

        <div className="w-full md:w-1/2 space-y-4">
          <p className="text-sm text-gray-700">{description}</p>
          <Link href={channelUrl} target="_blank" rel="noopener noreferrer">
            <Button className="bg-red-600 hover:bg-red-700 text-white">
              <Youtube className="w-5 h-5 mr-2" /> Subscribe Now
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
};

export default YoutubeChannelAd;
