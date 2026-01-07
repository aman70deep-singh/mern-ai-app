import mongoose from "mongoose";

const aiConversationSchema = new mongoose.Schema(
    {
        prompt: {
            type: String,
            required: true,
            trim: true,
        },
        answer: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
        collection: "ai_conversations",
    }
);

const AIConversationModel = mongoose.model(
    "AIConversation",
    aiConversationSchema
);

export default AIConversationModel;
