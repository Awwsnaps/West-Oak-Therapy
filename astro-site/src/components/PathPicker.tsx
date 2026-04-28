import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const options = [
  { label: "My relationship is struggling", val: "relationship", color: "bg-[#8C3B24]" },
  { label: "We keep having the same fight", val: "same_fight", color: "bg-[#D79E54]" },
  { label: "I'm using alcohol or cannabis too much", val: "substances", color: "bg-[#2D2926]" },
  { label: "I feel disconnected from my family", val: "disconnected", color: "bg-[#434B3D]" },
  { label: "Career & performance stress", val: "unknown", color: "bg-[#5E503F]" },
  { label: "I don't know, but something needs to change", val: "unknown2", color: "bg-[#22333B]" },
];

export default function PathPicker() {
  const handleChoice = (val: string) => {
    const path = val === "unknown2" ? "unknown" : val;
    window.location.href = `/reflection?path=${path}`;
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full max-w-6xl mx-auto px-4 md:px-0">
      {options.map((opt, i) => (
        <motion.button
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.1, duration: 0.6 }}
          onClick={() => handleChoice(opt.val)}
          className={`group relative w-full aspect-square sm:aspect-video overflow-hidden rounded-2xl ${opt.color} transition-all duration-500 hover:scale-[1.05] active:scale-[0.98] text-left px-5 md:px-6 py-6 md:py-8 flex flex-col justify-between shadow-lg shadow-[#2D2926]/5`}
        >
          <div className="flex justify-between items-start">
            <span className="text-[9px] md:text-[10px] font-mono tracking-widest text-white/40">CASE-0{i + 1}</span>
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6 text-white/40 group-hover:text-white group-hover:rotate-45 transition-all duration-500" />
          </div>
          <span className="text-lg md:text-2xl font-syne font-bold tracking-tight leading-tight group-hover:translate-x-1 transition-transform duration-500 text-white">
            {opt.label}
          </span>
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px]" />
        </motion.button>
      ))}
    </div>
  );
}
