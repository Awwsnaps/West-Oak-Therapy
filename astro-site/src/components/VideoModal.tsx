import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function VideoModal() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 mb-6 md:mb-8 group cursor-pointer"
        aria-label="Play intro video"
      >
        <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white group-hover:bg-[#D79E54] transition-all duration-500">
          <div className="w-0 h-0 border-t-[4px] md:border-t-[5px] border-t-transparent border-l-[6px] md:border-l-[8px] border-l-current border-b-[4px] md:border-b-[5px] border-b-transparent translate-x-0.5" />
        </div>
        <span className="text-[9px] md:text-[10px] tracking-[0.3em] uppercase font-bold text-white/80 group-hover:text-white transition-colors">
          How we work
        </span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-black/80 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative w-[90vw] max-w-4xl aspect-video"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setIsOpen(false)}
                className="absolute -top-10 right-0 text-white/80 hover:text-white text-sm tracking-[0.2em] uppercase font-bold transition-colors"
              >
                Close
              </button>
              <video
                src="/intro-video.mp4"
                controls
                autoPlay
                className="w-full h-full rounded-2xl shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
