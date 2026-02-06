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
    <div className="min-h-screen bg-[#050505] text-[#F5F5F5] font-dm selection:bg-white/20 selection:text-white overflow-hidden relative">
      
      {/* Header & Nav */}
      <nav className={`fixed top-0 w-full z-[100] px-8 py-6 md:px-12 flex justify-between items-center transition-colors duration-500 border-b ${
        stage === "door" || stage === "guide" || stage === "splash" || stage === "mirror" || stage === "insight"
          ? "bg-white/80 border-[#05290D]/5 text-[#05290D]" 
          : "bg-[#050505]/80 border-white/5 text-white"
      } backdrop-blur-md`}>
        <div className="font-syne font-bold text-lg tracking-tight cursor-pointer" onClick={() => {
          setStage("splash");
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}>
          West Oak Therapy
        </div>
        <button className="w-10 h-10 flex flex-col items-end justify-center gap-1.5 group">
          <span className={`w-8 h-px transition-all ${stage === "door" || stage === "guide" || stage === "splash" || stage === "mirror" || stage === "insight" ? "bg-[#05290D]/60 group-hover:bg-[#05290D]" : "bg-white/60 group-hover:bg-white"}`}></span>
          <span className={`w-5 h-px transition-all group-hover:w-8 ${stage === "door" || stage === "guide" || stage === "splash" || stage === "mirror" || stage === "insight" ? "bg-[#05290D]/60 group-hover:bg-[#05290D]" : "bg-white/60 group-hover:bg-white"}`}></span>
        </button>
      </nav>

      {/* Minimal ambient light - simplified */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <motion.div 
           className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-[#D79E54]/[0.05] blur-[150px] rounded-full"
           animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
           transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
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
                    ? "w-8 bg-[#D79E54]" 
                    : ["mirror", "insight", "guide", "door"].indexOf(s) < ["mirror", "insight", "guide", "door"].indexOf(stage)
                      ? "w-8 bg-[#8C3B24]/40"
                      : "w-2 bg-[#05290D]/10"
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
            className="min-h-screen bg-white text-[#05290D] relative z-10 overflow-x-hidden"
          >
            {/* Hero Section */}
            <section className="h-screen flex flex-col justify-center px-8 md:px-24">
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
                className="max-w-4xl"
              >
                <span className="text-xs tracking-[0.4em] uppercase opacity-60 mb-8 block font-medium">Licensed Marriage & Family Therapy</span>
                <h1 className="font-syne font-bold text-6xl md:text-8xl lg:text-[10rem] leading-[0.85] tracking-tighter mb-12">
                  Building <br />
                  <span className="italic font-serif font-normal text-[#8C3B24]">Resilient</span> <br />
                  Connection.
                </h1>
                <p className="text-xl md:text-2xl font-light max-w-2xl leading-relaxed text-[#05290D]/80 mb-12">
                  A specialized practice for high-performers, couples in conflict, and those seeking to rewrite the architecture of their relationships.
                </p>
                <div className="flex gap-4">
                  <button 
                    onClick={() => {
                      const el = document.getElementById('about-jen');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 border border-[#05290D]/20 rounded-full text-sm tracking-widest uppercase hover:bg-[#05290D] hover:text-white transition-all duration-500"
                  >
                    Explore Practice
                  </button>
                  <button 
                    onClick={() => {
                      const el = document.getElementById('why-here');
                      el?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="px-8 py-4 bg-[#8C3B24] text-white rounded-full text-sm tracking-widest uppercase hover:bg-[#05290D] transition-all duration-500"
                  >
                    Start Reflection
                  </button>
                </div>
              </motion.div>
              
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute bottom-12 left-1/2 -translate-x-1/2 opacity-30 flex flex-col items-center gap-2"
              >
                <span className="text-[10px] tracking-widest uppercase">Scroll</span>
                <div className="w-px h-12 bg-[#05290D]" />
              </motion.div>
            </section>

            {/* About Section */}
            <section id="about-jen" className="min-h-screen flex flex-col items-center justify-center px-8 py-32 bg-[#F5F5F0]">
              <div className="container mx-auto max-w-6xl grid md:grid-cols-2 gap-24 items-center">
                <div className="relative">
                  <div className="aspect-[4/5] rounded-2xl overflow-hidden grayscale contrast-110">
                    <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover" />
                  </div>
                  <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#D79E54]/10 rounded-full blur-3xl -z-10" />
                </div>
                <div>
                  <h2 className="font-syne font-bold text-4xl md:text-6xl mb-8 tracking-tight text-[#05290D]">
                    Meet Jennifer <br /> Weinmann
                  </h2>
                  <div className="space-y-6 text-lg text-[#05290D]/80 font-light leading-relaxed">
                    <p>
                      With over 15 years of experience, I've dedicated my career to helping individuals and couples navigate the complexities of modern intimacy and high-performance stress.
                    </p>
                    <p>
                      My approach is architectural—we look at the foundations of your connection, identify the structural weaknesses in your patterns, and build something designed to last.
                    </p>
                    <button 
                      onClick={() => {
                        const el = document.getElementById('why-here');
                        el?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="mt-8 flex items-center gap-4 text-[#8C3B24] font-medium tracking-widest uppercase text-sm group"
                    >
                      Begin Your Journey <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </div>
              </div>
            </section>

            {/* Why are you here Section */}
            <section id="why-here" className="min-h-screen flex flex-col items-center justify-center px-8 py-32 bg-white">
              <div className="container mx-auto max-w-4xl text-center">
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                  className="font-syne font-medium text-5xl md:text-7xl mb-20 tracking-tight text-[#05290D]"
                >
                  Why are you here?
                </motion.h2>
                
                <div className="flex flex-col gap-px w-full max-w-xl mx-auto border-y border-[#05290D]/10 bg-[#05290D]/5">
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
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1, duration: 0.5 }}
                      onClick={() => handleChoice(opt.val as any)}
                      className="group relative flex items-center justify-between p-6 bg-white hover:bg-[#F5F5F0] transition-colors duration-300 text-left w-full"
                    >
                      <span className="text-lg md:text-xl font-light text-[#05290D]/50 group-hover:text-[#8C3B24] transition-colors tracking-wide">
                        {opt.label}
                      </span>
                      <span className="text-[#05290D]/10 group-hover:text-[#8C3B24] transition-colors duration-300 text-xl font-light">→</span>
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
                  className={`text-2xl md:text-4xl leading-tight font-light tracking-tight ${i === content[path].mirror.length - 1 ? "text-[#D79E54]" : "text-[#05290D]/40"}`}
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
                  className={`text-2xl md:text-4xl font-syne ${i === 0 ? "text-[#8C3B24] mb-12 block text-sm font-sans tracking-[0.2em] uppercase" : "text-[#05290D] leading-tight font-medium"}`}
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

        {/* STAGE 5: THE DOOR (Logistics) */}
        {stage === "door" && (
          <motion.div 
            key="door"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="min-h-screen flex flex-col items-center justify-start pt-32 pb-20 p-8 text-center bg-white text-[#05290D] relative z-10 overflow-y-auto"
          >
            <div className="container mx-auto max-w-6xl">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="mb-24"
              >
                <h1 className="font-syne font-bold text-6xl md:text-8xl lg:text-9xl mb-8 tracking-tighter leading-[0.9]">
                  Let's start <br />
                  <span className="italic font-serif font-normal">building.</span>
                </h1>
                
                <div className="flex flex-col md:flex-row gap-6 w-full max-w-xl mx-auto justify-center mt-12">
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-5 bg-[#05290D] text-white text-lg font-medium tracking-widest uppercase hover:bg-[#8C3B24] transition-colors duration-500 rounded-full shadow-lg"
                  >
                    Book Consultation
                  </motion.button>
                  <motion.button 
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-12 py-5 border border-[#05290D] text-[#05290D] text-lg font-medium tracking-widest uppercase hover:bg-[#05290D]/5 transition-colors duration-500 rounded-full"
                  >
                    View Portal
                  </motion.button>
                </div>
              </motion.div>

              {/* Modern Architect Style Grid */}
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16 text-left border-t border-[#05290D]/10 pt-16">
                {infoSections.flatMap(group => group.items).map((item, i) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="group"
                  >
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-xs text-[#05290D]/40">0{i + 1}</span>
                      <div className="w-8 h-8 rounded-full border border-[#05290D]/10 flex items-center justify-center group-hover:bg-[#05290D] group-hover:text-white transition-all duration-500">
                        <ArrowUpRight className="w-4 h-4" />
                      </div>
                    </div>
                    <h3 className="font-syne text-2xl font-bold mb-4 tracking-tight">{item.title}</h3>
                    <p className="text-[#05290D]/70 leading-relaxed font-light">
                      {item.content}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Final Footer Style Reset */}
              <div className="mt-32 pt-16 border-t border-[#05290D]/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[#05290D]/40 text-xs tracking-widest uppercase font-medium">
                <div>© 2026 West Oak Therapy</div>
                <div className="flex gap-8">
                  <span className="cursor-pointer hover:text-[#05290D] transition-colors">Privacy</span>
                  <span className="cursor-pointer hover:text-[#05290D] transition-colors">Terms</span>
                </div>
                <motion.button 
                  onClick={() => {
                    setStage("splash");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="hover:text-[#05290D] transition-colors"
                >
                  Back to Beginning
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}

      </AnimatePresence>
    </div>
  );
}
