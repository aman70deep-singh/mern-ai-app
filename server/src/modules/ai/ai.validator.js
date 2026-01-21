import Joi from "joi";
import { AI_MODELS } from "./ai.constants.js";

export const askAiSchema = Joi.object({
    prompt: Joi.string()
        .min(1)
        .required()
        .messages({
            "string.empty": "Prompt cannot be empty",
            "any.required": "Prompt is required",
        }),
    model: Joi.string()
        .valid(...Object.values(AI_MODELS))
        .default(AI_MODELS.MISTRAL)
        .optional(),
});



export const saveAIConversationSchema = Joi.object({
    prompt: Joi.string().trim().min(1).required(),
    answer: Joi.string().trim().min(1).required()
});
