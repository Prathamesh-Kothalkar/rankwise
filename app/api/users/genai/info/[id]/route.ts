// app/api/users/genai/info/[id]/route.ts
import { PrismaClient } from '@/lib/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { generateCollegeSummary } from '@/lib/genaiUtils';

const prisma = new PrismaClient();

export async function POST(request: NextRequest, { params }: { params: { id: number } }) {
    const collegeId = await params.id;

    const college = await prisma.collegeCutoff.findUnique({
        where: { id: Number(collegeId) },
        select: {
            collegeName: true,
            location: true,
        },
    });

    // console.log('Received college ID:', collegeId);
    // console.log('College Data:', college);

    if (!college) {
        return NextResponse.json({ error: 'College not found' }, { status: 404 });
    }

    try {
        const summary = await generateCollegeSummary({
            collegeName: college.collegeName,
            location: college.location || 'NA',
        });

        // console.log('Generated Summary:', summary);

        return NextResponse.json({
            collegeId,
            collegeName: college.collegeName,
            summary,
        });
    } catch (err) {
        console.error('Error generating summary:', err);
        return NextResponse.json({ error: 'Failed to generate summary' }, { status: 500 });
    }
}
