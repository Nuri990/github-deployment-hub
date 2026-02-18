
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getCareerAdvice(userMessage: string) {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: "Je bent een senior carrièrecoach bij Noordermatch, een toonaangevend recruitmentbureau in Noord-Nederland. Je spreekt Nederlands. Je helpt mensen met loopbaanadvies, cv-tips en matcht ze aan rollen (financieel, IT, techniek, HR). Wees professioneel, bemoedigend en to-the-point.",
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "Excuses, ik kan momenteel geen advies geven. Probeer het later opnieuw.";
  }
}
