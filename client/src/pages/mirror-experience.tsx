import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portrait from "@/assets/jennifer-portrait.png";

export default function MirrorExperience() {
  const [stage, setStage] = useState<"splash" | "mirror" | "insight" | "guide" | "door">("splash");
  const [path, setPath] = useState<"relationship" | "substances" | "disconnected" | "same_fight" | "unknown" | null>(null);
  const [selectedSphere, setSelectedSphere] = useState<string | null>(null);

  // Additional sections data
  const infoSections = [
    {
      group: "Practice",
      items: [
        { id: "exp", title: "Professional Experience", content: "Over 15 years specializing in complex relationship dynamics and high-performance stress management. Licensed Marriage and Family Therapist (LMFT)." },
        { id: "services", title: "Services", content: "Individual therapy, couples intensive workshops, and strategic relationship consulting. Specialized support for substance use patterns." }
      ]
    },
    {
      group: "Process",
      items: [
        { id: "booking", title: "Booking", content: "Initial consultations are available via the portal. We typically schedule 50-minute sessions, with 90-minute intensives available for couples." },
        { id: "payment", title: "Payment", content: "All major credit cards accepted. Secure digital billing through our client portal." },
        { id: "forms", title: "Intake Forms", content: "Digital forms will be sent upon booking. Please complete them 24 hours before our first session." }
      ]
    },
    {
      group: "Resources & Fees",
      items: [
        { id: "resources", title: "Client Resources", content: "Access to the 'Architect's Toolkit'—a curated library of worksheets, reading lists, and pattern-tracking tools." },
        { id: "insurance", title: "*Why I don't take insurance", content: "To protect your privacy and ensure our work is dictated by your needs, not a diagnosis required by an insurance carrier. This allows for total clinical freedom and confidentiality." },
        { id: "fees", title: "Fees", content: "Standard sessions: $250. Couples intensives: $400. Inquire for concierge or out-of-office intensive pricing." }
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

      {/* Simplified Progress Indicator */}
      {stage !== "splash" && (
        <div className="fixed top-24 left-8 md:top-32 md:left-12 flex gap-3 z-50">
          {["mirror", "insight", "guide", "door"].map((s, i) => (
            <div key={s} className="flex flex-col items-center">
              <div 
                className={`h-1 rounded-full transition-all duration-700 ease-out
                  ${stage === s 
                    ? "w-8 bg-[#8C3B24]" 
                    : ["mirror", "insight", "guide", "door"].indexOf(s) < ["mirror", "insight", "guide", "door"].indexOf(stage)
                      ? "w-8 bg-[#8C3B24]/20"
                      : "w-2 bg-[#2D2926]/10"
                }`}
              />
            </div>
          ))}
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
              <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-24 items-center">
                <div className="relative group">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden grayscale brightness-105 contrast-[0.95] transition-all duration-1000 group-hover:grayscale-0">
                    <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-[2000ms]" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#E5E0DA]/40 rounded-full blur-3xl -z-10" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-4xl md:text-6xl mb-10 tracking-tight text-[#2D2926] leading-tight">
                    Rooted in <br /> <span className="italic font-serif font-light text-[#8C3B24]">Excellence.</span>
                  </h2>
                  <div className="space-y-8 text-xl text-[#2D2926]/60 font-light leading-relaxed">
                    <p>
                      I am Jennifer Weinmann. My practice is built on the intersection of deep clinical expertise and a modern, architectural approach to human connection.
                    </p>
                    <p>
                      We don't just talk about problems; we map the structural patterns that define your life, reinforcing what works and redesigning what doesn't.
                    </p>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('why-here');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="mt-12 flex items-center gap-4 text-[#8C3B24] font-semibold tracking-[0.2em] uppercase text-[11px] group"
                    >
                      Begin Your Mapping <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500" />
                    </button>
                  </div>
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
            className="h-screen flex flex-col items-center justify-center p-8 text-center max-w-3xl mx-auto relative z-10"
            onClick={() => setStage("insight")}
          >
            <div className="space-y-10">
              {content[path].mirror.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 1.8, duration: 1.5, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl leading-[1.3] font-light tracking-tight transition-colors duration-1000 ${i === content[path].mirror.length - 1 ? "text-[#8C3B24]" : "text-[#2D2926]/40"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: content[path].mirror.length * 1.8 + 1, duration: 1.5 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/20"
            >
              Continue the reflection
            </motion.div>
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
            className="h-screen flex flex-col items-center justify-center p-8 text-center max-w-3xl mx-auto relative z-10"
            onClick={() => setStage("guide")}
          >
            <div className="space-y-12 relative">
              {content[path].insight.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 1.2 + 0.8, duration: 1.5, ease: "easeOut" }}
                  className={`text-2xl md:text-4xl font-syne ${i === 0 ? "text-[#8C3B24] mb-16 block text-[10px] font-sans tracking-[0.5em] uppercase font-bold" : "text-[#2D2926] leading-[1.2] font-semibold tracking-tight"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 5, duration: 1.5 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#8C3B24]/40"
            >
              Move toward clarity
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
            transition={{ duration: 1.5 }}
            className="min-h-screen flex flex-col items-center justify-center p-8 text-center relative z-10 bg-[#F8F7F5] text-[#2D2926]"
            onClick={() => setStage("door")}
          >
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="w-56 h-56 md:w-72 md:h-72 rounded-3xl overflow-hidden mb-16 grayscale brightness-105 contrast-[0.9] border border-[#2D2926]/5 shadow-2xl"
            >
              <img src={portrait} alt="Jennifer" className="w-full h-full object-cover" />
            </motion.div>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1 }}
              className="font-syne font-bold text-4xl md:text-5xl mb-10 tracking-tight text-[#2D2926] leading-tight"
            >
              Expert guidance for <br /> <span className="italic font-serif font-light text-[#8C3B24]">complex</span> terrain.
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 1 }}
              className="max-w-xl text-xl md:text-2xl leading-relaxed space-y-8 font-light text-[#2D2926]/60"
            >
              <p>I am The Relationship Architect.</p>
              <p>My work is about mapping the hidden pathways of connection, revealing the structures that keep you stuck, and building the ones that set you free.</p>
              <p className="font-semibold text-[#8C3B24] tracking-wide">Intentional. Evidence-based. Transformative.</p>
            </motion.div>
            
             <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 3, duration: 1.5 }}
              className="fixed bottom-12 left-1/2 -translate-x-1/2 text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/30"
            >
              Enter the practice
            </motion.div>
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
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
