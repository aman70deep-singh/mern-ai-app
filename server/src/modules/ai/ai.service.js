import axios from "axios";
import AIConversation from "../../models/ai.model.js";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = "google/gemini-2.0-flash-lite-001";
export const getAIResponse = async (prompt) => {
    try {
        const response = await axios.post(
            OPENROUTER_URL,
            {
                model: MODEL,
                messages: [
                    {
                        role: "user",
                        content: prompt,
                    },
                ],
            },
            {
                headers: {
                    Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
                    "Content-Type": "application/json",
                },
            }
        );
        let text = response.data.choices[0].message.content;

        text = text.replace(/\*/g, "");

        return text;

    } catch (error) {
        console.error("OpenRouter Error:", error.response?.data || error.message);
        throw new Error("AI generation failed");
    }
};

export const saveAIConversation = async ({ prompt, answer }) => {
    try {
        const record = await AIConversation.create({
            prompt,
            answer,
        });

        return record;
    } catch (error) {
        console.log("Database Save Error:", error);
    }
};
