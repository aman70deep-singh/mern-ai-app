import express from "express";
import { askAIHandler, saveAIConversationHandler } from "./ai.controller.js";

const router = express.Router();

router.post("/ask-ai", askAIHandler);
router.post("/save-conversation", saveAIConversationHandler)

app.get("/health", (req, res) => {
  res.json({ status: "OK", message: "Server is running 🚀" });
});
export default router;
