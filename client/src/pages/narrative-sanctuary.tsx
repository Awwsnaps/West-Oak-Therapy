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
          <span className="text-sm tracking-widest uppercase font-libre">Your story continues</span>
          <ArrowDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </section>

      {/* Story Section 1: The Pattern */}
      <section className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-brand-coffee relative overflow-hidden">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
          <div className="space-y-12 relative z-10">
            <span className="text-brand-gold font-playfair italic text-3xl">01. The Pattern</span>
            <h2 className="font-playfair text-5xl md:text-6xl text-white leading-tight">
              The Weight No One Sees
            </h2>
            <div className="font-source text-xl md:text-2xl text-brand-vermilion/80 space-y-8 leading-relaxed font-light">
              <p>
                By every measure, you're successful. The promotion came. The relationship happened. The family grew. You did everything you were supposed to do.
              </p>
              <p>
                So why do you feel further away from the people you love? Why does the drink at the end of the day feel less like a choice and more like a requirement?
              </p>
              <p className="text-white font-normal border-l-2 border-brand-gold pl-6">
                Why do you keep building walls when all you want is to tear them down?
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

      {/* Story Section 2: The Pivot */}
      <section className="min-h-screen flex items-center py-24 px-6 md:px-12 bg-brand-vermilion text-brand-coffee relative">
        <div className="container mx-auto grid md:grid-cols-2 gap-16 md:gap-32 items-center">
           <div className="order-2 md:order-1 relative">
             <img src={abstract} alt="Transformation" className="w-full max-w-lg mx-auto mix-blend-multiply opacity-80" />
           </div>
           <div className="order-1 md:order-2 space-y-12">
            <span className="text-brand-teal font-playfair italic text-3xl">02. The Pivot</span>
            <h2 className="font-playfair text-5xl md:text-6xl text-brand-coffee leading-tight">
              What If It's Not You?
            </h2>
            <div className="font-source text-xl md:text-2xl text-brand-coffee/80 space-y-8 leading-relaxed font-light">
              <p>
                What if the patterns you can't break aren't character flaws—they're adaptations?
              </p>
              <p>
                What if the distance you feel isn't failure—it's protection?
              </p>
              <p className="font-normal text-brand-teal">
                And what if there's a different way forward?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section 3: The Path */}
      <section className="py-32 px-6 md:px-12 bg-white text-brand-coffee">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-24">
            <span className="text-brand-gold font-playfair italic text-3xl">03. The Path</span>
            <h2 className="font-playfair text-5xl mt-6 text-brand-teal">Your Next Chapter</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="space-y-6">
              <div className="text-6xl font-playfair text-brand-vermilion/50">I</div>
              <h3 className="font-playfair text-3xl text-brand-coffee">Understanding</h3>
              <p className="font-source text-lg text-brand-coffee/70 leading-relaxed">
                Before you can change the pattern, you have to understand the pattern. Where it came from. What it's protecting you from.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-6xl font-playfair text-brand-vermilion/50">II</div>
              <h3 className="font-playfair text-3xl text-brand-coffee">Reconnection</h3>
              <p className="font-source text-lg text-brand-coffee/70 leading-relaxed">
                The walls between you and your partner weren't built overnight. Taking them down is careful work—strategic, intentional, guided.
              </p>
            </div>
            <div className="space-y-6">
              <div className="text-6xl font-playfair text-brand-vermilion/50">III</div>
              <h3 className="font-playfair text-3xl text-brand-coffee">Liberation</h3>
              <p className="font-source text-lg text-brand-coffee/70 leading-relaxed">
                When alcohol or cannabis becomes the answer, the real question is: what are you trying not to feel? Let's find out.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Author Reveal */}
      <section className="py-32 px-6 md:px-12 bg-brand-coffee text-brand-vermilion">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-12 gap-12 items-center">
            <div className="md:col-span-5">
              <div className="relative">
                <div className="absolute inset-0 border border-brand-gold translate-x-4 translate-y-4" />
                <img src={portrait} alt="Jennifer" className="relative z-10 grayscale hover:grayscale-0 transition-all duration-700 w-full" />
              </div>
            </div>
            <div className="md:col-span-7 space-y-8">
              <h2 className="font-playfair text-5xl text-white">Your Guide Through the Terrain</h2>
              <div className="font-source text-xl space-y-6 font-light leading-relaxed text-brand-vermilion/90">
                <p>
                  I'm Jennifer Weinmann—licensed therapist, clinical supervisor, and someone who has walked this path with hundreds of high-performing people who looked like they had it all together.
                </p>
                <p>
                  I bring both the analytical precision you respect and the genuine human care you need. No judgment. No shortcuts. Just real understanding and strategic support.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Voices */}
      <section className="py-32 px-6 md:px-12 bg-brand-coffee text-center border-t border-brand-vermilion/10">
        <div className="container mx-auto max-w-4xl space-y-16">
          <blockquote className="font-playfair italic text-3xl md:text-5xl leading-tight text-white/90">
            "I finally understood why I kept doing the things I hated doing."
          </blockquote>
          <blockquote className="font-playfair italic text-3xl md:text-5xl leading-tight text-brand-gold/80">
            "She saw through the performance to the actual person underneath."
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
