import { GoogleGenAI } from "@google/genai";
import { LISTING_AMBERLY } from '../constants';

// We do not assume the key is present. If it's missing, the UI will handle it gracefully.
const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

export const sendMessageToGemini = async (history: { role: string; text: string }[], message: string): Promise<string> => {
  if (!ai) {
    // Graceful fallback if no API key is configured
    return "I'm currently in demo mode. Please configure the Gemini API key to chat with the real estate assistant.";
  }

  try {
    const model = "gemini-2.5-flash";
    
    // Construct the context based on the listing
    const listingContext = `
      You are a helpful real estate assistant for Author Group.
      You are currently answering questions about the property at ${LISTING_AMBERLY.address}.
      
      Property Details:
      - Price: $${LISTING_AMBERLY.price.toLocaleString()}
      - Bedrooms: ${LISTING_AMBERLY.bedrooms}
      - Bathrooms: ${LISTING_AMBERLY.bathrooms}
      - Square Footage: ${LISTING_AMBERLY.sqft}
      - Garage: ${LISTING_AMBERLY.garage} cars
      - Description: ${LISTING_AMBERLY.description}
      - Agent: ${LISTING_AMBERLY.agent.name} from ${LISTING_AMBERLY.agent.brokerage}.
      
      Goal: Encourage the user to schedule a tour or make an offer. Be professional, concise, and enthusiastic.
    `;

    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: listingContext,
      },
      history: history.map(h => ({
        role: h.role,
        parts: [{ text: h.text }]
      }))
    });

    const result = await chat.sendMessage({ message });
    return result.text || "I'm sorry, I couldn't generate a response.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to the server right now. Please try again later.";
  }
};