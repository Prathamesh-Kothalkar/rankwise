// lib/genaiClient.ts
import { GoogleGenerativeAI } from '@google/generative-ai';

const geminiApiKey = process.env.GEMINI_API_KEY;
if (!geminiApiKey) {
    throw new Error('GEMINI_API_KEY environment variable is not set');
}

console.log('[GenAI] Using Gemini API Key');

const genAI = new GoogleGenerativeAI(geminiApiKey);

export const getGeminiModel = (modelName: string = 'gemini-1.5-flash') => {
    return genAI.getGenerativeModel({ model: modelName });
};
