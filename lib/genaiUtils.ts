// lib/genaiUtils.ts
import { getGeminiModel } from './genaiClient';

export async function generateCollegeSummary(collegeData: { collegeName: string; location?: string }) {
    const model = getGeminiModel('gemini-1.5-flash');

    const prompt = `
        You are an AI assistant helping students understand colleges.

        Given the following college data, generate a concise 3-4 sentence summary about this college.
        Focus on its strengths regarding placement, infrastructure, fees, top recurting companies, and overall reputation.

        College Name: ${collegeData.collegeName}
        Location: ${collegeData.location || 'N/A'}

        Generate a student-friendly summary:
    `;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const summary = response.text();

    return summary;
}


export async function generateCollegeOrdersByRank(colleges: any[]) {
    const model = getGeminiModel('gemini-1.5-flash');

    const prompt = `
    You are an AI assistant helping students find suitable colleges.

    Here is a list of colleges with their attributes:
    ${JSON.stringify(colleges, null, 2)}

    Please analyze the data and return a sorted list of colleges by their rank (assuming lower cutoff means higher rank).
    Format the output like this:

    1. College Name (Branch) - Location - Cutoff %
    2. College Name (Branch) - Location - Cutoff %
    ...

    Only include the sorted list in the output.
`;

    const result = await model.generateContent(prompt);
    const response = result.response;
    const summaries = response.text();

    return summaries;
}
