import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, Menu } from "lucide-react";
import portrait from "@/assets/jennifer-portrait.png";
import oak from "@/assets/moody-oak.png";
import abstract from "@/assets/abstract-gold.png";
import nature from "@/assets/pnw-nature.png";

export default function NarrativeSanctuary() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [1, 1.1]);

  return (
    <div ref={containerRef} className="bg-brand-coffee min-h-screen font-source text-brand-vermilion selection:bg-brand-gold selection:text-brand-coffee">
      {/* Minimal Header */}
      <header className="fixed top-0 left-0 w-full z-50 py-8 px-8 md:px-12 flex justify-between items-center mix-blend-difference">
        <div className="font-playfair font-bold text-2xl tracking-widest text-brand-vermilion">WEST OAK</div>
        <button className="text-brand-vermilion hover:text-brand-gold transition-colors">
          <Menu className="w-8 h-8" />
        </button>
      </header>

      {/* Immersive Hero */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <motion.div 
          style={{ scale, opacity }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img src={oak} alt="Moody Oak" className="w-full h-full object-cover" />
        </motion.div>

        <div className="relative z-20 text-center max-w-4xl px-6 space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-playfair text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-brand-vermilion"
          >
            You built the life.
            <br />
            <span className="text-white italic">Now you're wondering why it feels empty.</span>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2 text-brand-vermilion/60 flex flex-col items-center gap-2"
        >
          <span className="text-sm tracking-widest uppercase font-libre">The story continues</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Story Section 1: The Space Between */}
      <section className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-brand-coffee relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="space-y-12 relative z-10">
            <span className="text-brand-gold font-playfair italic text-3xl">01. The Space Between</span>
            <h2 className="font-playfair text-5xl md:text-6xl text-white leading-tight">
              It used to feel like connection.
            </h2>
            <div className="font-source text-xl md:text-2xl text-brand-vermilion/80 space-y-8 leading-relaxed font-light">
              <p>
                You love them. That's not the problem. The problem is the space between you.
              </p>
              <p>
                Now it feels like distance. Maybe tension. Maybe nothing at all. You've tried talking. You've tried not talking. You've tried date nights and vacations and putting the phones away.
              </p>
              <p className="text-white font-normal border-l-2 border-brand-gold pl-6">
                But the space is still there. And you can't figure out what's living in it.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] overflow-hidden rounded-sm opacity-80 mix-blend-soft-light">
               <div className="w-full h-full bg-gradient-to-b from-brand-teal/20 to-black/60 absolute z-10" />
               <img src={nature} alt="Abstract Roots" className="w-full h-full object-cover grayscale contrast-125" />
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 2: The Pattern */}
      <section className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-brand-vermilion text-brand-coffee relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
           <div className="order-2 md:order-1 relative">
             <img src={abstract} alt="Transformation" className="w-full max-w-lg mx-auto mix-blend-multiply opacity-80" />
           </div>
           <div className="order-1 md:order-2 space-y-12">
            <span className="text-brand-teal font-playfair italic text-3xl">02. The Pattern</span>
            <h2 className="font-playfair text-5xl md:text-6xl text-brand-coffee leading-tight">
              You Can't See It From Inside
            </h2>
            <div className="font-source text-xl md:text-2xl text-brand-coffee/80 space-y-8 leading-relaxed font-light">
              <p>
                You see your partner's behavior. They see yours. Neither of you sees the dance.
              </p>
              <p>
                The way your withdrawal triggers their pursuit. The way their criticism triggers your shutdown. The way you both keep doing the exact thing that makes the other person do the exact thing you wish they'd stop doing.
              </p>
              <p className="font-normal text-brand-teal">
                It's not about who's right. It's about a pattern that has you both.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 3: The Guide */}
      <section className="py-32 px-6 md:px-12 bg-white text-brand-coffee">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24">
            <span className="text-brand-gold font-playfair italic text-3xl">03. The Guide</span>
            <h2 className="font-playfair text-5xl mt-6 text-brand-teal">Someone Who Sees It All</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="font-source text-2xl text-brand-coffee/80 leading-relaxed font-light space-y-8">
              <p>
                What if you had someone who could see the whole thing? Not your side. Not their side. The actual pattern between you.
              </p>
              <p>
                Someone who could advocate for what the relationship needs—while making sure neither of you gets lost in the process.
              </p>
              <p className="font-medium text-brand-teal">
                Someone who treats the space between you as something real. Something worth building. Something that can actually change.
              </p>
            </div>
            <div className="bg-brand-coffee/5 p-12 rounded-lg border-l-4 border-brand-teal">
              <h3 className="font-playfair text-3xl text-brand-coffee mb-6">The Relationship Architect</h3>
              <p className="font-source text-lg text-brand-coffee/70 leading-relaxed mb-8">
                I don't take sides. I take the side of the relationship itself. That means I'll advocate for what the connection needs, even when it's uncomfortable, while never losing sight of what each of you needs to thrive.
              </p>
              <div className="flex items-center gap-4">
                 <img src={portrait} alt="Jennifer" className="w-16 h-16 rounded-full object-cover grayscale" />
                 <div>
                   <div className="font-bold text-brand-coffee">Jennifer Weinmann, LMFT</div>
                   <div className="text-brand-teal text-sm">Clinical Supervisor & Therapist</div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-32 px-6 md:px-12 bg-brand-coffee text-center border-t border-brand-vermilion/10">
        <div className="container mx-auto max-w-4xl space-y-16">
          <blockquote className="font-playfair italic text-3xl md:text-5xl leading-tight text-white/90">
            "She saw the pattern we couldn't see because we were both inside it."
          </blockquote>
          <blockquote className="font-playfair italic text-3xl md:text-5xl leading-tight text-brand-gold/80">
            "She didn't just listen—she helped us rebuild the entire foundation."
          </blockquote>
        </div>
      </section>

      {/* Invitation */}
      <section className="py-40 px-6 md:px-12 bg-brand-vermilion text-center">
        <div className="container mx-auto max-w-3xl space-y-12">
          <h2 className="font-playfair text-6xl md:text-7xl text-brand-coffee">Your Chapter Can Change.</h2>
          <p className="font-source text-2xl text-brand-coffee/70">The story isn't over. Let's write something different together.</p>
          <button className="text-xl font-bold uppercase tracking-widest border-b-2 border-brand-coffee pb-1 hover:text-brand-teal hover:border-brand-teal transition-all">
            Start the Conversation
          </button>
        </div>
      </section>
    </div>
  );
}
