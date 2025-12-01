import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Bot, Code, Zap, Globe, MessageSquare, Clock, ArrowLeft } from 'lucide-react';

const Features = () => {
  const featuresList = [
    {
      icon: <Clock className="text-blue-600" size={32} />,
      title: "24/7 Availability",
      description: "Learning doesn't stop at 5 PM. Get answers to your burning questions at 2 AM without waking up your instructor."
    },
    {
      icon: <Code className="text-purple-600" size={32} />,
      title: "Smart Code Debugging",
      description: "Paste your error stack trace. The AI analyzes your specific environment and suggests exact fixes, not generic advice."
    },
    {
      icon: <Zap className="text-yellow-500" size={32} />,
      title: "Instant Explanations",
      description: "Don't watch a 20-minute video for a 1-minute concept. Get the exact timestamp or summary you need immediately."
    },
    {
      icon: <Globe className="text-green-600" size={32} />,
      title: "Multi-Language Support",
      description: "Struggling with English? The AI can explain complex coding concepts in your native language."
    },
    {
      icon: <MessageSquare className="text-pink-600" size={32} />,
      title: "Context Retention",
      description: "The AI remembers your previous questions in the session, allowing for deep, conversational learning flows."
    },
    {
      icon: <Bot className="text-indigo-600" size={32} />,
      title: "Custom Personas",
      description: "Ask the AI to act like a 'Senior Engineer' or a 'Supportive Peer' depending on your learning style."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Features | AI Course Tutor</title>
        <meta name="description" content="Explore the powerful features of our AI Tutor: Code debugging, 24/7 support, and instant explanations." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
        {/* Nav */}
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

        <main className="py-20">
          <div className="mx-auto max-w-7xl px-6">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
                Built for <span className="text-indigo-600">Modern Learners</span>
              </h1>
              <p className="mt-4 text-xl text-slate-600">
                Traditional forums are too slow. Video tutorials are too long. Here is why our AI helps you win.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuresList.map((feature, idx) => (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow">
                  <div className="mb-6 p-3 bg-slate-50 rounded-xl w-fit">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-20 text-center">
              <Link to="/chat" className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all bg-indigo-600 rounded-full hover:bg-indigo-700 hover:shadow-lg">
                Try These Features Now
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Features;