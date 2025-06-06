import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest, { params }: { params: { id: number } }) {
    const collegeId = await params.id;
  
    return NextResponse.json({
        message: `Received college ID: ${collegeId}`,
        collegeId,
    });
}