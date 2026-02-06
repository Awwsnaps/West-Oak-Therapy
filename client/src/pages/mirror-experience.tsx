import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "@/assets/jennifer-portrait.png";

export default function MirrorExperience() {
  const [stage, setStage] = useState<"question" | "mirror" | "insight" | "guide" | "door">("question");
  const [path, setPath] = useState<"relationship" | "substances" | "disconnected" | "same_fight" | "unknown" | null>(null);

  // Content for different paths
  const content = {
    relationship: {
      mirror: [
        "You love them. That's not the question.",
        "The question is why loving someone doesn't translate to feeling close to them.",
        "You've had the same fight seventeen different ways.",
        "You know the pattern by heart.",
        "They pull in. You pull away.",
        "Either way—you're both exhausted.",
        "And part of you is starting to wonder if this is just how marriage is.",
      ],
      insight: [
        "Here's what most couples don't understand—",
        "The fights aren't about what they're about.",
        "Every argument about dishes or schedules is actually asking:",
        "Do you see me? Am I safe with you?",
        "Until you answer those, you'll fight forever."
      ]
    },
    same_fight: {
      mirror: [
        "It's not really about the dishes.",
        "Or the money. Or who said what last Tuesday.",
        "You know that. But you keep having the fight anyway.",
        "Because something underneath keeps getting triggered.",
        "They say something. You react. You say something. They react.",
        "And suddenly you're both standing in the wreckage of another evening wondering how you got here again.",
        "You're not stupid. Neither are they. So why can't you stop?"
      ],
      insight: [
        "Here's what's actually happening—",
        "You're both doing exactly what makes sense given your history.",
        "The problem isn't you. The problem isn't them.",
        "The problem is a pattern that neither of you can see because you're both inside it.",
        "You can't fix a pattern you can't see.",
        "You need someone outside it."
      ]
    },
    substances: {
      mirror: [
        "You told yourself it's not that bad. Everybody drinks.",
        "It helps you relax. It takes the edge off.",
        "But here's the thing—",
        "You keep having to negotiate with yourself.",
        "'Just two tonight.' 'Only on weekends.'",
        "And the negotiations get harder.",
        "And you know you sound like someone you swore you'd never become."
      ],
      insight: [
        "Here's what they don't tell you—",
        "You're not weak. You're not defective.",
        "You're someone who found a solution.",
        "The alcohol isn't the problem.",
        "It's the answer to a problem you haven't named yet."
      ]
    },
    disconnected: {
      mirror: [
        "You're there. But you're not there.",
        "You come home. You eat dinner. You help with homework.",
        "And somehow you feel like a visitor in your own life.",
        "Your kids have stopped asking if you want to play.",
        "Your spouse has stopped asking what you're thinking.",
        "Not because they don't care.",
        "Because they stopped expecting an answer."
      ],
      insight: [
        "Here's what no one explained—",
        "You learned to perform connection instead of experiencing it.",
        "You learned that love was earned through achievement.",
        "So you achieved. And achieved.",
        "And now you have everything. Except the feeling that any of it matters."
      ]
    },
    unknown: {
      mirror: [
        "You know something's wrong.",
        "You can't name it. But you feel it.",
        "The success isn't satisfying.",
        "The relationship isn't connecting.",
        "You've tried: Books. Podcasts. Meditation.",
        "And still—something is missing.",
        "Something fundamental."
      ],
      insight: [
        "Here's the thing about high performers—",
        "You've optimized everything external.",
        "But the internal architecture?",
        "That doesn't respond to the same strategies.",
        "You can't hustle your way to meaning."
      ]
    }
  };

  const handleChoice = (selectedPath: "relationship" | "substances" | "disconnected" | "same_fight" | "unknown") => {
    setPath(selectedPath);
    setStage("mirror");
  };

  return (
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-dm selection:bg-white/20 selection:text-white overflow-hidden relative">
      
      {/* Minimal ambient light - simplified */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <motion.div 
           className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#D79E54]/[0.05] blur-[150px] rounded-full"
           animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
         />
      </div>

      {/* Simplified Progress Indicator */}
      <div className="fixed top-8 left-8 md:top-12 md:left-12 flex gap-3 z-50">
        {["question", "mirror", "insight", "guide", "door"].map((s, i) => (
          <div key={s} className="flex flex-col items-center">
            <div 
              className={`h-1 rounded-full transition-all duration-700 ease-out
                ${stage === s 
                  ? "w-8 bg-[#D79E54]" 
                  : ["question", "mirror", "insight", "guide", "door"].indexOf(s) < ["question", "mirror", "insight", "guide", "door"].indexOf(stage)
                    ? "w-8 bg-[#8C3B24]/40"
                    : "w-2 bg-white/10"
                }`}
            />
          </div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        
        {/* STAGE 1: THE QUESTION */}
        {stage === "question" && (
          <motion.div 
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="h-screen flex flex-col items-center justify-center p-8 max-w-4xl mx-auto relative z-10"
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-syne font-medium text-5xl md:text-7xl mb-20 tracking-tight text-center text-[#F5F5F5]"
            >
              Why are you here?
            </motion.h1>
            
            <div className="flex flex-col gap-px w-full max-w-xl border-y border-white/10 bg-white/5">
              {[
                { label: "My relationship is struggling", val: "relationship" },
                { label: "We keep having the same fight", val: "same_fight" },
                { label: "I'm using alcohol or cannabis too much", val: "substances" },
                { label: "I feel disconnected from my family", val: "disconnected" },
                { label: "I don't know, but something needs to change", val: "unknown" }
              ].map((opt, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 + (i * 0.05), duration: 0.5 }}
                  onClick={() => handleChoice(opt.val as any)}
                  className="group relative flex items-center justify-between p-6 bg-[#050505] hover:bg-[#0A0A0A] transition-colors duration-300 text-left w-full"
                >
                  <span className="text-lg md:text-xl font-light text-white/50 group-hover:text-[#D79E54] transition-colors tracking-wide">
                    {opt.label}
                  </span>
                  <span className="text-white/10 group-hover:text-[#D79E54] transition-colors duration-300 text-xl font-light">→</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}

        {/* STAGE 2: THE MIRROR */}
        {stage === "mirror" && path && (
          <motion.div 
            key="mirror"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center max-w-3xl mx-auto relative z-10"
            onClick={() => setStage("insight")}
          >
            <div className="space-y-8">
              {content[path].mirror.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(5px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 1.5, duration: 1, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl leading-tight font-light tracking-tight ${i === content[path].mirror.length - 1 ? "text-[#D79E54]" : "text-white/40"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: content[path].mirror.length * 1.5 + 1, duration: 1 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] uppercase text-[#D79E54]/40"
            >
              Click to continue
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 3: THE INSIGHT */}
        {stage === "insight" && path && (
          <motion.div 
            key="insight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(20px)" }}
            transition={{ duration: 1 }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center max-w-3xl mx-auto relative z-10"
            onClick={() => setStage("guide")}
          >
            <div className="space-y-8 relative">
              {content[path].insight.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 1 + 0.5, duration: 1, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl font-syne ${i === 0 ? "text-[#8C3B24] mb-12 block text-sm font-sans tracking-[0.2em] uppercase" : "text-[#F5F5F5] leading-tight font-medium"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4, duration: 1 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] uppercase text-[#8C3B24]/40"
            >
              Click to continue
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 4: THE GUIDE */}
        {stage === "guide" && (
          <motion.div 
            key="guide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative z-10 bg-[#F5F5F0] text-[#1F0E0B]"
            onClick={() => setStage("door")}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, ease: "easeOut" }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-12 grayscale contrast-125 border-4 border-[#05290D]/10"
            >
              <img src={portrait} alt="Jennifer" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="font-syne font-bold text-4xl md:text-5xl mb-8 tracking-tight text-[#05290D]"
            >
              I specialize in exactly this.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="max-w-xl text-lg md:text-xl leading-relaxed space-y-6 font-light text-[#1F0E0B]/80"
            >
              <p>I'm Jennifer Weinmann—The Relationship Architect.</p>
              <p>I help people build, repair, and transform the relationships that matter most—by seeing what's really happening between them, not just within them.</p>
              <p className="font-medium text-[#8C3B24]">No judgment. No shortcuts. Just real understanding.</p>
            </motion.div>
            
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2, duration: 1 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[0.2em] uppercase text-[#05290D]/40"
            >
              Click to continue
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 5: THE DOOR */}
        {stage === "door" && (
          <motion.div 
            key="door"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center bg-[#F5F5F0] text-[#1F0E0B] relative z-10"
          >
            <motion.h1 
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-syne font-bold text-6xl md:text-8xl mb-16 tracking-tighter text-[#05290D]"
            >
              Ready?
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-lg justify-center">
              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="px-8 py-4 bg-[#05290D] text-white text-base font-medium tracking-widest uppercase hover:bg-[#8C3B24] transition-colors duration-300"
              >
                Yes — Let's Talk
              </motion.button>
              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="px-8 py-4 border border-[#05290D]/20 text-[#05290D]/60 text-base font-medium tracking-widest uppercase hover:bg-[#05290D]/5 transition-colors duration-300"
              >
                Not Yet
              </motion.button>
            </div>
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={() => setStage("question")}
              className="absolute bottom-12 text-xs tracking-[0.2em] uppercase text-[#05290D]/30 hover:text-[#05290D] transition-colors"
            >
              Start experience over
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
