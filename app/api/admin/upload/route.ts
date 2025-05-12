import { PrismaClient } from "@/lib/generated/prisma";
import { NextResponse } from "next/server";
import * as XLSX from "xlsx";

const prisma = new PrismaClient();

export const config = {
  api: {
    bodyParser: false,
  },
};

export async function POST(req: Request) {
  const contentType = req.headers.get("content-type") || "";

  if (!contentType.includes("multipart/form-data")) {
    return NextResponse.json({ error: "Invalid content-type" }, { status: 400 });
  }

  const formData = await req.formData();
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ error: "No file uploaded" }, { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const ext = file.name.split(".").pop()?.toLowerCase();

  if (!["xlsx", "xls", "csv"].includes(ext || "")) {
    return NextResponse.json({ error: "Invalid file format" }, { status: 400 });
  }

  try {
    const workbook = XLSX.read(buffer, { type: "buffer" });
    const sheetName = workbook.SheetNames[0];
    const rawData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);

    // Normalize keys by trimming spaces
    const normalizeKeys = (row: any) => {
      const normalized: any = {};
      for (const key in row) {
        normalized[key.trim()] = row[key];
      }
      return normalized;
    };

    const jsonData = rawData.map(normalizeKeys);

    console.log("Parsed Data:", jsonData);

    // Insert into DB
    const insertedRecords = await prisma.$transaction(
      jsonData.map((row: any) =>
        prisma.collegeCutoff.create({
          data: {
            collegeCode: Number(row["College Code"]),
            collegeName: row["'College Name'"],
            status: row["Status"] || null,
            location: row["Location"] || null,
            branch: row["Branch"] || "Unknown",
            category: row["Category"] || "General",
            gender: row["Gender"] || "Co-ed",
            cutoff: parseFloat(row["Cutoff"]) || 0,
          },
        })
      )
    );

    return NextResponse.json({
      message: "File uploaded and data stored successfully",
      count: insertedRecords.length,
    });
  } catch (error) {
    console.error("XLSX processing or DB error:", error);
    return NextResponse.json({ error: "Failed to process or store data" }, { status: 500 });
  }
}
