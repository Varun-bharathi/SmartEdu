import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { createClient } from '@supabase/supabase-js';
import { GoogleGenAI } from "@google/genai";

// 1. Configuration
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// 2. Initialize Clients

// Supabase Connection
const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

// Gemini Connection (Using the new SDK as requested)
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

// System Instruction (The "Persona" of the bot)
const SYSTEM_PROMPT = `
You are an expert AI Tutor for an online course platform.
Your goal is to explain complex topics simply and encourage the student.
Strictly keep your answers relevant to the course context.
If a user asks about off-topic things (like movies or politics), politely decline.
Format your responses with clear paragraphs and bullet points for readability.
`;

// 3. API Routes

// Health Check (Useful for Render deployment)
app.get('/', (req, res) => {
  res.send('AI Tutor Backend is Running 🚀');
});

// Sitemap Route (SEO Optimization Requirement)
// Dynamic sitemap generation to help crawlers find your course content
app.get('/sitemap.xml', (req, res) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      <url>
        <loc>https://your-domain.com/</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>https://your-domain.com/chat</loc>
        <lastmod>${new Date().toISOString()}</lastmod>
        <priority>0.8</priority>
      </url>
    </urlset>`;
  res.header('Content-Type', 'application/xml');
  res.send(sitemap);
});

// Chat Endpoint
app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // A. Call Gemini API
    // We combine the system prompt with the user message for context
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash", // Using the specific model you requested
      contents: [
        { role: 'user', parts: [{ text: SYSTEM_PROMPT + "\n\nUser Question: " + message }] }
      ],
    });

    const aiResponseText = response.text; // Accessing text property directly based on your snippet

    // B. Save to Supabase (Async logging - doesn't block response)
    // Ensure you have a table named 'chat_logs' in Supabase
    const { error: dbError } = await supabase
      .from('chat_logs')
      .insert([
        { 
          user_message: message, 
          ai_response: aiResponseText,
          created_at: new Date() 
        }
      ]);

    if (dbError) {
      console.error("Supabase Logging Error:", dbError.message);
      // We don't stop the request here, just log the error
    }

    // C. Send Response
    res.json({ reply: aiResponseText });

  } catch (error) {
    console.error("Gemini API Error:", error);
    res.status(500).json({ error: "Failed to generate response. Please try again." });
  }
});

// 4. Start Server
app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});