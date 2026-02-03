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

  // Visual support based on stage
  const getBackground = () => {
    if (stage === "question") return "bg-black";
    if (stage === "mirror") return "bg-gradient-to-b from-black to-brand-teal/20";
    if (stage === "insight") return "bg-gradient-to-b from-black to-brand-coffee";
    if (stage === "guide") return "bg-brand-vermilion";
    if (stage === "door") return "bg-white";
    return "bg-black";
  };

  return (
    <div className={`min-h-screen transition-colors duration-1000 ${getBackground()} text-white font-dm selection:bg-brand-teal selection:text-white overflow-hidden relative`}>
      
      {/* Subtle Texture Layer */}
      <div className="absolute inset-0 opacity-10 pointer-events-none bg-noise mix-blend-overlay" />
      
      {/* Abstract visual support */}
      <AnimatePresence>
        {stage !== "guide" && stage !== "door" && (
           <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             exit={{ opacity: 0 }}
             className="absolute inset-0 z-0 pointer-events-none"
           >
              <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] rounded-full bg-brand-teal/10 blur-[100px] animate-pulse" />
              <div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-brand-gold/5 blur-[100px] animate-pulse" style={{ animationDelay: "2s" }} />
           </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Dots */}
      <div className="fixed right-8 top-1/2 -translate-y-1/2 flex flex-col gap-4 z-50">
        {["question", "mirror", "insight", "guide", "door"].map((s) => (
          <div 
            key={s} 
            className={`w-2 h-2 rounded-full transition-all duration-500 ${stage === s ? "bg-brand-gold scale-150" : "bg-white/20"}`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        
        {/* STAGE 1: THE QUESTION */}
        {stage === "question" && (
          <motion.div 
            key="question"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="h-screen flex flex-col items-center justify-center p-6 max-w-4xl mx-auto text-center relative z-10"
          >
            <h1 className="font-syne font-bold text-5xl md:text-7xl mb-16 tracking-tight">Why are you here?</h1>
            <div className="grid gap-6 w-full max-w-2xl">
              {[
                { label: "My relationship is struggling", val: "relationship" },
                { label: "We keep having the same fight", val: "same_fight" },
                { label: "I'm using alcohol or cannabis too much", val: "substances" },
                { label: "I feel disconnected from my family", val: "disconnected" },
                { label: "I don't know, but something needs to change", val: "unknown" }
              ].map((opt, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + (i * 0.1) }}
                  onClick={() => handleChoice(opt.val as any)}
                  className="text-left text-xl md:text-2xl py-4 border-b border-white/10 hover:border-brand-teal hover:text-brand-teal transition-all group"
                >
                  <span className="opacity-50 mr-4 text-sm font-mono">0{i+1}</span>
                  {opt.label}
                </motion.button>
              ))}
            </div>
            <button className="fixed bottom-8 text-white/30 text-sm hover:text-white transition-colors">
              Skip experience →
            </button>
          </motion.div>
        )}

        {/* STAGE 2: THE MIRROR */}
        {stage === "mirror" && path && (
          <motion.div 
            key="mirror"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col items-center justify-center p-6 text-center max-w-3xl mx-auto relative z-10"
            onClick={() => setStage("insight")}
          >
            <div className="space-y-8">
              {content[path].mirror.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", transform: "translateY(10px)" }}
                  animate={{ opacity: 1, filter: "blur(0px)", transform: "translateY(0px)" }}
                  transition={{ delay: i * 0.8, duration: 1 }}
                  className={`text-xl md:text-3xl leading-relaxed ${i === content[path].mirror.length - 1 ? "text-brand-teal font-medium" : "text-white/80"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 6 }}
              className="mt-16 text-white/40 animate-pulse cursor-pointer"
            >
              Click to continue ↓
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 3: THE INSIGHT */}
        {stage === "insight" && path && (
          <motion.div 
            key="insight"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="h-screen flex flex-col items-center justify-center p-6 text-center max-w-3xl mx-auto relative z-10"
            onClick={() => setStage("guide")}
          >
            <div className="space-y-8">
              {content[path].insight.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.6 }}
                  className={`text-2xl md:text-4xl font-syne ${i === 0 ? "text-brand-gold mb-8 block text-lg font-mono tracking-widest uppercase" : "text-white"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 4 }}
              className="mt-16 text-white/40 animate-pulse cursor-pointer"
            >
              Continue ↓
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 4: THE GUIDE */}
        {stage === "guide" && (
          <motion.div 
            key="guide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="min-h-screen flex flex-col items-center justify-center p-6 text-center bg-brand-vermilion text-brand-coffee relative z-10"
            onClick={() => setStage("door")}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden mb-8 border-4 border-white shadow-2xl"
            >
              <img src={portrait} alt="Jennifer" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="font-syne font-bold text-4xl md:text-5xl mb-6"
            >
              I specialize in exactly this.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="max-w-2xl text-xl leading-relaxed space-y-4"
            >
              <p>I'm Jennifer Weinmann—The Relationship Architect.</p>
              <p>I help people build, repair, and transform the relationships that matter most—by seeing what's really happening between them, not just within them.</p>
              <p className="font-bold text-brand-teal">No judgment. No shortcuts. Just real understanding.</p>
            </motion.div>
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3 }}
              className="mt-16 text-brand-coffee/40 animate-pulse cursor-pointer"
            >
              Continue ↓
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 5: THE DOOR */}
        {stage === "door" && (
          <motion.div 
            key="door"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="h-screen flex flex-col items-center justify-center p-6 text-center bg-white text-brand-coffee relative z-10"
          >
            <h1 className="font-syne font-bold text-6xl md:text-8xl mb-12">Ready?</h1>
            <div className="flex flex-col md:flex-row gap-8 w-full max-w-2xl justify-center">
              <button className="px-12 py-6 bg-brand-coffee text-white text-xl font-bold hover:bg-brand-teal transition-colors rounded-none">
                Yes — Let's Talk
              </button>
              <button className="px-12 py-6 border-2 border-brand-coffee text-brand-coffee text-xl font-bold hover:bg-brand-coffee hover:text-white transition-colors rounded-none">
                Not Yet
              </button>
            </div>
            <button 
              onClick={() => setStage("question")}
              className="mt-16 text-sm text-brand-coffee/50 hover:text-brand-coffee underline"
            >
              Start over
            </button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
