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
  console.log('Performing Google Search with query:', query);
  console.log('Using API Key:', apiKey);
  console.log('Using Search Engine ID:', cx);

  try {
    const response = await axios.get('https://www.googleapis.com/customsearch/v1', {
      params: {
        key: apiKey,
        cx,
        q: query,
      },
    });

    console.log('Google Search Response:', response);

    return response.data.items?.map((item: SearchResultItem) => ({
      title: item.title,
      link: item.link,
      snippet: item.snippet,
    })) || [];
  } catch (error) {
    console.error('Error performing Google Search:', error);
    return [];
  }

}