import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
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
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const overlay = (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: "100%" }}
          transition={{ type: "spring", damping: 25, stiffness: 200 }}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 200,
            background: "#1A1A1A",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "2rem",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1.5rem", width: "100%", maxWidth: "24rem" }}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                style={{
                  fontSize: "1.25rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  color: "#FFFFFF",
                  textDecoration: "none",
                  fontFamily: "Syne, sans-serif",
                }}
              >
                {link.label}
              </a>
            ))}

            <div style={{ display: "flex", flexDirection: "column", gap: "1rem", width: "100%", marginTop: "2rem" }}>
              <a
                href="https://westoaktherapy.sessionshealth.com"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  border: "1px solid rgba(255,255,255,0.2)",
                  color: "#FFFFFF",
                  borderRadius: "9999px",
                  fontSize: "0.625rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                Client Portal
              </a>
              <a
                href="https://westoaktherapy.sessionshealth.com/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                style={{
                  width: "100%",
                  padding: "1rem",
                  background: "#FFFFFF",
                  color: "#1A1A1A",
                  borderRadius: "9999px",
                  fontSize: "0.625rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  fontWeight: "700",
                  textAlign: "center",
                  textDecoration: "none",
                  display: "block",
                }}
              >
                Book a Consultation
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );

  return (
    <>
      {/* Hamburger button stays inside the nav */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden w-10 h-10 flex flex-col items-end justify-center gap-1.5 group relative"
        style={{ zIndex: 210 }}
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

      {/* Overlay portalled to document.body — escapes the nav's transform stacking context */}
      {mounted && createPortal(overlay, document.body)}
    </>
  );
}
