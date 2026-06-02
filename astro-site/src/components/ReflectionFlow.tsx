import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft } from "lucide-react";

type Path = "relationship" | "substances" | "disconnected" | "same_fight" | "unknown";

const content: Record<Path, { mirror: string[]; insight: string[] }> = {
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
      "Until you answer those, you'll fight forever.",
    ],
  },
  same_fight: {
    mirror: [
      "It's not really about the dishes.",
      "Or the money. Or who said what last Tuesday.",
      "You know that. But you keep having the fight anyway.",
      "Because something underneath keeps getting triggered.",
      "They say something. You react. You say something. They react.",
      "And suddenly you're both standing in the wreckage of another evening wondering how you got here again.",
      "You're not stupid. Neither are they. So why can't you stop?",
    ],
    insight: [
      "Here's what's actually happening—",
      "You're both doing exactly what makes sense given your history.",
      "The problem isn't you. The problem isn't them.",
      "The problem is a pattern that neither of you can see because you're both inside it.",
      "You can't fix a pattern you can't see.",
      "You need someone outside it.",
    ],
  },
  substances: {
    mirror: [
      "You told yourself it's not that bad. Everybody drinks.",
      "It helps you relax. It takes the edge off.",
      "But here's the thing—",
      "You keep having to negotiate with yourself.",
      "'Just two tonight.' 'Only on weekends.'",
      "And the negotiations get harder.",
      "And you know you sound like someone you swore you'd never become.",
    ],
    insight: [
      "Here's what they don't tell you—",
      "You're not weak. You're not defective.",
      "You're someone who found a solution.",
      "The alcohol isn't the problem.",
      "It's the answer to a problem you haven't named yet.",
    ],
  },
  disconnected: {
    mirror: [
      "You're there. But you're not there.",
      "You come home. You eat dinner. You help with homework.",
      "And somehow you feel like a visitor in your own life.",
      "Your kids have stopped asking if you want to play.",
      "Your spouse has stopped asking what you're thinking.",
      "Not because they don't care.",
      "Because they stopped expecting an answer.",
    ],
    insight: [
      "Here's what no one explained—",
      "You learned to perform connection instead of experiencing it.",
      "You learned that love was earned through achievement.",
      "So you achieved. And achieved.",
      "And now you have everything. Except the feeling that any of it matters.",
    ],
  },
  unknown: {
    mirror: [
      "You know something's wrong.",
      "You can't name it. But you feel it.",
      "The success isn't satisfying.",
      "The relationship isn't connecting.",
      "You've tried: Books. Podcasts. Meditation.",
      "And still—something is missing.",
      "Something fundamental.",
    ],
    insight: [
      "Here's the thing about high performers—",
      "You've optimized everything external.",
      "But the internal architecture?",
      "That doesn't respond to the same strategies.",
      "You can't hustle your way to meaning.",
    ],
  },
};

export default function ReflectionFlow() {
  const [path, setPath] = useState<Path | null>(null);
  const [stage, setStage] = useState<"mirror" | "insight">("mirror");

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const p = params.get("path") as Path;
    if (p && content[p]) {
      setPath(p);
    } else {
      setPath("unknown");
    }
  }, []);

  if (!path) return null;

  const lines = content[path][stage];

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={stage}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, filter: "blur(20px)" }}
        transition={{ duration: 1.2 }}
        className="min-h-screen flex flex-col items-center justify-center px-6 md:px-8 text-center max-w-4xl mx-auto relative z-10 pt-40 md:pt-48"
      >
        <div className="space-y-6 md:space-y-8 py-8 md:py-12">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ delay: i * 0.4, duration: 1, ease: "easeOut" }}
              className={`text-lg sm:text-xl md:text-3xl leading-[1.3] font-light tracking-tight ${
                i === lines.length - 1 ? "text-[#8C3B24]" : "text-[#2D2926]/60"
              }`}
            >
              {line}
            </motion.p>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-8 mt-8 md:mt-12">
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: lines.length * 0.4 + 0.6 }}
            onClick={() => {
              if (stage === "mirror") {
                window.location.href = "/";
              } else {
                setStage("mirror");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }
            }}
            className="text-[9px] md:text-[10px] tracking-[0.4em] uppercase text-[#2D2926]/40 hover:text-[#2D2926] transition-colors duration-500 group order-2 sm:order-1"
          >
            <ArrowLeft className="w-3 h-3 transition-transform group-hover:-translate-x-1 inline-block mr-2" />
            {stage === "mirror" ? "Exit Reflection" : "Back to Mirror"}
          </motion.button>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: lines.length * 0.4 + 0.5 }}
            onClick={() => {
              if (stage === "mirror") {
                setStage("insight");
                window.scrollTo({ top: 0, behavior: "smooth" });
              } else {
                window.location.href = "/about";
              }
            }}
            className="w-full sm:w-auto px-10 md:px-14 py-4 md:py-5 bg-[#2D2926] text-[#FDFCFB] rounded-full text-[10px] md:text-[11px] tracking-[0.4em] uppercase hover:bg-[#8C3B24] transition-all duration-700 shadow-xl order-1 sm:order-2"
          >
            {stage === "mirror" ? "Continue to Insight" : "Meet Your Therapist"}
          </motion.button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
