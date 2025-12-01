import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import { 
  Send, 
  Bot, 
  User, 
  Loader2, 
  ArrowLeft, 
  MoreVertical, 
  Trash2 
} from 'lucide-react';

const Chat = () => {
  // State Management
  const [messages, setMessages] = useState([
    { 
      id: 1, 
      sender: 'ai', 
      text: "Hello! I'm your specific AI Tutor. I can help with React, Vite, Node, or Deployment. What's stuck?" 
    }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  // Auto-scroll ref
  const messagesEndRef = useRef(null);

  // Scroll to bottom whenever messages change
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Handle Message Sending
  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMessage = { id: Date.now(), sender: 'user', text: input };
    
    // 1. Update UI immediately
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      // 2. Call API
      const response = await fetch('http://localhost:3000/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage.text }),
      });

      if (!response.ok) throw new Error('Network response was not ok');

      const data = await response.json();

      // 3. Add AI Response
      const aiMessage = { 
        id: Date.now() + 1, 
        sender: 'ai', 
        text: data.reply 
      };
      setMessages(prev => [...prev, aiMessage]);

    } catch (error) {
      console.error("Error:", error);
      const errorMessage = { 
        id: Date.now() + 1, 
        sender: 'ai', 
        text: "I'm having trouble connecting to the server. Please make sure the backend is running on port 3000." 
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen flex-col bg-slate-50">
      
      {/* --- Header --- */}
      <header className="flex items-center justify-between border-b border-slate-200 bg-white px-6 py-4 shadow-sm">
        <div className="flex items-center gap-4">
          <Link to="/" className="rounded-full p-2 text-slate-500 hover:bg-slate-100 hover:text-slate-900">
            <ArrowLeft size={20} />
          </Link>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-100 text-indigo-600">
              <Bot size={24} />
            </div>
            <div>
              <h1 className="text-lg font-bold text-slate-900">AI Tutor</h1>
              <p className="text-xs text-slate-500 flex items-center gap-1">
                <span className="block h-2 w-2 rounded-full bg-green-500"></span>
                Online
              </p>
            </div>
          </div>
        </div>
        <button 
          onClick={() => setMessages([])} 
          className="rounded-full p-2 text-slate-400 hover:bg-red-50 hover:text-red-500" 
          title="Clear Chat"
        >
          <Trash2 size={20} />
        </button>
      </header>

      {/* --- Chat Area --- */}
      <main className="flex-1 overflow-y-auto p-4 sm:p-6">
        <div className="mx-auto max-w-3xl space-y-6">
          {messages.map((msg) => (
            <div 
                key={msg.id} 
                className={`flex items-start gap-3 ${msg.sender === 'user' ? 'flex-row-reverse' : ''}`}
            >
                {/* Avatar */}
                <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                msg.sender === 'user' ? 'bg-indigo-600 text-white' : 'bg-slate-200 text-slate-600'
                }`}>
                {msg.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
                </div>

                {/* Message Bubble */}
                {/* ADDED: 'text-left' class here to force alignment */}
                <div className={`relative max-w-[85%] rounded-2xl px-5 py-3 text-sm leading-relaxed shadow-sm text-left ${
                msg.sender === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-white text-slate-800 border border-slate-100 rounded-tl-none'
                }`}>
                {msg.sender === 'ai' ? (
                    // ADDED: 'text-left' and 'break-words' to ensure long text doesn't break layout
                    <div className="prose prose-sm max-w-none dark:prose-invert text-left break-words">
                    <ReactMarkdown>{msg.text}</ReactMarkdown>
                    </div>
                ) : (
                    <p className="whitespace-pre-wrap text-left">{msg.text}</p>
                )}
                </div>
            </div>
            ))}

          {/* Loading Indicator */}
          {isLoading && (
            <div className="flex items-start gap-3">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-slate-200 text-slate-600">
                <Bot size={16} />
              </div>
              <div className="rounded-2xl rounded-tl-none bg-white border border-slate-100 px-5 py-4 shadow-sm">
                <div className="flex gap-1">
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.3s]"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:-0.15s]"></span>
                  <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400"></span>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* --- Input Area --- */}
      <footer className="bg-white px-4 py-4 border-t border-slate-200">
        <div className="mx-auto max-w-3xl">
          <form onSubmit={handleSend} className="relative flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask a question about your course..."
              disabled={isLoading}
              className="w-full rounded-full border border-slate-300 bg-slate-50 py-3 pl-5 pr-12 text-sm text-slate-900 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500 disabled:opacity-50"
            />
            <button
              type="submit"
              disabled={!input.trim() || isLoading}
              className="absolute right-2 rounded-full bg-indigo-600 p-2 text-white transition-colors hover:bg-indigo-700 disabled:bg-slate-300"
            >
              {isLoading ? <Loader2 size={18} className="animate-spin" /> : <Send size={18} />}
            </button>
          </form>
          <p className="mt-2 text-center text-xs text-slate-400">
            AI can make mistakes. Always check course documentation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Chat;