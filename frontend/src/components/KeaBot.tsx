import React, { useState } from 'react';
import { X, Send, Bot, Sparkles, ChevronRight } from 'lucide-react';

interface KeaBotProps {
  onNavigateToResults?: () => void;
}

export const KeaBot: React.FC<KeaBotProps> = ({ onNavigateToResults }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState<Array<{ sender: 'bot' | 'user'; text: string; action?: string }>>([
    {
      sender: 'bot',
      text: 'ನಮಸ್ಕಾರ! Welcome to Karnataka Examinations Authority (KEA) AI Bot. How can I assist you with UGCET, PGCET, NEET, or DCET admissions today?'
    }
  ]);

  const quickPrompts = [
    {
      label: 'Check PGCET 2026 Result',
      reply: 'The PGCET 2026 provisional results for MBA, MCA, and M.Tech / M.Arch were announced. You can enter your Application Number and Date of Birth to view your scorecard.',
      action: 'view_results'
    },
    {
      label: 'UGCET / KCET Admissions',
      reply: 'UGCET seat allocation for Engineering, Architecture (NATA), Farm Science, B-Pharma, and B.Sc Nursing is managed through KEA centralized counselling.'
    },
    {
      label: 'Document Verification',
      reply: 'Document verification is conducted at KEA Malleswaram and designated nodal centers. Carry original study certificates, caste/income certificates, and 2 sets of attested copies.'
    },
    {
      label: 'KEA Helpline & Address',
      reply: 'KEA Helpline: 080-23460460 | Email: keauthority-ka@nic.in | Address: 18th Cross, Sampige Road, Malleswaram, Bengaluru 560012.'
    }
  ];

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMsgs = [...messages, { sender: 'user' as const, text: userText }];
    setMessages(newMsgs);
    setInputMsg('');

    setTimeout(() => {
      let botResponse = "Thank you for reaching out. Please check the official KEA announcements or launch the Result Verification portal for rank cards.";
      let action: string | undefined = undefined;

      const lower = userText.toLowerCase();
      if (lower.includes('result') || lower.includes('rank') || lower.includes('marks') || lower.includes('pgcet')) {
        botResponse = "You can view your PGCET 2026 provisional result, marks, and state rank by entering your Application Number on the Result Search page.";
        action = 'view_results';
      } else if (lower.includes('document') || lower.includes('verification') || lower.includes('counselling')) {
        botResponse = "Verification will take place at nodal district centers and KEA Bangalore. Please keep your original documents and 2 attested sets ready.";
      } else if (lower.includes('contact') || lower.includes('phone') || lower.includes('helpline')) {
        botResponse = "KEA Malleswaram contact: 080-23460460 / 23460461 (Mon-Fri 10:00 AM - 5:30 PM).";
      }

      setMessages(prev => [...prev, { sender: 'bot', text: botResponse, action }]);
    }, 400);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end print:hidden">
      {/* Interactive Chat Window */}
      {isOpen && (
        <div className="mb-3 w-[340px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col h-[480px] animate-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="bg-[#650e5f] text-white p-3.5 flex items-center justify-between border-b-2 border-b-[#F2B632]">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-full bg-white/15 flex items-center justify-center border border-white/40">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-sm leading-tight flex items-center gap-1.5">
                  KEA BOT ASSISTANT
                  <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                </h4>
                <p className="text-[11px] text-pink-100">AI Powered Chat Bot • Karnataka Examinations Authority</p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-white/80 hover:text-white hover:bg-white/15 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages body */}
          <div className="flex-1 p-3.5 overflow-y-auto bg-[#F4F6FA] space-y-3">
            {messages.map((msg, idx) => (
              <div
                key={idx}
                className={`flex flex-col ${msg.sender === 'user' ? 'items-end' : 'items-start'}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl p-3 text-xs sm:text-[13px] leading-relaxed shadow-2xs ${
                    msg.sender === 'user'
                      ? 'bg-[#650e5f] text-white rounded-br-none'
                      : 'bg-white text-[#1F2937] border border-gray-200 rounded-bl-none'
                  }`}
                >
                  <p>{msg.text}</p>
                  
                  {msg.action === 'view_results' && onNavigateToResults && (
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        onNavigateToResults();
                      }}
                      className="mt-2.5 w-full bg-[#650e5f] hover:bg-[#520a4d] text-white font-bold py-1.5 px-3 rounded-lg text-xs flex items-center justify-center gap-1.5 transition-colors shadow-2xs"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#F2B632]" />
                      Go to Result Search Form
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
                <span className="text-[10px] text-gray-400 mt-1 px-1">
                  {msg.sender === 'user' ? 'You' : 'KEA Bot'}
                </span>
              </div>
            ))}
          </div>

          {/* Quick FAQ Prompts */}
          <div className="p-2 bg-white border-t border-gray-100 flex gap-1.5 overflow-x-auto text-[11px] whitespace-nowrap">
            {quickPrompts.map((p, i) => (
              <button
                key={i}
                onClick={() => {
                  const newMsgs = [...messages, { sender: 'user' as const, text: p.label }];
                  setMessages(newMsgs);
                  setTimeout(() => {
                    setMessages(prev => [...prev, { sender: 'bot', text: p.reply, action: p.action }]);
                  }, 300);
                }}
                className="bg-purple-50 hover:bg-purple-100 text-[#650e5f] font-medium px-2.5 py-1 rounded-full transition-colors shrink-0"
              >
                {p.label}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(inputMsg);
            }}
            className="p-2.5 bg-white border-t border-gray-200 flex items-center gap-2"
          >
            <input
              type="text"
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              placeholder="Ask KEA Bot a question..."
              className="flex-1 text-xs sm:text-sm px-3 py-2 bg-gray-100 rounded-full border border-gray-200 focus:outline-none focus:border-[#650e5f] focus:bg-white transition-colors"
            />
            <button
              type="submit"
              disabled={!inputMsg.trim()}
              className="w-9 h-9 rounded-full bg-[#650e5f] hover:bg-[#520a4d] disabled:opacity-40 text-white flex items-center justify-center transition-colors shrink-0"
            >
              <Send className="w-4 h-4" />
            </button>
          </form>
        </div>
      )}

      {/* Floating Launcher Button - Circular KEA BOT Badge matching screenshot */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative group w-[106px] h-[106px] rounded-full bg-white shadow-2xl border-[3px] border-[#650e5f] hover:scale-105 transition-transform duration-200 p-1 flex flex-col items-center justify-center select-none text-center"
        aria-label="Open KEA Bot Chat"
        title="KEA BOT - Need Help? Ask questions from AI Powered Chat Bot"
      >
        {isOpen ? (
          <div className="flex flex-col items-center justify-center text-[#650e5f]">
            <X className="w-8 h-8" />
            <span className="text-[10px] font-bold mt-1">CLOSE</span>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center w-full h-full relative">
            {/* Top Megaphone / Sound */}
            <div className="absolute top-1 right-2 text-pink-600">
              <svg className="w-5 h-5 text-[#c2185b] -rotate-12" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l-2 5H6a2 2 0 00-2 2v6a2 2 0 002 2h4l2 5v-4h3l5 4V2l-5 4h-3V2z M17 8c1.3 1.3 1.3 3.4 0 4.7l1.4 1.4c2.1-2.1 2.1-5.5 0-7.6L17 8z" />
              </svg>
            </div>

            {/* KEA Monogram */}
            <div className="text-[#650e5f] font-black text-xl tracking-tight leading-none mt-1">
              KEA
            </div>

            {/* Red NEED HELP? Pill */}
            <div className="bg-[#e53935] text-white text-[7.5px] font-extrabold px-2 py-[1px] rounded-full uppercase tracking-tight my-0.5 shadow-2xs">
              NEED HELP ?
            </div>

            {/* Bottom descriptive text */}
            <div className="text-[6.5px] font-bold text-gray-700 uppercase leading-[1.1] tracking-tight">
              ASK QUESTIONS FROM
            </div>
            <div className="text-[8px] font-black text-gray-900 uppercase tracking-tight leading-tight">
              KEA BOT
            </div>
            <div className="text-[6px] font-bold text-[#650e5f] uppercase tracking-tight leading-none">
              AI POWERED CHAT BOT
            </div>
          </div>
        )}
      </button>
    </div>
  );
};
