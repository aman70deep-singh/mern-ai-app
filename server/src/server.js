import dotenv from 'dotenv';
import app from './app.js';
import connectDB from './config/db.js'
import { getAIResponse } from './modules/ai/ai.service.js';

dotenv.config();
const startServer = async () => {

    const PORT = process.env.PORT || 5000;
    await connectDB();
    app.listen(PORT, () => {
        console.log(`server is running on port ${PORT}`);  
    })
}

startServer();