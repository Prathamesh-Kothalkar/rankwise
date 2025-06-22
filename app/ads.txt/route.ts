// app/ads.txt/route.ts
import { NextResponse } from "next/server";

export async function GET() {
  const res = await fetch("https://srv.adstxtmanager.com/19390/guessmycollege.in");
  const txt = await res.text();
  return new NextResponse(txt, {
    headers: {
      "Content-Type": "text/plain",
    },
  });
}
