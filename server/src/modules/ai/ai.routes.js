import express from "express";
import { askAIHandler, saveAIConversationHandler } from "./ai.controller.js";

const router = express.Router();

router.post("/ask-ai", askAIHandler);
router.post("/save-conversation", saveAIConversationHandler)


export default router;
