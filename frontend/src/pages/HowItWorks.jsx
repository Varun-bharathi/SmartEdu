import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Bot, Database, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  return (
    <>
      <Helmet>
        <title>How It Works | AI Course Tutor</title>
        <meta name="description" content="See how our AI connects to your course material to provide instant, accurate answers." />
      </Helmet>

      <div className="min-h-screen bg-slate-50 font-sans text-slate-900">
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
          <div className="mx-auto max-w-4xl px-6">
            <h1 className="text-center text-4xl font-extrabold text-slate-900 mb-16">
              From Confusion to <span className="text-indigo-600">Clarity</span> in 3 Steps
            </h1>

            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
              
              {/* Step 1 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-indigo-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <MessageCircle size={20} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">1. You Ask a Question</h3>
                  <p className="text-slate-600">Type your query naturally. "Why isn't my React state updating?" or paste your code snippet directly into the chat.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-indigo-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <Database size={20} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">2. AI Processes Context</h3>
                  <p className="text-slate-600">The system retrieves specific knowledge about <em>your</em> course syllabus, ignoring generic internet noise to find the relevant answer.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-indigo-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                  <CheckCircle size={20} />
                </div>
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-2xl border border-slate-200 shadow-sm">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">3. Solution Delivered</h3>
                  <p className="text-slate-600">You receive a clean, formatted explanation with code examples. You can ask follow-up questions to clarify further.</p>
                </div>
              </div>
            </div>

            <div className="mt-20 text-center">
               <Link to="/chat" className="inline-flex items-center gap-2 text-indigo-600 font-bold hover:underline">
                 Experience it yourself <ArrowRight size={20}/>
               </Link>
            </div>

          </div>
        </main>
      </div>
    </>
  );
};

export default HowItWorks;