import { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2, User, Bot, Trash2, ArrowLeft, ArrowRight, BookOpen, Zap, Users, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { GoogleGenAI } from "@google/genai";
import Markdown from 'react-markdown';

const SYSTEM_INSTRUCTION = `
You are the official AI assistant for Hillside University of Science and Technology (HUST), located in Okemesi-Ekiti, Nigeria. 
Your goal is to provide accurate, helpful, and friendly information to students, parents, and visitors.

Key Information about HUST:
- Motto: Learning and Living
- Location: Okemesi-Ekiti, Ekiti State, Nigeria.
- Colleges: 
  1. Tristate College of Medicine & Health Sciences(TCMHS) (MBBS, Nursing, MLS, etc.)
  2. College of Engineering & Computing Sciences (CECS) (Computer Science, Cyber Security, Software Engineering, Civil, Aerospace, etc.)
  3. College of Agriculture, Life & Environmental Sciences (CALES) (Agribusiness, Forensic Science, Microbiology, etc.)
  4. College of Business, Law & Educational Sciences (CBLES) (Accounting, Economics, Mass Comm, etc.)
- Contact: Phone: (+234) 8137388316, Email: info@hust.edu.ng.
- Admissions: admission@hust.edu.ng, Phone: (+234) 9119429029.
- Founder: Mr. Laoye Jaiyeola.
- Vice Chancellor: Prof Iheayinchukwu Okoro.

Admission Requirements:
- General Requirements: English Language and Mathematics are mandatory for all programs.
- Specific Subject Combinations: Some programs have specific requirements.
- Tristate College of Medicine & Health Sciences(TCMHS): Requires credits in Biology, Chemistry, and Physics. 
- MBBS Program: Specifically requires all results to be obtained in **one sitting**.

Guidelines:
- Be professional yet welcoming.
- If you don't know the answer, refer the user to the contact information or the official website (hust.edu.ng).
- Use Markdown for formatting:
  - Use **bold** for emphasis.
  - Use ### for section headers.
  - Use * for bullet points.
  - Use --- for horizontal rules to separate sections.
- Keep responses concise and easy to read.
- Use the university's full name or "HUST" appropriately.
`;

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [view, setView] = useState<'home' | 'chat'>('home');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot', text: string, timestamp: string }[]>([
    { role: 'bot', text: "Hello! I'm the HUST Assistant. How can I help you today?", timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    if (view === 'chat') {
      scrollToBottom();
    }
  }, [messages, view]);

  const handleSend = async (customMessage?: string) => {
    const messageToSend = customMessage || input.trim();
    if (!messageToSend || isLoading) return;

    if (view === 'home') setView('chat');
    if (!customMessage) setInput('');
    
    const timestamp = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setMessages(prev => [...prev, { role: 'user', text: messageToSend, timestamp }]);
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: [
          ...messages.map(m => ({ role: m.role === 'user' ? 'user' : 'model', parts: [{ text: m.text }] })), 
          { role: 'user', parts: [{ text: messageToSend }] }
        ],
        config: {
          systemInstruction: SYSTEM_INSTRUCTION,
          temperature: 0.7,
        },
      });

      const botResponse = response.text || "I'm sorry, I couldn't process that request. Please try again or contact us at info@hust.edu.ng.";
      setMessages(prev => [...prev, { role: 'bot', text: botResponse, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { role: 'bot', text: "I'm having trouble connecting right now. Please try again later.", timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleClearChat = () => {
    setMessages([{ role: 'bot', text: "Hello! I'm the HUST Assistant. How can I help you today?", timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setView('home');
  };

  const categories = [
    { icon: <BookOpen className="h-5 w-5" />, label: "Admissions", query: "Tell me about admissions at HUST" },
    { icon: <Zap className="h-5 w-5" />, label: "Academic", query: "What academic programs are available?" },
    { icon: <Users className="h-5 w-5" />, label: "Campus Life", query: "What is campus life like at HUST?" },
    { icon: <Globe className="h-5 w-5" />, label: "Contact", query: "How can I contact HUST?" },
  ];

  const popularQuestions = [
    "Admission Requirements",
    "Tuition Fees",
    "Scholarships",
    "Hostel Facilities",
  ];

  return (
    <div className={`fixed z-[1000] font-sans transition-all duration-300 ${
      isOpen 
        ? 'inset-0 md:inset-auto md:bottom-6 md:right-6 md:w-auto' 
        : 'bottom-6 right-6'
    }`}>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="w-full h-full md:h-[600px] md:w-[400px] md:mb-4 bg-white md:rounded-3xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-hust-blue p-6 text-white relative">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center space-x-3">
                  {view === 'chat' && (
                    <button 
                      onClick={() => setView('home')}
                      className="p-1.5 hover:bg-white/10 rounded-lg transition-colors"
                    >
                      <ArrowLeft className="h-5 w-5" />
                    </button>
                  )}
                  <div className="w-10 h-10 bg-white/20 rounded-2xl flex items-center justify-center">
                    <Bot className="h-6 w-6 text-hust-gold" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">HUST AI</h3>
                    <div className="flex items-center space-x-1.5">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <p className="text-[10px] text-blue-200 uppercase tracking-wider font-bold">Online</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center space-x-1">
                  <button 
                    onClick={handleClearChat}
                    title="Clear Chat"
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <Trash2 className="h-5 w-5" />
                  </button>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="p-2 hover:bg-white/10 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-grow overflow-hidden bg-gray-50 flex flex-col">
              {view === 'home' ? (
                <div className="flex-grow overflow-y-auto p-8 space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-2xl font-display font-bold text-hust-blue">Welcome to HUST!</h2>
                    <p className="text-gray-500 text-sm">I'm your virtual guide. How can I assist you today?</p>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    {categories.map((cat, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleSend(cat.query)}
                        className="p-4 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md hover:border-hust-accent/30 transition-all text-left group"
                      >
                        <div className="p-2 bg-hust-blue/5 text-hust-blue rounded-xl mb-3 group-hover:bg-hust-blue group-hover:text-white transition-colors w-fit">
                          {cat.icon}
                        </div>
                        <span className="text-sm font-bold text-hust-blue">{cat.label}</span>
                      </button>
                    ))}
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest">Popular Questions</h3>
                    <div className="space-y-2">
                      {popularQuestions.map((action, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleSend(action)}
                          className="w-full p-3 text-left text-sm text-gray-600 bg-white rounded-xl border border-gray-100 hover:bg-gray-50 transition-colors flex items-center justify-between group"
                        >
                          <span>{action}</span>
                          <ArrowRight className="h-4 w-4 text-gray-300 group-hover:text-hust-accent transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex-grow overflow-y-auto p-6 space-y-6">
                  {messages.map((msg, idx) => (
                    <div 
                      key={idx} 
                      className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`flex max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'} items-end gap-3`}>
                        <div className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 shadow-sm ${msg.role === 'user' ? 'bg-hust-accent text-white' : 'bg-hust-blue text-white'}`}>
                          {msg.role === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                        </div>
                        <div className="space-y-1">
                          <div className={`p-4 rounded-2xl text-sm shadow-sm leading-relaxed ${
                            msg.role === 'user' 
                              ? 'bg-hust-accent text-white rounded-br-none' 
                              : 'bg-white text-gray-700 rounded-bl-none border border-gray-100'
                          }`}>
                            {msg.role === 'user' ? (
                              msg.text
                            ) : (
                              <div className="markdown-content">
                                <Markdown>{msg.text}</Markdown>
                              </div>
                            )}
                          </div>
                          <p className={`text-[10px] text-gray-400 ${msg.role === 'user' ? 'text-right' : 'text-left'}`}>
                            {msg.timestamp}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="flex items-end gap-3">
                        <div className="w-8 h-8 rounded-xl bg-hust-blue text-white flex items-center justify-center shadow-sm">
                          <Bot className="h-4 w-4" />
                        </div>
                        <div className="bg-white p-4 rounded-2xl rounded-bl-none border border-gray-100 shadow-sm">
                          <div className="flex space-x-1">
                            <div className="w-1.5 h-1.5 bg-hust-blue/40 rounded-full animate-bounce"></div>
                            <div className="w-1.5 h-1.5 bg-hust-blue/60 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                            <div className="w-1.5 h-1.5 bg-hust-blue rounded-full animate-bounce [animation-delay:0.4s]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-6 bg-white border-t border-gray-100">
              <div className="relative flex items-center">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder={view === 'home' ? "Ask me anything..." : "Type your message..."}
                  className="w-full pl-5 pr-14 py-4 bg-gray-50 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-hust-blue/10 focus:border-hust-blue transition-all text-sm shadow-inner"
                />
                <button
                  onClick={() => handleSend()}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2.5 bg-hust-blue text-white rounded-xl hover:bg-hust-accent disabled:opacity-50 disabled:hover:bg-hust-blue transition-all shadow-lg"
                >
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <p className="text-[10px] text-center text-gray-400 mt-3">
                Hillside University of Science and Technology Official Assistant
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {!isOpen && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(true)}
            className="p-5 rounded-2xl shadow-2xl bg-hust-blue text-white flex items-center justify-center group"
          >
            <div className="flex items-center space-x-2">
              <MessageCircle className="h-7 w-7" />
              <span className="max-w-0 overflow-hidden group-hover:max-w-[120px] transition-all duration-500 font-bold text-sm whitespace-nowrap">
                Chat with HUST
              </span>
            </div>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
