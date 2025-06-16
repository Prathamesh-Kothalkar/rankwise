// app/api/users/genai/info/[id]/route.ts

import { PrismaClient } from '@/lib/generated/prisma';
import { NextRequest, NextResponse } from 'next/server';
import { generateRealCollegeSummary } from '@/lib/genaiUtils';
import { redis } from '@/lib/redis'; 
const prisma = new PrismaClient();

export async function POST(request: NextRequest, { params }: { params: { id: number } }) {
    const collegeId = Number(params.id);

    if (isNaN(collegeId)) {
        return NextResponse.json({ error: 'Invalid college ID' }, { status: 400 });
    }

    const cacheKey = `college:summary:${collegeId}`;
    
   
    const cachedSummary = await redis.get<string>(cacheKey);
    if (cachedSummary) {
        return NextResponse.json({
            collegeId,
            cached: true,
            summary: cachedSummary,
        });
    }

    const college = await prisma.collegeCutoff.findUnique({
        where: { id: collegeId },
        select: {
            collegeName: true,
            location: true,
            branch: true,
        },
    });

    if (!college) {
        return NextResponse.json({ error: 'College not found' }, { status: 404 });
    }

    try {
        const summary = await generateRealCollegeSummary(
            college.collegeName,
            college.branch || 'NA'
        );

       
        await redis.set(cacheKey, summary, { ex: 60 * 60 * 12 });

        return NextResponse.json({
            collegeId,
            collegeName: college.collegeName,
            summary,
            cached: false,
        });
    } catch (err) {
        console.error('Error generating summary:', err);
        return NextResponse.json({ error: 'Failed to generate summary' }, { status: 500 });
    }
}
