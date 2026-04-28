import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Therapy Services", href: "/value-of-therapy" },
  { label: "Services & Fees", href: "/services" },
  { label: "Writing", href: "/writing" },
];

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 group relative z-[110]"
        aria-label="Toggle menu"
      >
        <motion.span
          animate={isOpen ? { rotate: 45, y: 7, width: "28px" } : { rotate: 0, y: 0, width: "28px" }}
          className="h-px bg-white block"
        />
        <motion.span
          animate={isOpen ? { opacity: 0, x: 20 } : { opacity: 1, x: 0, width: "18px" }}
          className="h-px bg-white block"
        />
        <motion.span
          animate={isOpen ? { rotate: -45, y: -7, width: "28px" } : { rotate: 0, y: 0, width: "28px" }}
          className="h-px bg-white block"
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[105] bg-[#1A1A1A] flex flex-col items-center justify-center p-8 md:hidden"
          >
            <div className="flex flex-col items-center gap-6 w-full max-w-sm">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-xl tracking-[0.2em] uppercase font-bold text-white hover:text-[#D79E54] transition-colors"
                >
                  {link.label}
                </a>
              ))}

              <div className="flex flex-col gap-4 w-full mt-8">
                <a
                  href="https://westoaktherapy.sessionshealth.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 border border-white/20 text-white rounded-full text-[10px] tracking-[0.2em] uppercase font-bold text-center"
                >
                  Client Portal
                </a>
                <a
                  href="https://westoaktherapy.sessionshealth.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setIsOpen(false)}
                  className="w-full py-4 bg-white text-[#1A1A1A] rounded-full text-[10px] tracking-[0.2em] uppercase font-bold text-center"
                >
                  Book a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
