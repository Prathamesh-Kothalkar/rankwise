import axios from "axios";

interface SearchResultItem {
    title: string;
    link: string;
    snippet: string;
    [key: string]: any;
  }

export async function searchCollegeInfo(query: string) {
  const apiKey = process.env.GOOGLE_API_KEY!;
  const cx = process.env.GOOGLE_SEARCH_ENGINE_ID!;

  const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
    params: {
      key: apiKey,
      cx,
      q: query,
    },
  });

  return response.data.items?.map((item: SearchResultItem) => ({
    title: item.title,
    link: item.link,
    snippet: item.snippet,
  })) || [];
}