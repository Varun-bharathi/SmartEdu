import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { 
  Bot, 
  Zap, 
  Clock, 
  Code, 
  CheckCircle2, 
  ArrowRight, 
  Globe 
} from 'lucide-react';

const Home = () => {
  return (
    <>
      {/* --- SEO Configuration --- */}
      <Helmet>
        <title>AI Tutor | 24/7 Instant Course Support</title>
        <meta name="description" content="Master your coursework with our AI-powered learning assistant. Get instant answers, debug code, and understand complex topics in seconds." />
        <meta name="keywords" content="AI tutor, e-learning support, coding help, react chatbot, automated teaching assistant" />
        {/* Open Graph for Social Sharing */}
        <meta property="og:title" content="AI Tutor - Your Personal Learning Assistant" />
        <meta property="og:description" content="Stop waiting for email replies. Get instant help with your course." />
        <script type="application/ld+json">
          {`
            {
              "@context": "https://schema.org",
              "@type": "WebSite",
              "name": "AI Course Tutor",
              "url": "https://your-domain.com",
              "potentialAction": {
                "@type": "SearchAction",
                "target": "https://your-domain.com/chat?q={search_term_string}",
                "query-input": "required name=search_term_string"
              }
            }
          `}
        </script>
      </Helmet>

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        
        {/* --- Navigation --- */}
        <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
            <div className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white">
                <Bot size={24} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">SmartEdu</span>
            </div>
            <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
                <Link to="/features" className="hover:text-indigo-600 transition-colors">Features</Link>
                <Link to="/how-it-works" className="hover:text-indigo-600 transition-colors">How it Works</Link>
                <Link to="/pricing" className="hover:text-indigo-600 transition-colors">Pricing</Link>
            </div>
            <Link 
              to="/chat" 
              className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-slate-800"
            >
              Start Learning
            </Link>
          </div>
        </nav>

        <main>
          {/* --- Hero Section --- */}
          <section className="relative overflow-hidden pt-16 md:pt-24">
            <div className="absolute top-0 -z-10 h-full w-full bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-200 via-slate-50 to-slate-50 opacity-40"></div>
            
            <div className="mx-auto max-w-7xl px-6 text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 mb-8">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                </span>
                Now powered by Gemini 2.5 Flash
              </div>
              
              <h1 className="mx-auto max-w-4xl text-5xl font-extrabold tracking-tight text-slate-900 sm:text-6xl md:text-7xl">
                Stop struggling with <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-violet-600">
                  generic tutorials.
                </span>
              </h1>
              
              <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-600 leading-relaxed">
                Get instant, context-aware answers specifically for your course material. 
                Debug code, explain concepts, and break through the "2 AM Block" without waiting for an instructor.
              </p>

              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link 
                  to="/chat" 
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-indigo-600 px-8 py-4 text-lg font-bold text-white transition-all hover:bg-indigo-700 hover:shadow-lg hover:shadow-indigo-200"
                >
                  Ask the AI Tutor
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </div>

              {/* Trusted By Strip */}
              {/* <div className="mt-20 border-t border-slate-200 pt-10">
                <p className="text-sm font-semibold uppercase tracking-wider text-slate-500">Trusted by students from</p>
                <div className="mt-6 flex flex-wrap justify-center gap-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
                   <div className="flex items-center gap-2 font-bold text-xl"><Globe className="h-6 w-6"/> TechUniversity</div>
                   <div className="flex items-center gap-2 font-bold text-xl"><Code className="h-6 w-6"/> CodeCamp</div>
                   <div className="flex items-center gap-2 font-bold text-xl"><Zap className="h-6 w-6"/> FastLearn</div>
                </div>
              </div> */}
            </div>
          </section>

          {/* --- Features Grid --- */}
          <section id="features" className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6">
              <div className="mx-auto max-w-2xl text-center">
                <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">Everything you need to master the code</h2>
                <p className="mt-4 text-lg text-slate-600">We stripped away the fluff. This is pure, targeted learning support.</p>
              </div>

              <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {/* Feature 1 */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                    <Clock size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">24/7 Availability</h3>
                  <p className="mt-2 text-slate-600">Never get stuck at 2 AM again. The AI is always awake and ready to explain concepts instantly.</p>
                </div>

                {/* Feature 2 */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-50 text-purple-600">
                    <Code size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">Contextual Debugging</h3>
                  <p className="mt-2 text-slate-600">Paste your error logs or code snippets. The AI understands your specific project structure.</p>
                </div>

                {/* Feature 3 */}
                <div className="relative rounded-2xl border border-slate-200 bg-white p-8 shadow-sm transition-shadow hover:shadow-md">
                  <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-teal-50 text-teal-600">
                    <Zap size={24} />
                  </div>
                  <h3 className="text-xl font-bold text-slate-900">ELI5 Explanations</h3>
                  <p className="mt-2 text-slate-600">Complex jargon? Ask the bot to "Explain Like I'm 5" to break down hard topics into simple terms.</p>
                </div>
              </div>
            </div>
          </section>

          {/* --- CTA Section --- */}
          <section className="bg-indigo-900 py-24">
            <div className="mx-auto max-w-7xl px-6 text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to accelerate your learning?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-lg text-indigo-200">
                Join thousands of students who are learning faster with AI support. No credit card required for the demo.
              </p>
              <div className="mt-10">
                <Link 
                  to="/chat" 
                  className="rounded-full bg-white px-8 py-3.5 text-base font-bold text-indigo-900 shadow-xl transition-all hover:bg-indigo-50 hover:scale-105"
                >
                  Start Chatting Now
                </Link>
              </div>
            </div>
          </section>

        </main>

        {/* --- Footer --- */}
        <footer className="bg-slate-50 py-12 border-t border-slate-200">
          <div className="mx-auto max-w-7xl px-6 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-sm text-slate-500">© 2025 SmartEdu Inc. All rights reserved.</p>
            <div className="flex gap-6 text-sm font-medium text-slate-500">
              <a href="#" className="hover:text-indigo-600">Privacy Policy</a>
              <a href="#" className="hover:text-indigo-600">Terms of Service</a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default Home;