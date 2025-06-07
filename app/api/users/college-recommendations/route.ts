import { NextResponse } from "next/server"
import { PrismaClient } from "@/lib/generated/prisma"

const prisma = new PrismaClient()

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { percentile, gender, category, branches, location } = body
    const validPercentile = !isNaN(percentile) && percentile >= 0 && percentile <= 100;
    const floatPercentile = parseFloat(percentile);
   

    const filters: any = {
      cutoff: { lte: floatPercentile },
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


export async function GET(){
  try{
    //ALL BRANCHES
    const branches = await prisma.collegeCutoff.findMany({
      distinct: ['branch'],
      select: { branch: true },
      orderBy: { branch: 'asc' }
    })
    //ALL LOCATIONS
    const locations = await prisma.collegeCutoff.findMany({
      distinct: ['location'],
      select: { location: true },
      orderBy: { location: 'asc' }
    })
    //ALL CATEGORIES
    const categories = await prisma.collegeCutoff.findMany({
      distinct: ['category'],
      select: { category: true },
      orderBy: { category: 'asc' }
    })
    return NextResponse.json({ branches, locations, categories })
  }
  catch(error){
    console.error("Error fetching college recommendations:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}