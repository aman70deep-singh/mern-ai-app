import Joi from "joi";

export const askAiSchema = Joi.object({
    prompt: Joi.string()
        .min(1)
        .required()
        .messages({
            "string.empty": "Prompt cannot be empty",
            "any.required": "Prompt is required",
        }),
});



export const saveAIConversationSchema = Joi.object({
    prompt: Joi.string().trim().min(1).required(),
    answer: Joi.string().trim().min(1).required()
});
