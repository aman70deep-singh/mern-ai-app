import express from "express";
import cors from "cors";
import aiRoutes from "./modules/ai/ai.routes.js";


const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", aiRoutes);




export default app;