import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Check } from 'lucide-react';
import { Bot, Database, ArrowRight, MessageCircle, CheckCircle } from 'lucide-react';

const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Pricing | AI Course Tutor</title>
        <meta name="description" content="Flexible pricing plans for every student. Start for free today." />
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

        <main className="py-20 px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h1 className="text-4xl font-extrabold text-slate-900">Simple, Transparent Pricing</h1>
            <p className="mt-4 text-xl text-slate-600">Invest in your education for less than the price of a coffee.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Free Tier */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm flex flex-col">
              <div className="mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-slate-500">Starter</span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-slate-900">$0</span>
                  <span className="text-slate-500">/month</span>
                </div>
                <p className="mt-4 text-slate-600">Perfect for trying out the AI assistant.</p>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {['50 Questions per day', 'Basic React Support', 'Standard Response Speed', 'Community Support'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700">
                    <Check className="text-green-500 shrink-0" size={20} /> {item}
                  </li>
                ))}
              </ul>
              <Link to="/chat" className="w-full block text-center py-3 px-6 rounded-xl border border-indigo-600 text-indigo-600 font-bold hover:bg-indigo-50 transition-colors">
                Get Started Free
              </Link>
            </div>

            {/* Pro Tier */}
            <div className="bg-indigo-900 rounded-3xl p-8 border border-indigo-800 shadow-xl flex flex-col relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-yellow-400 text-indigo-900 text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
              <div className="mb-4">
                <span className="text-sm font-bold uppercase tracking-wider text-indigo-300">Pro Student</span>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-4xl font-extrabold text-white">$9.99</span>
                  <span className="text-indigo-200">/month</span>
                </div>
                <p className="mt-4 text-indigo-100">For students who want to master the stack fast.</p>
              </div>
              <ul className="mb-8 space-y-4 flex-1">
                {['Unlimited Questions', 'Advanced Debugging Mode', 'Instant Response Speed', 'Priority Support', 'Access to GPT-4 (Optional)'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-white">
                    <div className="bg-indigo-700 rounded-full p-0.5"><Check className="text-white shrink-0" size={14} /></div> {item}
                  </li>
                ))}
              </ul>
              <Link to="/chat" className="w-full block text-center py-3 px-6 rounded-xl bg-white text-indigo-900 font-bold hover:bg-indigo-50 transition-colors">
                Upgrade Now
              </Link>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Pricing;