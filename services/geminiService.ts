import { GoogleGenAI, Type } from "@google/genai";
import { NewsArticle } from "../types";

const apiKey = process.env.API_KEY;

// Safe initialization
let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const generateGroguetNews = async (): Promise<NewsArticle[]> => {
  if (!ai) {
    console.warn("API Key not found, returning mock data.");
    return [];
  }

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: "Genera 3 noticias breves y realistas sobre el Villarreal CF. Una sobre el primer equipo, una sobre estadísticas curiosas y otra sobre la cantera o leyendas. Usa un tono periodístico deportivo animado.",
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.ARRAY,
          items: {
            type: Type.OBJECT,
            properties: {
              title: { type: Type.STRING },
              summary: { type: Type.STRING },
              category: { type: Type.STRING, enum: ["first-team", "academy", "legends", "stats"] },
            },
            required: ["title", "summary", "category"],
          },
        },
      },
    });

    if (response.text) {
        const data = JSON.parse(response.text);
        // Map to our internal structure with IDs and dates
        return data.map((item: any, index: number) => ({
            id: `gen-${Date.now()}-${index}`,
            title: item.title,
            summary: item.summary,
            category: item.category,
            date: 'Actualizado con IA ahora mismo'
        }));
    }
    return [];

  } catch (error) {
    console.error("Error generating news:", error);
    return [];
  }
};
