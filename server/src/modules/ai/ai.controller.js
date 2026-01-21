import * as aiService from "./ai.service.js"
import { askAiSchema, saveAIConversationSchema } from "./ai.validator.js";
export const askAIHandler = async (req, res) => {
    try {
        const { error, value } = askAiSchema.validate(req.body);
        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message,
            });
        }
        const answer = await aiService.getAIResponse(value.prompt, value.model);
        res.status(200).json({
            success: true,
            data: {
                prompt: value.prompt,
                    answer,
                },
            });
        } catch(error) {
            res.status(500).json({
                success: false,
                message: error.message,
            });
        }
};



export const saveAIConversationHandler = async (req, res) => {
    try {

        const { error, value } = saveAIConversationSchema.validate(req.body);

        if (error) {
            return res.status(400).json({
                success: false,
                message: error.details[0].message
            })
        }

        const savedRecord = await aiService.saveAIConversation({
            prompt: value.prompt,
            answer: value.answer
        });

        res.status(201).json({
            success: true,
            data: savedRecord,
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: "Failed to save conversation",
        });
    }
};