import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Bot } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  // Helper to check active state for styling (optional polish)
  const isActive = (path) => location.pathname === path;

  return (
    <nav className="sticky top-0 z-50 border-b border-slate-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white transition-transform group-hover:scale-110">
            <Bot size={24} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">SmartEdu</span>
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <Link 
            to="/features" 
            className={`transition-colors hover:text-indigo-600 ${isActive('/features') ? 'text-indigo-600 font-bold' : ''}`}
          >
            Features
          </Link>
          <Link 
            to="/how-it-works" 
            className={`transition-colors hover:text-indigo-600 ${isActive('/how-it-works') ? 'text-indigo-600 font-bold' : ''}`}
          >
            How it Works
          </Link>
          <Link 
            to="/pricing" 
            className={`transition-colors hover:text-indigo-600 ${isActive('/pricing') ? 'text-indigo-600 font-bold' : ''}`}
          >
            Pricing
          </Link>
        </div>

        {/* CTA Button */}
        <Link 
          to="/chat" 
          className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition-transform hover:scale-105 hover:bg-slate-800 shadow-lg hover:shadow-xl"
        >
          Start Learning
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;