import { prisma } from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone } = await req.json();

    await prisma.userInfo.create({
      data: {
        name,
        email,
        phone,
      },
    });

    return NextResponse.json({ message: "User info saved successfully" }, { status: 201 });
  } catch (error) {
    console.error("Error saving user info:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
