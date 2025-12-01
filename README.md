# SmartEdu

An AI-powered educational tutoring platform that combines React frontend with an Express backend powered by Google Gemini AI and Supabase database.

## Features

- 🤖 **AI Tutoring**: Interactive AI-powered chat system using Google Gemini 2.5 Flash
- 💬 **Chat Interface**: Real-time conversation with an expert AI tutor
- 📚 **Course Content**: Comprehensive learning materials and resources
- 💰 **Pricing Plans**: Flexible subscription options
- 🎯 **Interactive Features**: Explore how the platform works
- 🔐 **Secure Data**: Chat logs stored in Supabase database
- 📱 **Responsive Design**: Built with React and Tailwind CSS

## Project Structure

```
SmartEdu/
├── backend/              # Express.js server
│   ├── server.js        # Main server file with API routes
│   ├── package.json     # Backend dependencies
│   └── .env             # Environment variables
└── frontend/            # React + Vite application
    ├── src/
    │   ├── pages/       # Page components
    │   │   ├── Home.jsx
    │   │   ├── Chat.jsx
    │   │   ├── Features.jsx
    │   │   ├── HowItWorks.jsx
    │   │   └── Pricing.jsx
    │   ├── component/   # Reusable components
    │   │   └── Navbar.jsx
    │   ├── App.jsx      # Main app component with routing
    │   └── main.jsx     # React entry point
    ├── package.json     # Frontend dependencies
    └── vite.config.js   # Vite configuration
```

## Tech Stack

### Backend
- **Runtime**: Node.js
- **Framework**: Express.js 5.1.0
- **AI Model**: Google Gemini AI SDK
- **Database**: Supabase (PostgreSQL)
- **Utilities**: CORS, dotenv

### Frontend
- **Framework**: React 19.2.0
- **Build Tool**: Vite 7.2.4
- **Styling**: Tailwind CSS 3.4.18
- **Routing**: React Router DOM 7.9.6
- **Markdown**: React Markdown 10.1.0
- **Icons**: Lucide React 0.555.0
- **Meta Management**: React Helmet Async

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn
- Google Gemini API Key
- Supabase account and credentials

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Varun-bharathi/SmartEdu.git
   cd SmartEdu
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables** (backend/.env)
   ```
   PORT=3000
   SUPABASE_URL=your_supabase_url
   SUPABASE_ANON_KEY=your_supabase_key
   GEMINI_API_KEY=your_gemini_api_key
   ```

4. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

## Running the Application

### Development Mode

**Terminal 1 - Backend**
```bash
cd backend
npm run dev
```
The backend will run on `http://localhost:3000`

**Terminal 2 - Frontend**
```bash
cd frontend
npm run dev
```
The frontend will typically run on `http://localhost:5173`

### Production Build

**Frontend**
```bash
cd frontend
npm run build
npm run preview
```

## API Endpoints

### Health Check
- **GET** `/` - Server health check

### Chat Endpoint
- **POST** `/api/chat` - Send a message to the AI tutor
  - Body: `{ "message": "Your question here" }`
  - Response: `{ "reply": "AI response" }`

### SEO
- **GET** `/sitemap.xml` - XML sitemap for search engines

## Features Overview

### Home Page
Main landing page with platform overview and call-to-action

### Chat Page
Interactive chat interface to communicate with the AI tutor powered by Google Gemini

### Features Page
Detailed explanation of platform capabilities

### How It Works
Step-by-step guide on using the platform

### Pricing Page
Subscription plans and pricing information

## Database Schema

The application uses Supabase with a `chat_logs` table:
- `user_message`: User's question
- `ai_response`: AI tutor's response
- `created_at`: Timestamp of the conversation

## Available Scripts

### Backend
- `npm start` - Run the production server
- `npm run dev` - Run with watch mode for development

### Frontend
- `npm run dev` - Start Vite development server
- `npm run build` - Build for production
- `npm run lint` - Run ESLint
- `npm run preview` - Preview production build

## Environment Setup

Create a `.env` file in the backend directory with the following variables:
```
PORT=3000
SUPABASE_URL=<your-supabase-project-url>
SUPABASE_ANON_KEY=<your-supabase-anon-key>
GEMINI_API_KEY=<your-google-gemini-api-key>
```

## Deployment

The application can be deployed on:
- **Backend**: Render, Railway, Heroku, or any Node.js hosting
- **Frontend**: Vercel, Netlify, or any static hosting service

Update the domain in `/sitemap.xml` for your production deployment.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

ISC

## Author

Varun Bharathi

---

**Happy Learning with SmartEdu! 🚀📚**