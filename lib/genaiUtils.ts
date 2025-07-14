// lib/genaiCollegeSummary.ts
import { getGeminiModel } from './genaiClient';
import { searchCollegeInfo } from './searchCollegeInfo';

interface SearchResultItem {
    title: string;
    snippet: string;
    link: string;
}

export async function generateRealCollegeSummary(collegeName: string, branch: string) {

    const query = `${collegeName} ${branch} placements, fees, recruiters`;

    const searchResults: SearchResultItem[] = await searchCollegeInfo(query);

    const combinedText = searchResults.map((item: SearchResultItem) => `${item.title}\n${item.snippet}\n${item.link}`).join('\n\n');

    console.log('Combined Search Results:', combinedText);

    const model = getGeminiModel('gemini-1.5-flash');

    const prompt = `
        You are an AI assistant helping students decide on colleges.

Using the following search results, write a friendly, concise summary of "${collegeName}" for the ${branch} branch. Highlight:
- Placement record
- Infrastructure
- Fees (affordable or not)
- Recruiting companies
- Overall reputation

Also mention if the college is not well-known or may not attract top-tier recruiters.

Here are the search snippets:

${combinedText}
  `;

    const result = await model.generateContent(prompt);
    return result.response.text();
}
