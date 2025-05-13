import { NextResponse } from "next/server"
import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { percentile, gender, category, branches, location } = body

    console.log("Received data:", {
      percentile,
      gender,
      category,
      branches,
      location,
    });

    const filters: any = {
      cutoff: { lte: percentile },
      gender,
      category,
    }

    if (branches && branches.length > 0) {
      filters.branch = { in: branches }
    }

    if (location && location !== "Any") {
      filters.location = location
    }

    const colleges = await prisma.collegeCutoff.findMany({
      where: filters,
      orderBy: { cutoff: "desc" },
    })

    return NextResponse.json({ results: colleges })
  } catch (error) {
    console.error("Error fetching college recommendations:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
