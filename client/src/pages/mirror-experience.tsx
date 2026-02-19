import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import portrait from "@/assets/jennifer-portrait.png";

export default function MirrorExperience() {
  const [stage, setStage] = useState<"splash" | "mirror" | "insight" | "guide" | "door">("splash");
  const [path, setPath] = useState<"relationship" | "substances" | "disconnected" | "same_fight" | "unknown" | null>(null);
  const [mirrorIndex, setMirrorIndex] = useState(0);

  // Updated sections data from new practice info
  const infoSections = [
    {
      group: "Practice",
      items: [
        { id: "exp", title: "The Strategic Healer", content: "Jennifer Weinmann, LMFT, is a licensed therapist with fourteen years of clinical experience. She blends evidence‑based assessment with systems thinking and trauma‑informed care to help professionals, couples, and families rebuild meaningful connection." },
        { id: "approach", title: "Clinical Approach", content: "Strategically compassionate care balancing clinical clarity with human warmth. Using Relational Life Therapy (RLT) and outcome tracking to make progress visible, durable, and far‑reaching." }
      ]
    },
    {
      group: "Focus Areas",
      items: [
        { id: "co-occurring", title: "Co‑occurring & Trauma", content: "Integrated approaches for managing mental health and substance‑use together. Specialized in trauma-informed care and complex stabilization." },
        { id: "couples", title: "Couples & Families", content: "RLT-informed work to repair patterns, improve communication, and shift generational dynamics with safety-first pacing." },
        { id: "professionals", title: "Professionals & Leaders", content: "Depth‑oriented therapy respecting career demands while prioritizing sustainable, systemic change." }
      ]
    },
    {
      group: "Logistics",
      items: [
        { id: "sessions", title: "Session Format", content: "Available in 60, 90, or 120 minute lengths. Frequency is individualized, typically starting weekly and adjusted based on progress." },
        { id: "insurance", title: "*Why I don't take insurance", content: "To preserve clinical autonomy and protect your privacy. Insurance often requires simplified labels and limits session length; private pay allows for flexible, optimal care tailored to your complex needs." },
        { id: "fees", title: "Investment", content: "Individual: $200-$400. Couples: $250-$500 (based on 60/90/120 min). Superbills provided for potential OON reimbursement." }
      ]
    }
  ];

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
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#FDFCFB] text-[#2D2926] font-dm selection:bg-[#E5E0DA] selection:text-[#2D2926] overflow-hidden relative">
      
      {/* Header & Nav */}
      <nav className={`fixed top-0 w-full z-[100] px-8 py-6 md:px-12 flex justify-between items-center transition-all duration-700 border-b ${
        stage === "door" || stage === "guide" || stage === "splash" || stage === "mirror" || stage === "insight"
          ? "bg-[#FDFCFB]/90 border-[#2D2926]/5 text-[#2D2926]" 
          : "bg-[#1A1A1A]/90 border-white/5 text-[#FDFCFB]"
      } backdrop-blur-xl`}>
        <div className="font-syne font-bold text-lg tracking-tight cursor-pointer" onClick={() => {
          setStage("splash");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          West Oak Therapy
        </div>
        <button className="w-10 h-10 flex flex-col items-end justify-center gap-1.5 group">
          <span className={`w-8 h-px transition-all ${stage === "door" || stage === "guide" || stage === "splash" || stage === "mirror" || stage === "insight" ? "bg-[#2D2926]/60 group-hover:bg-[#2D2926]" : "bg-[#FDFCFB]/60 group-hover:bg-[#FDFCFB]"}`}></span>
          <span className={`w-5 h-px transition-all group-hover:w-8 ${stage === "door" || stage === "guide" || stage === "splash" || stage === "mirror" || stage === "insight" ? "bg-[#2D2926]/60 group-hover:bg-[#2D2926]" : "bg-[#FDFCFB]/60 group-hover:bg-[#FDFCFB]"}`}></span>
        </button>
      </nav>

      {/* Minimal ambient light - Scandinavian soft focus */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <motion.div 
           className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#E5E0DA]/30 blur-[150px] rounded-full"
           animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         />
      </div>

      {/* Narrative Progress Marker */}
      {stage !== "splash" && (
        <div className="fixed top-24 left-8 md:top-32 md:left-12 flex flex-col gap-6 z-50">
          {["mirror", "insight", "guide", "door"].map((s, i) => {
            const index = ["mirror", "insight", "guide", "door"].indexOf(s);
            const currentIndex = ["mirror", "insight", "guide", "door"].indexOf(stage);
            const isCompleted = index < currentIndex;
            const isActive = stage === s;
            
            return (
              <button 
                key={s} 
                onClick={() => {
                  if (isCompleted || isActive) {
                    setStage(s as any);
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }
                }}
                className={`flex items-center gap-4 group transition-all duration-500 ${!isCompleted && !isActive ? "cursor-default pointer-events-none" : "cursor-pointer"}`}
              >
                <div className="relative flex items-center">
                  <div 
                    className={`h-1 rounded-full transition-all duration-700 ease-out
                      ${isActive 
                        ? "w-10 bg-[#8C3B24]" 
                        : isCompleted
                          ? "w-6 bg-[#8C3B24]/30 group-hover:bg-[#8C3B24]/60"
                          : "w-2 bg-[#2D2926]/10"
                    }`}
                  />
                </div>
                <span className={`text-[8px] tracking-[0.3em] uppercase font-bold transition-all duration-500 
                  ${isActive ? "text-[#8C3B24] opacity-100" : isCompleted ? "text-[#2D2926] opacity-40 group-hover:opacity-100" : "text-[#2D2926] opacity-0"}`}>
                  {s === "mirror" ? "Reflection" : s === "door" ? "Logistics" : s}
                </span>
              </button>
            );
          })}
        </div>
      )}

      <AnimatePresence mode="wait">
        
        {/* STAGE 0: SPLASH (Includes Introduction & Question) */}
        {stage === "splash" && (
          <motion.div 
            key="splash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -50 }}
            className="min-h-screen bg-[#FDFCFB] text-[#2D2926] relative z-10 overflow-x-hidden"
          >
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center px-8 md:px-24">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-4xl"
              >
                <span className="text-[10px] tracking-[0.5em] uppercase opacity-40 mb-10 block font-semibold">Licensed Marriage & Family Therapy</span>
                <h1 className="font-syne font-bold text-6xl md:text-8xl lg:text-[9rem] leading-[0.9] tracking-tight mb-12">
                  Healing <br />
                  <span className="italic font-serif font-light text-[#8C3B24] tracking-normal">Structure</span> <br />
                  & Heart.
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-xl leading-relaxed text-[#2D2926]/70 mb-16">
                  A modern therapeutic practice specializing in high-performance relationship architecture and deep emotional restoration.
                </p>
                <div className="flex gap-6">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('about-jen');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-10 py-5 border border-[#2D2926]/10 rounded-full text-[11px] tracking-[0.25em] uppercase hover:bg-[#2D2926] hover:text-[#FDFCFB] transition-all duration-700 ease-in-out"
                  >
                    Explore
                  </button>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('why-here');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-10 py-5 bg-[#8C3B24] text-[#FDFCFB] rounded-full text-[11px] tracking-[0.25em] uppercase hover:bg-[#2D2926] transition-all duration-700 ease-in-out"
                  >
                    Reflect
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-20 flex flex-col items-center gap-3"
              >
                <span className="text-[9px] tracking-[0.3em] uppercase">Discovery</span>
                <div className="w-px h-16 bg-[#2D2926]" />
              </motion.div>
            </section>

            {/* About Section */}
            <section id="about-jen" className="min-h-screen flex flex-col items-center justify-center px-8 py-32 bg-[#F8F7F5]">
              <div className="container mx-auto max-w-6xl">
                <div className="grid md:grid-cols-2 gap-24 items-start mb-32">
                  <div className="relative group sticky top-32">
                    <div className="aspect-[4/5] rounded-3xl overflow-hidden brightness-105 contrast-[0.95] shadow-2xl">
                      <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover scale-100" />
                    </div>
                    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#E5E0DA]/40 rounded-full blur-3xl -z-10" />
                    <div className="mt-8 p-8 bg-white rounded-2xl shadow-sm border border-[#2D2926]/5">
                      <p className="italic text-[#8C3B24] font-serif text-xl leading-relaxed">
                        "Healing accelerates when strategy meets compassion in service of transformation."
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-16">
                    <div>
                      <h2 className="font-syne font-bold text-5xl md:text-7xl mb-8 tracking-tight text-[#2D2926] leading-tight">
                        The <span className="italic font-serif font-light text-[#8C3B24]">Strategic</span> Healer.
                      </h2>
                      <p className="text-xl text-[#2D2926]/70 font-light leading-relaxed">
                        Licensed marriage and family therapist with fourteen years of clinical experience helping professionals, couples, and families heal from trauma, address co-occurring mental health and substance-use challenges, and rebuild meaningful connection.
                      </p>
                    </div>

                    <div className="grid gap-12">
                      <div>
                        <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8C3B24] mb-6">What to expect</h3>
                        <p className="text-lg text-[#2D2926]/60 font-light leading-relaxed">
                          Strategically compassionate care that balances clinical clarity with human warmth. Sessions combine structured assessment, measurable goals, and practical skill‑building with narrative reframing and relational repair.
                        </p>
                      </div>

                      <div className="grid sm:grid-cols-2 gap-8">
                        <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                          <h4 className="font-syne font-bold text-sm mb-3">Trauma & Co-occurring</h4>
                          <p className="text-sm text-[#2D2926]/50 font-light">Integrated approaches for managing mental health and substance-use together.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                          <h4 className="font-syne font-bold text-sm mb-3">Family & Couples</h4>
                          <p className="text-sm text-[#2D2926]/50 font-light">Repairing patterns and shifting dynamics using Relational Life Therapy (RLT).</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                          <h4 className="font-syne font-bold text-sm mb-3">Professionals</h4>
                          <p className="text-sm text-[#2D2926]/50 font-light">Depth-oriented therapy that respects high-level career demands.</p>
                        </div>
                        <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                          <h4 className="font-syne font-bold text-sm mb-3">Crisis Management</h4>
                          <p className="text-sm text-[#2D2926]/50 font-light">Collaborative, system-level responses when safety concerns arise.</p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-8 border-t border-[#2D2926]/10">
                      <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#2D2926]/40 mb-6">Professional Background</h3>
                      <p className="text-lg text-[#2D2926]/60 font-light leading-relaxed mb-8">
                        Certified Clinical Trauma Professional with experience as a clinical director, college faculty, and statewide program administrator. Jennifer uses continuous improvement methods to make care more efficient and effective.
                      </p>
                      <button 
                        onClick={() => {
                          const el = document.getElementById('why-here');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center gap-4 text-[#8C3B24] font-semibold tracking-[0.2em] uppercase text-[11px] group"
                      >
                        Begin Your Mapping <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="bg-[#22333B] rounded-[3rem] p-12 md:p-24 text-white relative overflow-hidden">
                  <div className="relative z-10 max-w-3xl">
                    <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#D79E54] mb-8">A Note About Fit</h3>
                    <p className="text-2xl md:text-4xl font-light leading-tight mb-12">
                      Clients who benefit most are ready for <span className="italic font-serif text-[#D79E54]">honest, sustained work</span> and want a therapist who combines clinical rigor with genuine empathy.
                    </p>
                    <div className="flex flex-wrap gap-4">
                      <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] tracking-widest uppercase border border-white/10">Clinical Rigor</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] tracking-widest uppercase border border-white/10">Genuine Empathy</span>
                      <span className="px-4 py-2 bg-white/10 rounded-full text-[10px] tracking-widest uppercase border border-white/10">Sustained Change</span>
                    </div>
                  </div>
                  {/* Subtle background texture for the dark card */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>
              </div>
            </section>

            {/* Why are you here Section */}
            <section id="why-here" className="min-h-screen flex flex-col items-center justify-center px-8 py-32 bg-[#FDFCFB]">
              <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="mb-16 max-w-2xl mx-auto"
                >
                  <span className="text-[10px] tracking-[0.5em] uppercase text-[#8C3B24] font-bold mb-6 block">The Orientation</span>
                  <h2 className="font-syne font-bold text-5xl md:text-7xl mb-8 tracking-tight text-[#2D2926]">
                    Where do we <br /> begin?
                  </h2>
                  <p className="text-lg md:text-xl text-[#2D2926]/60 font-light leading-relaxed">
                    Select the path that most closely aligns with your current reality. This choice isn't permanent—it's simply the structural starting point for our reflection. 
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
                  {[
                    { label: "My relationship is struggling", val: "relationship", color: "bg-[#8C3B24]" },
                    { label: "We keep having the same fight", val: "same_fight", color: "bg-[#D79E54]" },
                    { label: "I'm using substances to cope", val: "substances", color: "bg-[#2D2926]" },
                    { label: "I feel disconnected from my life", val: "disconnected", color: "bg-[#434B3D]" },
                    { label: "Career & performance stress", val: "unknown", color: "bg-[#5E503F]" },
                    { label: "Something else needs to change", val: "unknown", color: "bg-[#22333B]" },
                    { label: "Communication patterns", val: "same_fight", color: "bg-[#4A4E69]" },
                    { label: "Intimacy & connection", val: "relationship", color: "bg-[#9A8C98]" },
                    { label: "Personal growth", val: "unknown", color: "bg-[#F2E9E4]" }
                  ].map((opt, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      onClick={() => handleChoice(opt.val as any)}
                      className={`group relative w-full aspect-video overflow-hidden rounded-2xl ${opt.color} transition-all duration-500 hover:scale-[1.05] active:scale-[0.98] text-left px-6 py-8 flex flex-col justify-between shadow-lg shadow-[#2D2926]/5`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`text-[10px] font-mono tracking-widest ${i === 8 ? "text-[#2D2926]/40" : "text-white/40"}`}>CASE-0{i + 1}</span>
                        <ArrowUpRight className={`w-6 h-6 ${i === 8 ? "text-[#2D2926]/40" : "text-white/40"} group-hover:text-white group-hover:rotate-45 transition-all duration-500`} />
                      </div>
                      
                      <span className={`text-xl md:text-2xl font-syne font-bold tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-500 ${i === 8 ? "text-[#2D2926]" : "text-white"}`}>
                        {opt.label}
                      </span>
                      
                      {/* Subtle architectural texture overlay */}
                      <div className={`absolute inset-0 opacity-5 pointer-events-none ${i === 8 ? "bg-[radial-gradient(#000000_1px,transparent_1px)]" : "bg-[radial-gradient(#ffffff_1px,transparent_1px)]"} [background-size:16px_16px]`} />
                    </motion.button>
                  ))}
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* STAGE 2: THE MIRROR */}
        {stage === "mirror" && path && (
          <motion.div 
            key="mirror"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
            transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
            className="min-h-screen flex flex-col items-center justify-center p-8 text-center max-w-3xl mx-auto relative z-10"
          >
            <div className="space-y-10 py-20">
              {content[path].mirror.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.4, duration: 1, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl leading-[1.3] font-light tracking-tight ${i === content[path].mirror.length - 1 ? "text-[#8C3B24]" : "text-[#2D2926]/60"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            
            <div className="flex items-center gap-8 mt-12">
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: content[path].mirror.length * 0.4 + 0.6 }}
                onClick={() => setStage("splash")}
                className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/40 hover:text-[#2D2926] transition-colors duration-500 group"
              >
                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> Back
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: content[path].mirror.length * 0.4 + 0.5 }}
                onClick={() => setStage("insight")}
                className="px-10 py-4 bg-[#2D2926] text-[#FDFCFB] rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-[#8C3B24] transition-all duration-500 shadow-xl"
              >
                Continue to Insight
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* STAGE 3: THE INSIGHT */}
        {stage === "insight" && path && (
          <motion.div 
            key="insight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, filter: "blur(30px)" }}
            transition={{ duration: 1.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 text-center max-w-3xl mx-auto relative z-10"
          >
            <div className="space-y-10 py-20">
              {content[path].insight.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.4, duration: 1, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl leading-[1.3] font-light tracking-tight ${i === content[path].insight.length - 1 ? "text-[#8C3B24]" : "text-[#2D2926]/60"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="flex items-center gap-8 mt-12">
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: content[path].insight.length * 0.4 + 0.6 }}
                onClick={() => setStage("mirror")}
                className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/40 hover:text-[#2D2926] transition-colors duration-500 group"
              >
                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> Back
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: content[path].insight.length * 0.4 + 0.5 }}
                onClick={() => setStage("guide")}
                className="mt-12 px-10 py-4 bg-[#2D2926] text-[#FDFCFB] rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-[#8C3B24] transition-all duration-500 shadow-xl"
              >
                Meet Jennifer
              </motion.button>
            </div>
          </motion.div>
        )}

        {/* STAGE 4: THE GUIDE */}
        {stage === "guide" && (
          <motion.div 
            key="guide"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen bg-[#F8F7F5] text-[#2D2926] relative z-10 overflow-y-auto pt-32 pb-20 px-8"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="grid md:grid-cols-2 gap-24 items-start mb-24 text-left">
                <div className="relative group sticky top-8">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden brightness-105 contrast-[0.95] shadow-2xl">
                    <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover scale-100" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#E5E0DA]/40 rounded-full blur-3xl -z-10" />
                  <div className="mt-8 p-8 bg-white rounded-2xl shadow-sm border border-[#2D2926]/5">
                    <p className="italic text-[#8C3B24] font-serif text-xl leading-relaxed">
                      "Healing accelerates when strategy meets compassion in service of transformation."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-16">
                  <div>
                    <h2 className="font-syne font-bold text-5xl md:text-7xl mb-8 tracking-tight text-[#2D2926] leading-tight">
                      The <span className="italic font-serif font-light text-[#8C3B24]">Strategic</span> Healer.
                    </h2>
                    <p className="text-xl text-[#2D2926]/70 font-light leading-relaxed">
                      Licensed marriage and family therapist with fourteen years of clinical experience helping professionals, couples, and families heal from trauma, address co-occurring mental health and substance-use challenges, and rebuild meaningful connection.
                    </p>
                  </div>

                  <div className="grid gap-12">
                    <div>
                      <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8C3B24] mb-6">What to expect</h3>
                      <p className="text-lg text-[#2D2926]/60 font-light leading-relaxed">
                        Strategically compassionate care that balances clinical clarity with human warmth. Sessions combine structured assessment, measurable goals, and practical skill‑building with narrative reframing and relational repair.
                      </p>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-8">
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-3">Trauma & Co-occurring</h4>
                        <p className="text-sm text-[#2D2926]/50 font-light">Integrated approaches for managing mental health and substance-use together.</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-3">Family & Couples</h4>
                        <p className="text-sm text-[#2D2926]/50 font-light">Repairing patterns and shifting dynamics using Relational Life Therapy (RLT).</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-3">Professionals</h4>
                        <p className="text-sm text-[#2D2926]/50 font-light">Depth-oriented therapy that respects high-level career demands.</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-3">Crisis Management</h4>
                        <p className="text-sm text-[#2D2926]/50 font-light">Collaborative, system-level responses when safety concerns arise.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#2D2926]/10">
                    <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#2D2926]/40 mb-6">Professional Background</h3>
                    <p className="text-lg text-[#2D2926]/60 font-light leading-relaxed mb-12">
                      Certified Clinical Trauma Professional with experience as a clinical director, college faculty, and statewide program administrator. Jennifer uses continuous improvement methods to make care more efficient and effective.
                    </p>
                    <div className="flex items-center gap-8">
                      <button 
                        onClick={() => setStage("insight")}
                        className="flex items-center gap-2 text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/40 hover:text-[#2D2926] transition-colors duration-500 group"
                      >
                        <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1" /> Back
                      </button>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => setStage("door")}
                        className="px-10 py-4 bg-[#8C3B24] text-white rounded-full text-[10px] tracking-[0.4em] uppercase hover:bg-[#2D2926] transition-all duration-500 shadow-xl"
                      >
                        Begin Your Work
                      </motion.button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* STAGE 5: THE DOOR (Logistics) */}
        {stage === "door" && (
          <motion.div 
            key="door"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen flex flex-col items-center justify-start pt-32 pb-20 p-8 text-center bg-[#FDFCFB] text-[#2D2926] relative z-10 overflow-y-auto"
          >
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="mb-32"
              >
                <h1 className="font-syne font-bold text-6xl md:text-8xl lg:text-[10rem] mb-12 tracking-tighter leading-[0.85]">
                  Construct <br />
                  <span className="italic font-serif font-light text-[#8C3B24]">Meaning.</span>
                </h1>
                
                <div className="flex flex-col md:flex-row gap-8 w-full max-w-xl mx-auto justify-center mt-16">
                  <motion.button 
                    whileHover={{ scale: 1.03, backgroundColor: "#1A1A1A" }}
                    whileTap={{ scale: 0.97 }}
                    className="px-14 py-6 bg-[#2D2926] text-[#FDFCFB] text-sm font-semibold tracking-[0.3em] uppercase transition-all duration-700 rounded-full shadow-2xl"
                  >
                    Consultation
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.03, backgroundColor: "#F8F7F5" }}
                    whileTap={{ scale: 0.97 }}
                    className="px-14 py-6 border border-[#2D2926]/10 text-[#2D2926] text-sm font-semibold tracking-[0.3em] uppercase transition-all duration-700 rounded-full"
                  >
                    Portal
                  </motion.button>
                </div>
              </motion.div>

              {/* Modern Architect Style Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-24 text-left border-t border-[#2D2926]/5 pt-24">
                {infoSections.flatMap(group => group.items).map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-center mb-8">
                      <span className="font-mono text-[10px] tracking-widest text-[#2D2926]/20">ARCH-0{i + 1}</span>
                      <div className="w-10 h-10 rounded-full border border-[#2D2926]/10 flex items-center justify-center group-hover:bg-[#8C3B24] group-hover:border-[#8C3B24] group-hover:text-[#FDFCFB] transition-all duration-700">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-syne text-2xl font-bold mb-6 tracking-tight group-hover:text-[#8C3B24] transition-colors duration-500">{item.title}</h3>
                    <p className="text-[#2D2926]/50 leading-relaxed font-light text-lg">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Final Footer Style Reset */}
              <div className="mt-48 pt-16 border-t border-[#2D2926]/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[#2D2926]/30 text-[10px] tracking-[0.4em] uppercase font-bold">
                <div>© 2026 Jennifer Weinmann / West Oak</div>
                <div className="flex gap-12">
                  <span className="cursor-pointer hover:text-[#8C3B24] transition-colors duration-500">Security</span>
                  <span className="cursor-pointer hover:text-[#8C3B24] transition-colors duration-500">Confidentiality</span>
                </div>
                <div className="flex gap-12">
                  <motion.button 
                    onClick={() => {
                      setStage("guide");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-[#8C3B24] transition-colors duration-500"
                  >
                    Back to Bio
                  </motion.button>
                  <motion.button 
                    onClick={() => {
                      setStage("splash");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="hover:text-[#8C3B24] transition-colors duration-500"
                  >
                    Return to Top
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
