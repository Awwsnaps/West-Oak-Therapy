import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portrait from "@/assets/jennifer-portrait.png";
import glass from "@/assets/luxury-glass.png";
import wood from "@/assets/luxury-wood.png";
import light from "@/assets/light-leak.png";

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
    <div className="min-h-screen bg-black text-white font-dm selection:bg-white/20 selection:text-white overflow-hidden relative">
      
      {/* Background Layer - Apple meets Volvo Luxury */}
      <div className="fixed inset-0 z-0">
         {/* Texture Overlay */}
         <div 
           className="absolute inset-0 opacity-60 mix-blend-overlay"
           style={{ backgroundImage: `url(${wood})`, backgroundSize: 'cover' }}
         />
         
         {/* Cinematic Light Leak */}
         <motion.div 
           className="absolute top-[-20%] right-[-10%] w-[80%] h-[80%] opacity-20 blur-[120px] mix-blend-screen pointer-events-none"
           animate={{ 
             opacity: [0.15, 0.25, 0.15],
             scale: [1, 1.05, 1],
           }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         >
           <img src={light} className="w-full h-full object-cover" />
         </motion.div>

         {/* Glass Refraction */}
         <motion.div
            className="absolute bottom-[-30%] left-[-20%] w-[100%] h-[100%] opacity-30 mix-blend-soft-light pointer-events-none"
            animate={{ rotate: [0, 5, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
         >
           <img src={glass} className="w-full h-full object-cover" />
         </motion.div>
      </div>

      {/* Progress Indicator - Minimalist Luxury */}
      <div className="fixed right-12 top-1/2 -translate-y-1/2 flex flex-col gap-6 z-50">
        {["question", "mirror", "insight", "guide", "door"].map((s) => (
          <div key={s} className="relative group flex items-center justify-end">
            <div 
              className={`w-1.5 h-1.5 rounded-full transition-all duration-700 ease-out
                ${stage === s ? "bg-white scale-125 shadow-[0_0_15px_rgba(255,255,255,0.8)]" : "bg-white/10 group-hover:bg-white/30"}`}
            />
            {stage === s && (
               <motion.div 
                 layoutId="active-label"
                 className="absolute right-6 text-[10px] tracking-[0.2em] font-medium text-white/60 uppercase whitespace-nowrap"
                 initial={{ opacity: 0, x: 10 }}
                 animate={{ opacity: 1, x: 0 }}
               >
                 {s}
               </motion.div>
            )}
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
            exit={{ opacity: 0, scale: 0.95, filter: "blur(10px)" }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="h-screen flex flex-col items-center justify-center p-8 max-w-5xl mx-auto relative z-10"
          >
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-syne font-bold text-6xl md:text-8xl mb-24 tracking-tighter bg-clip-text text-transparent bg-gradient-to-b from-white to-white/60"
            >
              Why are you here?
            </motion.h1>
            
            <div className="grid gap-4 w-full max-w-2xl">
              {[
                { label: "My relationship is struggling", val: "relationship" },
                { label: "We keep having the same fight", val: "same_fight" },
                { label: "I'm using alcohol or cannabis too much", val: "substances" },
                { label: "I feel disconnected from my family", val: "disconnected" },
                { label: "I don't know, but something needs to change", val: "unknown" }
              ].map((opt, i) => (
                <motion.button
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 + (i * 0.1), duration: 0.8 }}
                  onClick={() => handleChoice(opt.val as any)}
                  className="group relative overflow-hidden rounded-xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-500 p-6 text-left"
                >
                  <div className="flex items-center justify-between relative z-10">
                    <span className="text-lg md:text-xl font-light text-white/90 group-hover:text-white transition-colors tracking-wide">
                      {opt.label}
                    </span>
                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 text-xs tracking-widest uppercase">Select</span>
                  </div>
                  {/* Subtle shine effect on hover */}
                  <div className="absolute inset-0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12" />
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
            transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto relative z-10"
            onClick={() => setStage("insight")}
          >
            <div className="space-y-12">
              {content[path].mirror.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, filter: "blur(10px)", y: 20 }}
                  animate={{ opacity: 1, filter: "blur(0px)", y: 0 }}
                  transition={{ delay: i * 1.2, duration: 1.5, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl leading-tight font-light tracking-tight ${i === content[path].mirror.length - 1 ? "text-brand-teal font-normal drop-shadow-[0_0_15px_rgba(47,100,121,0.5)]" : "text-white/80"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: content[path].mirror.length * 1.2 + 1, duration: 2 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-white/30 animate-pulse cursor-pointer"
            >
              Touch to continue
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
            transition={{ duration: 1.5 }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center max-w-4xl mx-auto relative z-10"
            onClick={() => setStage("guide")}
          >
            <div className="space-y-10 relative">
               {/* Decorative line */}
               <motion.div 
                 initial={{ height: 0 }}
                 animate={{ height: "100px" }}
                 transition={{ duration: 1.5, delay: 0.5 }}
                 className="w-px bg-gradient-to-b from-transparent via-brand-gold to-transparent mx-auto mb-10"
               />

              {content[path].insight.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.8 + 0.5, duration: 1.2, ease: "easeOut" }}
                  className={`text-3xl md:text-5xl font-syne ${i === 0 ? "text-brand-gold mb-12 block text-sm font-sans tracking-[0.3em] uppercase opacity-80" : "text-white leading-tight font-bold"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 2 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-white/30 animate-pulse cursor-pointer"
            >
              Touch to continue
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 4: THE GUIDE */}
        {stage === "guide" && (
          <motion.div 
            key="guide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative z-10"
            onClick={() => setStage("door")}
          >
            {/* Ambient Background Shift for Guide */}
            <motion.div 
              className="absolute inset-0 bg-brand-coffee/40 backdrop-blur-3xl -z-10"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 2 }}
            />

            <motion.div 
              initial={{ opacity: 0, scale: 0.9, filter: "blur(10px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden mb-12 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)] relative group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-coffee/40 to-transparent z-10 mix-blend-multiply" />
              <img src={portrait} alt="Jennifer" className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-[3s]" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-syne font-bold text-5xl md:text-6xl mb-8 tracking-tight"
            >
              I specialize in exactly this.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="max-w-2xl text-xl md:text-2xl leading-relaxed space-y-6 font-light text-white/90"
            >
              <p>I'm Jennifer Weinmann—The Relationship Architect.</p>
              <p>I help people build, repair, and transform the relationships that matter most—by seeing what's really happening between them, not just within them.</p>
              <p className="font-normal text-brand-gold tracking-wide pt-4">No judgment. No shortcuts. Just real understanding.</p>
            </motion.div>
            
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-xs tracking-[0.3em] uppercase text-white/30 animate-pulse cursor-pointer"
            >
              Touch to continue
            </motion.div>
          </motion.div>
        )}

        {/* STAGE 5: THE DOOR */}
        {stage === "door" && (
          <motion.div 
            key="door"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="h-screen flex flex-col items-center justify-center p-8 text-center bg-white text-brand-coffee relative z-10"
          >
            <motion.h1 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="font-syne font-bold text-7xl md:text-9xl mb-16 tracking-tighter text-black"
            >
              Ready?
            </motion.h1>

            <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl justify-center">
              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="px-12 py-6 bg-black text-white text-lg font-medium tracking-widest uppercase hover:bg-brand-teal transition-colors duration-500 rounded-sm shadow-2xl"
              >
                Yes — Let's Talk
              </motion.button>
              <motion.button 
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="px-12 py-6 border border-black/10 text-black/60 text-lg font-medium tracking-widest uppercase hover:bg-black/5 transition-colors duration-500 rounded-sm"
              >
                Not Yet
              </motion.button>
            </div>
            
            <motion.button 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.5 }}
              onClick={() => setStage("question")}
              className="absolute bottom-12 text-xs tracking-[0.2em] uppercase text-black/40 hover:text-black transition-colors"
            >
              Start experience over
            </motion.button>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
