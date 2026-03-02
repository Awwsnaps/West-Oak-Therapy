import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, ArrowLeft } from "lucide-react";
import treeImage from "@/assets/simon-wilkes-S297j2CsdlM-unsplash_1771550247524.jpg";
import portrait from "@/assets/Jen-03.jpg";
import portraitAlternate from "@/assets/Jen-13.jpg";

export default function MirrorExperience() {
  const [stage, setStage] = useState<"splash" | "mirror" | "insight" | "guide" | "service">("splash");
  const [path, setPath] = useState<"relationship" | "substances" | "disconnected" | "same_fight" | "unknown" | null>(null);
  const [mirrorIndex, setMirrorIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <nav className={`fixed top-4 left-1/2 -translate-x-1/2 w-[95%] max-w-7xl z-[100] px-6 md:px-8 py-3 md:py-4 flex justify-between items-center transition-all duration-700 rounded-full border ${
        stage === "service" || stage === "guide" || stage === "splash" || stage === "mirror" || stage === "insight"
          ? "bg-[#1A1A1A]/80 border-white/10 text-white" 
          : "bg-[#1A1A1A]/90 border-white/5 text-[#FDFCFB]"
      } backdrop-blur-xl shadow-2xl`}>
        <div className="font-syne font-bold text-base md:text-lg tracking-tight cursor-pointer whitespace-nowrap" onClick={() => {
          setStage("splash");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          West Oak Therapy
        </div>
        
        <div className="hidden lg:flex items-center gap-8">
          {[
            { label: "Home", action: () => { setStage("splash"); window.scrollTo({ top: 0, behavior: "smooth" }); } },
            { label: "About", action: () => setStage("guide") },
            { label: "Therapy Services", action: () => setStage("mental-health" as any) },
            { label: "Service", action: () => setStage("service") }
          ].map((item) => (
            <button 
              key={item.label}
              onClick={item.action}
              className="text-[9px] tracking-[0.2em] uppercase font-bold hover:text-[#D79E54] transition-colors duration-500"
            >
              {item.label}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3 md:gap-4">
          <div className="hidden lg:flex flex-col items-end mr-2">
            <button 
              onClick={() => window.open('https://westoaktherapy.sessionshealth.com', '_blank')}
              className="px-5 py-2 border border-white/20 text-white rounded-full text-[9px] tracking-[0.1em] uppercase font-bold hover:bg-white hover:text-[#1A1A1A] transition-all duration-500"
            >
              Client Portal
            </button>
            <span className="text-[6px] text-white/40 uppercase tracking-widest mt-1 mr-2">Secure scheduling</span>
          </div>
          <button 
            onClick={() => window.location.href = "mailto:jen@westoaktherapy.com?subject=Consultation%20Request"}
            className="hidden lg:block px-5 py-2 bg-white text-[#1A1A1A] rounded-full text-[9px] tracking-[0.1em] uppercase font-bold hover:bg-[#D79E54] hover:text-white transition-all duration-500"
          >
            Book a Consultation
          </button>
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 group relative z-[110]"
          >
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: 45, y: 7, width: "28px" } : { rotate: 0, y: 0, width: "28px" }}
              className="h-px bg-white transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "18px" }}
              className="h-px bg-white transition-all"
            />
            <motion.span 
              animate={isMobileMenuOpen ? { rotate: -45, y: -7, width: "28px" } : { rotate: 0, y: 0, width: "28px" }}
              className="h-px bg-white transition-all"
            />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-[#1A1A1A] flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              {[
                { label: "Home", action: () => { setStage("splash"); setIsMobileMenuOpen(false); window.scrollTo({ top: 0, behavior: "smooth" }); } },
                { label: "About", action: () => { setStage("guide"); setIsMobileMenuOpen(false); } },
                { label: "Therapy Services", action: () => { setStage("mental-health" as any); setIsMobileMenuOpen(false); } },
                { label: "Service", action: () => { setStage("service"); setIsMobileMenuOpen(false); } }
              ].map((item) => (
                <button 
                  key={item.label}
                  onClick={item.action}
                  className="text-xl tracking-[0.2em] uppercase font-bold text-white hover:text-[#D79E54] transition-colors"
                >
                  {item.label}
                </button>
              ))}
              
              <div className="flex flex-col gap-4 w-full mt-8">
                <button 
                  onClick={() => {
                    window.open('https://westoaktherapy.sessionshealth.com', '_blank');
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 border border-white/20 text-white rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
                >
                  Client Portal
                </button>
                <button 
                  onClick={() => {
                    window.location.href = "mailto:jen@westoaktherapy.com?subject=Consultation%20Request";
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full py-4 bg-white text-[#1A1A1A] rounded-full text-[10px] tracking-[0.2em] uppercase font-bold"
                >
                  Book a Consultation
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Minimal ambient light - Scandinavian soft focus */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <motion.div 
           className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#E5E0DA]/30 blur-[150px] rounded-full"
           animate={{ scale: [1, 1.05, 1], opacity: [0.3, 0.4, 0.3] }}
           transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
         />
      </div>

      {/* Narrative Progress Marker */}
      {stage !== "splash" && stage !== "service" && (
        <div className="fixed top-24 left-8 md:top-32 md:left-12 flex flex-col gap-6 z-50">
          {["mirror", "insight", "guide", "service"].map((s, i) => {
            const index = ["mirror", "insight", "guide", "service"].indexOf(s);
            const currentIndex = ["mirror", "insight", "guide", "service"].indexOf(stage);
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
                  {s === "mirror" ? "Reflection" : s === "service" ? "Service" : s === "guide" ? "Therapist" : s}
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
            <section className="relative min-h-screen flex flex-col justify-end px-6 md:px-24 pb-12 md:pb-32 overflow-hidden">
              {/* Cinematic Background Image */}
              <div className="absolute inset-0 z-0">
                <img 
                  src={treeImage} 
                  alt="Solitary tree in misty field at sunrise" 
                  className="w-full h-full object-cover brightness-90 contrast-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              </div>

              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-end"
              >
                <div className="flex flex-col items-start pt-24 md:pt-0 lg:col-span-7 xl:col-span-8">
                  <div className="flex flex-wrap gap-2 md:gap-3 mb-6 md:mb-8">
                    {["Construct Meaning", "Map Connection", "Architect Peace"].map((tag) => (
                      <span key={tag} className="px-3 md:px-4 py-1.5 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-[8px] md:text-[9px] tracking-[0.2em] uppercase font-bold text-white/90">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h1 className="font-syne font-bold text-5xl md:text-7xl lg:text-7xl xl:text-8xl 2xl:text-9xl leading-[1.1] md:leading-[0.95] tracking-tighter mb-0 text-white">
                    I understand <br className="hidden sm:block" />
                    <span className="italic font-serif font-light text-[#D79E54] tracking-normal">hurt,</span> and I <br className="hidden sm:block" />
                    understand <span className="italic font-serif font-light text-[#D79E54] tracking-normal">healing.</span>
                  </h1>
                </div>

                <div className="flex flex-col items-start lg:col-span-5 xl:col-span-4 lg:pl-8 pb-4 md:pb-0">
                  <div className="flex items-center gap-3 mb-6 md:mb-8 group cursor-pointer">
                    <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D79E54] transition-all duration-500">
                      <div className="w-0 h-0 border-t-[4px] md:border-t-[5px] border-t-transparent border-l-[6px] md:border-l-[8px] border-l-current border-b-[4px] md:border-b-[5px] border-b-transparent translate-x-0.5" />
                    </div>
                    <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-white/80 group-hover:text-white transition-colors">How we work</span>
                  </div>
                  
                  <p className="text-base md:text-xl font-light leading-relaxed text-white/70 mb-8 md:mb-10 max-w-md">
                    For motivated individuals and couples who want a strategic partner, not just another therapist. We map the hidden pathways of connection to create lasting structural change.
                  </p>
                  
                  <button 
                    onClick={() => {
                      const el = document.getElementById('why-here');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="w-full md:w-auto px-10 md:px-12 py-4 md:py-5 bg-white text-[#1A1A1A] rounded-full text-[10px] md:text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-[#D79E54] hover:text-white transition-all duration-700 ease-in-out shadow-2xl"
                  >
                    Start Your Reflection
                  </button>
                </div>
              </motion.div>
            </section>

            {/* About Section */}
            <section id="about-jen" className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 py-20 md:py-32 bg-[#FAF9F6]">
              <div className="container mx-auto max-w-6xl">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-24 items-center">
                  <div className="relative order-2 md:order-1">
                    <div className="aspect-[4/5] md:aspect-[1.1] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-sm">
                      <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  
                  <div className="space-y-6 md:space-y-10 text-left order-1 md:order-2">
                    <h2 className="font-syne font-bold text-4xl md:text-7xl tracking-tight text-[#2D2926] leading-[1.1]">
                      Rooted in <br />
                      <span className="italic font-serif font-light text-[#8C3B24]">Excellence.</span>
                    </h2>
                    
                    <div className="space-y-4 md:space-y-6">
                      <p className="text-base md:text-xl text-[#2D2926]/60 font-light leading-relaxed max-w-lg">
                        I am Jennifer Weinmann. My practice is built on the intersection of deep clinical expertise and a modern, architectural approach to human connection.
                      </p>
                      <p className="text-base md:text-xl text-[#2D2926]/60 font-light leading-relaxed max-w-lg">
                        We don't just talk about problems; we map the structural patterns that define your life, reinforcing what works and redesigning what doesn't.
                      </p>
                    </div>

                    <div className="pt-2 md:pt-4">
                      <button 
                        onClick={() => {
                          const el = document.getElementById('why-here');
                          el?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="flex items-center gap-4 text-[#8C3B24]/60 font-bold tracking-[0.2em] uppercase text-[10px] md:text-[11px] group transition-all duration-300"
                      >
                        Begin Your Mapping <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-500 opacity-40 group-hover:opacity-100" />
                      </button>
                    </div>
                  </div>
                </div>

                <div className="mt-16 md:mt-32 bg-[#22333B] rounded-[2rem] md:rounded-[3rem] p-8 md:p-24 text-white relative overflow-hidden">
                  <div className="relative z-10 max-w-3xl">
                    <h3 className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-[#D79E54] mb-6 md:mb-8">A Note About Fit</h3>
                    <p className="text-xl md:text-4xl font-light leading-tight mb-8 md:mb-12">
                      Clients who benefit most are ready for <span className="italic font-serif text-[#D79E54]">honest, sustained work</span> and want a therapist who combines clinical rigor with genuine empathy.
                    </p>
                    <div className="flex flex-wrap gap-2 md:gap-4">
                      {["Clinical Rigor", "Genuine Empathy", "Sustained Change"].map((tag) => (
                        <span key={tag} className="px-3 py-1.5 md:px-4 md:py-2 bg-white/10 rounded-full text-[7px] md:text-[10px] tracking-widest uppercase border border-white/10 whitespace-nowrap">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  {/* Subtle background texture for the dark card */}
                  <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
                </div>
              </div>
            </section>

            {/* Why are you here Section */}
            <section id="why-here" className="min-h-screen flex flex-col items-center justify-center px-4 md:px-8 py-20 md:py-32 bg-[#FDFCFB]">
              <div className="container mx-auto max-w-4xl text-center">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1 }}
                  className="mb-12 md:mb-16 max-w-2xl mx-auto"
                >
                  <span className="text-[10px] tracking-[0.5em] uppercase text-[#8C3B24] font-bold mb-4 md:mb-6 block text-center">The Orientation</span>
                  <h2 className="font-syne font-bold text-4xl md:text-7xl mb-6 md:mb-8 tracking-tight text-[#2D2926]">
                    Where do we <br /> begin?
                  </h2>
                  <p className="text-base md:text-xl text-[#2D2926]/60 font-light leading-relaxed px-4">
                    Select the path that most closely aligns with your current reality. This choice isn't permanent—it's simply the structural starting point for our reflection. 
                  </p>
                </motion.div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl mx-auto px-4 md:px-0">
                  {[
                    { label: "My relationship is struggling", val: "relationship", color: "bg-[#8C3B24]" },
                    { label: "We keep having the same fight", val: "same_fight", color: "bg-[#D79E54]" },
                    { label: "I'm using alcohol or cannabis too much", val: "substances", color: "bg-[#2D2926]" },
                    { label: "I feel disconnected from my family", val: "disconnected", color: "bg-[#434B3D]" },
                    { label: "Career & performance stress", val: "unknown", color: "bg-[#5E503F]" },
                    { label: "I don't know, but something needs to change", val: "unknown", color: "bg-[#22333B]" }
                  ].map((opt, i) => (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.6 }}
                      onClick={() => handleChoice(opt.val as any)}
                      className={`group relative w-full aspect-square sm:aspect-video overflow-hidden rounded-2xl ${opt.color} transition-all duration-500 hover:scale-[1.05] active:scale-[0.98] text-left px-5 md:px-6 py-6 md:py-8 flex flex-col justify-between shadow-lg shadow-[#2D2926]/5`}
                    >
                      <div className="flex justify-between items-start">
                        <span className={`text-[9px] md:text-[10px] font-mono tracking-widest ${i === 8 ? "text-[#2D2926]/40" : "text-white/40"}`}>CASE-0{i + 1}</span>
                        <ArrowUpRight className={`w-5 h-5 md:w-6 md:h-6 ${i === 8 ? "text-[#2D2926]/40" : "text-white/40"} group-hover:text-white group-hover:rotate-45 transition-all duration-500`} />
                      </div>
                      
                      <span className={`text-lg md:text-2xl font-syne font-bold tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-500 ${i === 8 ? "text-[#2D2926]" : "text-white"}`}>
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

            {/* STAGE 1: THE MIRROR (Reflective Questioning) */}
            {stage === "mirror" && path && (
              <motion.div 
                key="mirror"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0, scale: 1.05, filter: "blur(20px)" }}
                transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
                className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 text-center max-w-4xl mx-auto relative z-10 pt-40 md:pt-48"
              >
                <div className="space-y-6 md:space-y-8 py-8 md:py-12">
                  {content[path].mirror.map((line, i) => (
                    <motion.p
                      key={i}
                      initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      transition={{ delay: i * 0.4, duration: 1, ease: "easeOut" }}
                      className={`text-lg sm:text-xl md:text-3xl leading-[1.3] font-light tracking-tight ${i === content[path].mirror.length - 1 ? "text-[#8C3B24]" : "text-[#2D2926]/60"}`}
                    >
                      {line}
                    </motion.p>
                  ))}
                </div>
                
                <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mt-8 md:mt-12">
                  <motion.button 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: content[path].mirror.length * 0.4 + 0.6 }}
                    onClick={() => setStage("splash")}
                    className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/40 hover:text-[#2D2926] transition-colors duration-500 group order-2 sm:order-1"
                  >
                    <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1 inline-block mr-2" /> Exit Reflection
                  </motion.button>
                  <motion.button 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: content[path].mirror.length * 0.4 + 0.5 }}
                    onClick={() => {
                      setStage("insight");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-[#2D2926] text-[#FDFCFB] rounded-full text-[10px] md:text-[11px] tracking-[0.4em] uppercase hover:bg-[#8C3B24] transition-all duration-700 shadow-xl order-1 sm:order-2"
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
            className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 text-center max-w-4xl mx-auto relative z-10 pt-40 md:pt-48"
          >
            <div className="space-y-6 md:space-y-8 py-8 md:py-12">
              {content[path].insight.map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                  animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                  transition={{ delay: i * 0.4, duration: 1, ease: "easeOut" }}
                  className={`text-lg sm:text-xl md:text-3xl leading-[1.3] font-light tracking-tight ${i === content[path].insight.length - 1 ? "text-[#8C3B24]" : "text-[#2D2926]/60"}`}
                >
                  {line}
                </motion.p>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mt-8 md:mt-12">
              <motion.button 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: content[path].insight.length * 0.4 + 0.6 }}
                onClick={() => setStage("mirror")}
                className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/40 hover:text-[#2D2926] transition-colors duration-500 group order-2 sm:order-1"
              >
                <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1 inline-block mr-2" /> Back to Mirror
              </motion.button>
              <motion.button 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: content[path].insight.length * 0.4 + 0.5 }}
                onClick={() => {
                  setStage("guide");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-[#2D2926] text-[#FDFCFB] rounded-full text-[10px] md:text-[11px] tracking-[0.4em] uppercase hover:bg-[#8C3B24] transition-all duration-700 shadow-xl order-1 sm:order-2"
              >
                Meet Your Therapist
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
            className="min-h-screen bg-[#F8F7F5] text-[#2D2926] relative z-10 overflow-y-auto pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-8"
          >
            <div className="container mx-auto max-w-6xl">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start mb-16 md:mb-24 text-left">
                <div className="relative group md:sticky md:top-8">
                  <div className="aspect-[4/5] rounded-3xl overflow-hidden brightness-105 contrast-[0.95] shadow-2xl">
                    <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover scale-100" />
                  </div>
                  <div className="absolute -bottom-10 -right-10 w-48 md:w-64 h-48 md:h-64 bg-[#E5E0DA]/40 rounded-full blur-3xl -z-10" />
                  <div className="mt-6 md:mt-8 p-6 md:p-8 bg-white rounded-2xl shadow-sm border border-[#2D2926]/5">
                    <p className="italic text-[#8C3B24] font-serif text-lg md:text-xl leading-relaxed">
                      "Healing accelerates when strategy meets compassion in service of transformation."
                    </p>
                  </div>
                </div>
                
                <div className="space-y-12 md:space-y-16">
                  <div>
                    <h2 className="font-syne font-bold text-4xl sm:text-5xl md:text-7xl mb-6 md:mb-8 tracking-tight text-[#2D2926] leading-tight">
                      The <span className="italic font-serif font-light text-[#8C3B24]">Strategic</span> Healer.
                    </h2>
                    <p className="text-lg md:text-xl text-[#2D2926]/70 font-light leading-relaxed">
                      Licensed marriage and family therapist with fourteen years of clinical experience helping professionals, couples, and families heal from trauma, address co-occurring mental health and substance-use challenges, and rebuild meaningful connection.
                    </p>
                  </div>

                  <div className="grid gap-10 md:gap-12">
                    <div>
                      <h3 className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-[#8C3B24] mb-4 md:mb-6">What to expect</h3>
                      <p className="text-base md:text-lg text-[#2D2926]/60 font-light leading-relaxed">
                        Strategically compassionate care that balances clinical clarity with human warmth. Sessions combine structured assessment, measurable goals, and practical skill‑building with narrative reframing and relational repair.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-2 md:mb-3">Trauma & Co-occurring</h4>
                        <p className="text-xs md:text-sm text-[#2D2926]/50 font-light">Integrated approaches for managing mental health and substance-use together.</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-2 md:mb-3">Family & Couples</h4>
                        <p className="text-xs md:text-sm text-[#2D2926]/50 font-light">Repairing patterns and shifting dynamics using Relational Life Therapy (RLT).</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-2 md:mb-3">Professionals</h4>
                        <p className="text-xs md:text-sm text-[#2D2926]/50 font-light">Depth-oriented therapy that respects high-level career demands.</p>
                      </div>
                      <div className="p-6 bg-white rounded-2xl border border-[#2D2926]/5">
                        <h4 className="font-syne font-bold text-sm mb-2 md:mb-3">Crisis Management</h4>
                        <p className="text-xs md:text-sm text-[#2D2926]/50 font-light">Collaborative, system-level responses when safety concerns arise.</p>
                      </div>
                    </div>
                  </div>

                  <div className="pt-8 border-t border-[#2D2926]/10">
                    <h3 className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase font-bold text-[#2D2926]/40 mb-4 md:mb-6">Professional Background</h3>
                    <p className="text-base md:text-lg text-[#2D2926]/60 font-light leading-relaxed mb-10 md:mb-12">
                      Certified Clinical Trauma Professional with experience as a clinical director, college faculty, and statewide program administrator. Jennifer uses continuous improvement methods to make care more efficient and effective.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8">
                      <button 
                        onClick={() => setStage("insight")}
                        className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/40 hover:text-[#2D2926] transition-colors duration-500 group"
                      >
                        <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1 inline-block mr-2" /> Back
                      </button>
                      <motion.button 
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => {
                          setStage("service");
                          window.scrollTo({ top: 0, behavior: "smooth" });
                        }}
                        className="w-full sm:w-auto px-10 py-4 bg-[#8C3B24] text-white rounded-full text-[10px] md:text-[11px] tracking-[0.4em] uppercase hover:bg-[#2D2926] transition-all duration-500 shadow-xl"
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

        {/* STAGE 5: THE SERVICE (Logistics) */}
        {stage === "service" && (
          <motion.div 
            key="service"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="min-h-screen flex flex-col items-center justify-start pt-24 md:pt-32 pb-12 md:pb-20 px-6 md:px-8 text-center bg-[#FDFCFB] text-[#2D2926] relative z-10 overflow-y-auto"
          >
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1.2 }}
                className="mb-20 md:mb-32"
              >
                <h1 className="font-syne font-bold text-5xl sm:text-6xl md:text-8xl lg:text-[10rem] mb-8 md:mb-12 tracking-tighter leading-[0.85]">
                  Construct <br />
                  <span className="italic font-serif font-light text-[#8C3B24]">Meaning.</span>
                </h1>
                
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 w-full max-w-xl mx-auto justify-center mt-12 md:mt-16">
                  <motion.button 
                    onClick={() => window.location.href = "mailto:jen@westoaktherapy.com?subject=Consultation%20Request"}
                    whileHover={{ scale: 1.03, backgroundColor: "#1A1A1A" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full md:w-auto px-10 md:px-14 py-4 md:py-6 bg-[#2D2926] text-[#FDFCFB] text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase transition-all duration-700 rounded-full shadow-2xl"
                  >
                    Consultation
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.03, backgroundColor: "#F8F7F5" }}
                    whileTap={{ scale: 0.97 }}
                    className="w-full md:w-auto px-10 md:px-14 py-4 md:py-6 border border-[#2D2926]/10 text-[#2D2926] text-[10px] md:text-sm font-semibold tracking-[0.3em] uppercase transition-all duration-700 rounded-full"
                  >
                    Portal
                  </motion.button>
                </div>
              </motion.div>

              {/* Services Offered Section */}
              <div className="mb-24 md:mb-48 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center mb-16 md:mb-24">
                  <div>
                    <h2 className="font-syne font-bold text-4xl md:text-7xl tracking-tight leading-[1.1]">
                      Therapy <br /> <span className="italic font-serif font-light text-[#8C3B24]">Services.</span>
                    </h2>
                  </div>
                  
                  <div className="aspect-[4/5] md:aspect-[3/4] w-full rounded-[2rem] overflow-hidden shadow-sm relative">
                    <img src={portraitAlternate} alt="Therapy Services" className="w-full h-full object-cover object-center" />
                  </div>
                </div>
                
                <div className="space-y-16 md:space-y-24">
                  {/* Category 1: Individual & Relational */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                      <div className="h-px flex-1 bg-[#2D2926]/10" />
                      <h4 className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-[#8C3B24] whitespace-nowrap">Individual & Relational Therapy</h4>
                      <div className="h-px w-8 md:w-12 bg-[#2D2926]/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      <div className="p-6 md:p-8 bg-white border border-[#2D2926]/5 rounded-[1.5rem] md:rounded-[2rem] hover:border-[#D79E54]/20 transition-all duration-500 shadow-sm group/card">
                        <h5 className="font-syne font-bold text-lg md:text-xl mb-3 md:mb-4 group-hover/card:text-[#8C3B24] transition-colors">Individual Therapy</h5>
                        <p className="text-sm md:text-base text-[#2D2926]/60 font-light leading-relaxed">Trauma‑informed, evidence‑based care for anxiety, depression, trauma, and co‑occurring substance‑use concerns. Work focuses on measurable goals and systems‑aware interventions.</p>
                      </div>
                      <div className="p-6 md:p-8 bg-white border border-[#2D2926]/5 rounded-[1.5rem] md:rounded-[2rem] hover:border-[#D79E54]/20 transition-all duration-500 shadow-sm group/card">
                        <h5 className="font-syne font-bold text-lg md:text-xl mb-3 md:mb-4 group-hover/card:text-[#8C3B24] transition-colors">Couples and Family Therapy</h5>
                        <p className="text-sm md:text-base text-[#2D2926]/60 font-light leading-relaxed">Relational Life Therapy (RLT)–informed work to repair patterns, improve communication, and shift generational dynamics with safety‑first pacing.</p>
                      </div>
                    </div>
                  </div>

                  {/* Category 2: Specialized Clinical */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-6 md:mb-8">
                      <div className="h-px flex-1 bg-[#2D2926]/10" />
                      <h4 className="text-[9px] md:text-[10px] tracking-[0.3em] md:tracking-[0.4em] uppercase font-bold text-[#8C3B24] whitespace-nowrap">Specialized Clinical Services</h4>
                      <div className="h-px w-8 md:w-12 bg-[#2D2926]/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                      <div className="p-6 md:p-8 bg-white border border-[#2D2926]/5 rounded-[1.5rem] md:rounded-[2rem] hover:border-[#D79E54]/20 transition-all duration-500 shadow-sm group/card">
                        <h5 className="font-syne font-bold text-base md:text-lg mb-2 md:mb-3 group-hover/card:text-[#8C3B24] transition-colors">Co‑occurring Disorders</h5>
                        <p className="text-xs md:text-sm text-[#2D2926]/60 font-light leading-relaxed">Integrated treatment for managing mental health and substance‑use challenges simultaneously.</p>
                      </div>
                      <div className="p-8 bg-white border border-[#2D2926]/5 rounded-[2rem] hover:border-[#D79E54]/20 transition-all duration-500 shadow-sm group/card">
                        <h5 className="font-syne font-bold text-lg mb-3 group-hover/card:text-[#8C3B24] transition-colors">Trauma-Informed Care</h5>
                        <p className="text-sm text-[#2D2926]/60 font-light leading-relaxed">Safety-first approaches to processing significant life events and building resilience.</p>
                      </div>
                      <div className="p-8 bg-white border border-[#2D2926]/5 rounded-[2rem] hover:border-[#D79E54]/20 transition-all duration-500 shadow-sm group/card">
                        <h5 className="font-syne font-bold text-lg mb-3 group-hover/card:text-[#8C3B24] transition-colors">Crisis Assessment</h5>
                        <p className="text-sm text-[#2D2926]/60 font-light leading-relaxed">Thorough clinical evaluation for stabilization and immediate safety planning.</p>
                      </div>
                    </div>
                  </div>

                  {/* Category 3: Professional */}
                  <div className="group">
                    <div className="flex items-center gap-4 mb-8">
                      <div className="h-px flex-1 bg-[#2D2926]/10" />
                      <h4 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8C3B24] whitespace-nowrap">Professional Services</h4>
                      <div className="h-px w-12 bg-[#2D2926]/10" />
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="p-8 bg-white border border-[#2D2926]/5 rounded-[2rem] hover:border-[#D79E54]/20 transition-all duration-500 shadow-sm group/card">
                        <h5 className="font-syne font-bold text-xl mb-4 group-hover/card:text-[#8C3B24] transition-colors">Supervision & Consultation</h5>
                        <p className="text-base text-[#2D2926]/60 font-light leading-relaxed">Clinical supervision for Associate MFTs and consultation for licensed professionals seeking deeper expertise.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="mt-12 md:mt-16 text-center text-[#2D2926]/40 font-light tracking-wide italic text-sm md:text-base">
                  Request an intake call to discuss fit and next steps.
                </p>
              </div>

              {/* Fees Section */}
              <div className="mb-20 md:mb-32 text-left border-t border-[#2D2926]/5 pt-16 md:pt-24">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-24 items-start">
                  <div>
                    <h2 className="font-syne font-bold text-3xl md:text-5xl mb-12 md:mb-16 tracking-tight">Fees</h2>
                    
                    <div className="space-y-12 md:space-y-16">
                      <div>
                        <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8C3B24] mb-6 md:mb-8">Individual Therapy</h3>
          <div className="space-y-4 md:space-y-6">
            {[
              { label: "60 minutes", price: "$200" },
              { label: "90 minutes", price: "$300" },
              { label: "120 minutes", price: "$400" }
            ].map((f, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-[#2D2926]/10 pb-4">
                <span className="text-sm md:text-lg font-light text-[#2D2926]/60">{f.label}</span>
                <span className="font-serif italic text-lg md:text-2xl text-[#8C3B24]">{f.price}</span>
              </div>
            ))}
          </div>
                      </div>

                      <div>
                        <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#8C3B24] mb-6 md:mb-8">Couples Therapy</h3>
          <div className="space-y-4 md:space-y-6">
            {[
              { label: "60 minutes", price: "$250" },
              { label: "90 minutes", price: "$375" },
              { label: "120 minutes", price: "$500" }
            ].map((f, i) => (
              <div key={i} className="flex justify-between items-baseline border-b border-[#2D2926]/10 pb-4">
                <span className="text-sm md:text-lg font-light text-[#2D2926]/60">{f.label}</span>
                <span className="font-serif italic text-lg md:text-2xl text-[#8C3B24]">{f.price}</span>
              </div>
            ))}
          </div>
                      </div>
                    </div>
                  </div>

                  <div className="lg:pt-24">
                    <div className="p-8 md:p-12 bg-[#F8F7F5] rounded-[2rem] border border-[#2D2926]/5 shadow-sm space-y-8 md:space-y-10">
                      <p className="text-lg md:text-xl text-[#2D2926]/70 font-light leading-relaxed">
                        Fees are collected after the conclusion of each session and billed through the practice’s Electronic Health Record (EHR), <span className="font-bold text-[#2D2926]">Sessions Health</span>.
                      </p>
                      
                      <div className="pt-8 md:pt-10 border-t border-[#2D2926]/10">
                        <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#2D2926] mb-4 md:mb-6">Out‑of‑network billing (OON)</h4>
                        <p className="text-sm md:text-base text-[#2D2926]/50 font-light leading-relaxed italic">
                          You can request a superbill to submit to your insurance for possible reimbursement. Your insurance plan determines whether they will reimburse you and at what amount. It may be helpful to check your plan’s OON reimbursement policy before beginning services so you understand any deductible, co‑insurance, or documentation requirements.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modern Architect Style Grid (Logistics) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-12 md:gap-x-16 gap-y-16 md:gap-y-24 text-left border-t border-[#2D2926]/5 pt-16 md:pt-24 mb-20 md:mb-32">
                {infoSections.flatMap(group => group.items)
                  .filter((_, i) => i !== 4 && i !== 6) // Remove ARCH-05 (index 4) and ARCH-07 (index 6)
                  .map((item, i) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 1 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-6 md:mb-8">
                        <span className="font-mono text-[9px] md:text-[10px] tracking-widest text-[#2D2926]/20">ARCH-0{i + 1}</span>
                        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border border-[#2D2926]/10 flex items-center justify-center group-hover:bg-[#8C3B24] group-hover:border-[#8C3B24] group-hover:text-[#FDFCFB] transition-all duration-700">
                          <ArrowUpRight className="w-4 h-4" />
                        </div>
                      </div>
                      <h3 className="font-syne text-xl md:text-2xl font-bold mb-4 md:mb-6 tracking-tight group-hover:text-[#8C3B24] transition-colors duration-500">{item.title}</h3>
                      <p className="text-[#2D2926]/50 leading-relaxed font-light text-base md:text-lg">
                        {item.content}
                      </p>
                    </motion.div>
                  ))}
              </div>

              {/* FAQ Section */}
              <div className="mb-20 md:mb-32 text-left border-t border-[#2D2926]/5 pt-16 md:pt-24">
                <h2 className="font-syne font-bold text-3xl md:text-4xl mb-12 md:mb-16 tracking-tight pb-6 md:pb-8">Practice FAQ</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 md:gap-x-16 gap-y-10 md:gap-y-12">
                  {[
                    { q: "What is your therapeutic approach?", a: "Jennifer Weinmann, LMFT, combines evidence‑based interventions with trauma‑informed, systems‑focused care. Her approach balances measurable treatment planning with relational warmth to help clients heal from trauma and create durable change. For more on my background, see the About section." },
                    { q: "What therapeutic models do you use?", a: "Trauma‑informed, evidence‑based modalities tailored to each client. Relational Life Therapy (RLT) is used for couples and family work. Treatment integrates systems thinking and measurable outcome tracking." },
                    { q: "How long is a session?", a: "Sessions are available in 60, 90, or 120 minute lengths. Frequency and duration are individualized—weekly is common at the start, then adjusted based on progress and life demands." },
                    { q: "Why don’t you take insurance?", a: "To preserve clinical autonomy, protect your privacy, and allow for flexible, optimal care tailored to your needs rather than reimbursable constraints. Documentation for out-of-network reimbursement is provided." },
                    { q: "Is therapy confidential?", a: "Yes. Your information is confidential and protected by law. The only exceptions are situations involving immediate safety concerns or legal requirements, which we review together during intake." },
                    { q: "How do I start?", a: "A brief intake call clarifies needs, availability, and fit. You'll be asked about goals, current concerns, and any immediate safety issues." }
                  ].map((faq, i) => (
                    <div key={i} className="group">
                      <h4 className="font-syne font-bold text-base md:text-lg mb-3 md:mb-4 text-[#2D2926] group-hover:text-[#8C3B24] transition-colors duration-500">{faq.q}</h4>
                      <p className="text-sm md:text-base text-[#2D2926]/60 font-light leading-relaxed">{faq.a}</p>
                    </div>
                  ))}
                </div>
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
                    About Jennifer
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

      {/* STAGE 6: MENTAL HEALTH VALUE */}
      <AnimatePresence>
        {stage === ("mental-health" as any) && (
          <motion.div 
            key="mental-health"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
            className="min-h-screen pt-40 md:pt-48 pb-20 px-8 flex flex-col items-center relative z-10 overflow-y-auto bg-[#FDFCFB]"
          >
            <div className="max-w-5xl w-full">
              <header className="mb-20 md:mb-32 text-left">
                <span className="text-[10px] tracking-[0.5em] uppercase text-[#8C3B24] font-bold mb-6 block">Structural Value</span>
                <h1 className="font-syne font-bold text-5xl md:text-8xl lg:text-9xl tracking-tighter leading-[0.85] mb-12">
                  The <span className="italic font-serif font-light text-[#8C3B24]">Value</span> <br /> of Investment.
                </h1>
                <p className="text-xl md:text-3xl font-light text-[#2D2926]/60 max-w-3xl leading-relaxed">
                  Mental health is not a luxury—it is the internal infrastructure that supports everything else in your life.
                </p>
              </header>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 mb-32">
                {[
                  {
                    title: "Daily Functioning & Productivity",
                    content: "Regular therapy helps reduce symptoms that interfere with work, sleep, and relationships. When symptoms are managed, clients report better focus, fewer sick days, and greater capacity to meet personal and professional responsibilities.",
                    id: "01"
                  },
                  {
                    title: "Prevention & Crisis Mitigation",
                    content: "Early, consistent care reduces the likelihood of problems worsening into emergencies that require urgent care, hospitalization, or legal involvement. Preventing crises typically costs far less—financially and emotionally—than responding to them.",
                    id: "02"
                  },
                  {
                    title: "Efficiency through Consistency",
                    content: "Regular attendance and active engagement often shorten the total course of treatment. Investing in regular sessions and homework reduces the need for repeated or prolonged interventions later.",
                    id: "03"
                  },
                  {
                    title: "Lower Indirect Costs",
                    content: "Therapy can decrease hidden expenses such as lost wages, reduced job performance, relationship breakdowns, and the time and money spent navigating multiple providers or systems.",
                    id: "04"
                  },
                  {
                    title: "Relationship Resilience",
                    content: "Couples and family work improves communication and problem‑solving, which reduces recurring conflicts and the downstream costs of relationship stress (legal fees, separation costs, family disruption).",
                    id: "05"
                  },
                  {
                    title: "Clinical Flexibility",
                    content: "Paying privately preserves clinical autonomy and privacy, allowing care that’s tailored to your needs rather than constrained by third‑party requirements. That flexibility supports more effective, individualized treatment.",
                    id: "06"
                  }
                ].map((item, i) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 1 }}
                    className="group"
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-[#8C3B24]/40 uppercase">Module {item.id}</span>
                      <div className="h-px flex-1 bg-[#2D2926]/5" />
                    </div>
                    <h3 className="font-syne font-bold text-2xl md:text-3xl mb-6 tracking-tight group-hover:text-[#8C3B24] transition-colors duration-500">
                      {item.title}
                    </h3>
                    <p className="text-base md:text-lg text-[#2D2926]/50 font-light leading-relaxed">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="bg-[#2D2926] rounded-[2rem] md:rounded-[4rem] p-12 md:p-24 text-white relative overflow-hidden text-center"
              >
                <div className="relative z-10 max-w-3xl mx-auto">
                  <h3 className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#D79E54] mb-8">Practical ROI</h3>
                  <p className="text-2xl md:text-4xl font-light leading-tight mb-12 italic font-serif">
                    "Think of therapy as targeted, preventive care: the upfront cost of sessions yields savings by reducing emergency care, minimizing lost income, and shortening the time spent struggling with untreated problems."
                  </p>
                  <button 
                    onClick={() => {
                      setStage("service");
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }}
                    className="px-12 py-5 bg-[#D79E54] text-white rounded-full text-[11px] tracking-[0.3em] uppercase font-bold hover:bg-white hover:text-[#2D2926] transition-all duration-700"
                  >
                    Begin Your Investment
                  </button>
                </div>
                <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:32px_32px]" />
              </motion.div>

              {/* Footer */}
              <div className="mt-48 pt-16 border-t border-[#2D2926]/5 flex flex-col md:flex-row justify-between items-center gap-12 text-[#2D2926]/30 text-[10px] tracking-[0.4em] uppercase font-bold text-center md:text-left w-full">
                <div>© 2026 Jennifer Weinmann / West Oak</div>
                <div className="flex gap-12">
                  <span className="cursor-pointer hover:text-[#8C3B24] transition-colors duration-500">Security</span>
                  <span className="cursor-pointer hover:text-[#8C3B24] transition-colors duration-500">Confidentiality</span>
                </div>
                <div className="flex gap-12">
                  <button onClick={() => { setStage("guide"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-[#8C3B24] transition-colors duration-500">About Jennifer</button>
                  <button onClick={() => { setStage("splash"); window.scrollTo({ top: 0, behavior: "smooth" }); }} className="hover:text-[#8C3B24] transition-colors duration-500">Return to Top</button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
