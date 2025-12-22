import React, { useState, useRef, useEffect } from 'react';
import { MessageCircleIcon, XIcon, SendIcon, SparklesIcon } from './Icons';
import { sendMessageToGemini } from '../services/geminiService';
import { ChatMessage } from '../types';

const AIChatWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Hi! I can answer questions about 1563 Amberly SE. Ask me about the schools, basement, or price!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const toggleChat = () => setIsOpen(!isOpen);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput('');
    setLoading(true);

    // Optimistic update
    const newHistory: ChatMessage[] = [...messages, { role: 'user', text: userMsg }];
    setMessages(newHistory);

    try {
      // Filter history for API consumption (only valid roles)
      const apiHistory = newHistory.map(m => ({ role: m.role, text: m.text }));
      const responseText = await sendMessageToGemini(apiHistory, userMsg);
      
      setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'model', text: "Sorry, something went wrong.", isError: true }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="mb-4 w-[90vw] max-w-[350px] bg-brand-card border border-brand-border rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[500px] animate-in slide-in-from-bottom-5 fade-in duration-200">
          {/* Header */}
          <div className="bg-brand-accent p-4 flex justify-between items-center text-brand-bg">
            <div className="flex items-center gap-2">
              <SparklesIcon />
              <h3 className="font-bold">Author Assistant</h3>
            </div>
            <button onClick={toggleChat} className="hover:opacity-70 transition-opacity">
              <XIcon />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-brand-card">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[85%] p-3 rounded-2xl text-sm leading-relaxed ${
                    msg.role === 'user' 
                      ? 'bg-brand-accent text-brand-bg rounded-br-none' 
                      : 'bg-[#333] text-gray-100 rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-[#333] p-3 rounded-2xl rounded-bl-none flex gap-1 items-center">
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100"></span>
                  <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200"></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSend} className="p-3 bg-[#18181a] border-t border-brand-border flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about the property..."
              className="flex-1 bg-[#2a2a2e] text-white rounded-full px-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-brand-accent transition-all"
            />
            <button 
              type="submit" 
              disabled={loading || !input.trim()}
              className="p-2 bg-brand-accent text-brand-bg rounded-full hover:bg-brand-accentHover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
            >
              <SendIcon />
            </button>
          </form>
        </div>
      )}

      <button
        onClick={toggleChat}
        className="h-14 w-14 rounded-full bg-brand-accent text-brand-bg shadow-lg flex items-center justify-center hover:bg-brand-accentHover hover:scale-105 transition-all duration-200 focus:outline-none focus:ring-4 focus:ring-brand-accent/30"
        aria-label="Toggle Chat"
      >
        {isOpen ? <XIcon /> : <MessageCircleIcon />}
      </button>
    </div>
  );
};

export default AIChatWidget;