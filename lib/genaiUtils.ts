// lib/genaiUtils.ts
import { getGeminiModel } from './genaiClient';

export async function generateCollegeSummary(collegeData: { collegeName: string; location?: string; branch: string; }) {
    const model = getGeminiModel('gemini-1.5-flash');

    const prompt = `
       You are an AI assistant helping students select the best colleges for their career goals.

Given the following college data, provide a concise and informative summary of the college, emphasizing key factors that students care about such as placement opportunities, infrastructure, fees, top recruiting companies, and overall reputation.

Here’s the information for the college:

College Name: ${collegeData.collegeName}

Location: ${collegeData.location || 'Not Available'}

Branch: ${collegeData.branch}

In your response, please focus on:

The placement record: How well do students fare in securing jobs?

The infrastructure: What facilities, resources, and campus amenities are available to students?

The fee structure: Is the college affordable? Provide a sense of the fees if available.

The top recruiting companies: Which companies are known to hire from this college?

The college’s reputation: Is it well-regarded in its field?

If the college is not widely known, gently mention that it might not offer top-tier placements compared to well-established institutions. Similarly, if the branch is less popular or not in high demand, advise that it may not attract top-tier recruiters or provide as many opportunities for students looking for competitive placements.

Generate a friendly and informative summary that will help prospective students make an informed choice about whether this college is the right fit for their career aspirations.
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
