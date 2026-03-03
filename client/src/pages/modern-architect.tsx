import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Play, Star } from "lucide-react";
import portrait from "@/assets/jennifer-portrait.png";
import office from "@/assets/architect-office.png";
import couple from "@/assets/couple-architecture.png";
import blocks from "@/assets/building-blocks.png";
import chairs from "@/assets/therapy-chairs.png";
import { Link } from "wouter";

export default function ModernArchitect() {
  return (
    <div className="min-h-screen bg-white font-dm text-[#05290D] selection:bg-[#05290D] selection:text-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-sm border-b border-[#05290D]/5">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-syne font-bold text-xl tracking-tight">omega.therapy</div>
          <div className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#philosophy" className="hover:text-opacity-70 transition-opacity">Philosophy</a>
            <a href="#services" className="hover:text-opacity-70 transition-opacity">Services</a>
            <a href="#about" className="hover:text-opacity-70 transition-opacity">About</a>
          </div>
          <Button className="bg-[#05290D] text-white hover:bg-[#05290D]/90 rounded-full px-6">
            Book Consultation
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 container mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="flex -space-x-3">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-neutral-200 overflow-hidden">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`} alt="Client" />
              </div>
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-[#05290D] text-white flex items-center justify-center text-xs font-medium">
              100+
            </div>
          </div>
        </div>
        
        <h1 className="font-syne font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight leading-[0.9] mb-8 max-w-5xl mx-auto">
          Build the relationship <br />
          <span className="italic font-serif font-normal">you envisioned.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-[#05290D]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          A modern approach for high-performers. I help you see the blueprint of your relationship and architect a connection that actually works.
        </p>
        
        <div className="flex gap-4 justify-center">
          <Button className="h-14 px-8 rounded-full bg-[#05290D] text-white hover:bg-[#05290D]/90 text-lg">
            Start Building
          </Button>
          <Button variant="outline" className="h-14 px-8 rounded-full border-[#05290D] text-[#05290D] hover:bg-[#05290D]/5 text-lg">
            Our Philosophy
          </Button>
        </div>
      </section>

      {/* Image Strip */}
      <div className="w-full overflow-hidden py-12">
        <div className="flex gap-4 px-4 min-w-max animate-scroll">
          <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={couple} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Connection" />
          </div>
          <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={office} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Planning" />
          </div>
          <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={blocks} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Building" />
          </div>
          <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden">
            <img src={chairs} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" alt="Therapy" />
          </div>
          <div className="w-[300px] md:w-[400px] aspect-[3/4] rounded-2xl overflow-hidden bg-[#05290D] flex items-center justify-center text-white p-8 text-center">
            <p className="font-syne text-3xl">"The Relationship Architect"</p>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <span className="text-sm font-bold uppercase tracking-widest text-[#05290D]/50 mb-2 block">Our Services</span>
            <h2 className="font-syne text-4xl md:text-5xl font-bold leading-tight">
              Blueprints for every stage of growth.
            </h2>
          </div>
          <p className="max-w-xs text-[#05290D]/70">
            Everything you need to understand your patterns and build a stronger foundation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: "Individual Architecture",
              desc: "When the work starts with you. Understand your own blueprint and how it shapes every connection.",
              icon: "01"
            },
            {
              title: "Couples Design",
              desc: "When the work is between you. Rebuild the foundation and design a relationship that fits you both.",
              icon: "02"
            },
            {
              title: "System Recovery",
              desc: "When something else showed up. Address substances or patterns that have become a third party.",
              icon: "03"
            },
            {
              title: "Pattern Analysis",
              desc: "Identify the recursive loops that keep you stuck in the same fight.",
              icon: "04"
            },
            {
              title: "Strategic Consulting",
              desc: "Focused, solution-oriented sessions for specific relationship challenges.",
              icon: "05"
            },
            {
              title: "Crisis Stabilization",
              desc: "Immediate support when the structure feels like it's failing.",
              icon: "06"
            }
          ].map((s, i) => (
            <div key={i} className="group border-t border-[#05290D]/10 pt-8 hover:border-[#05290D] transition-colors cursor-pointer">
              <div className="flex justify-between items-start mb-4">
                <span className="font-mono text-xs text-[#05290D]/40">{s.icon}</span>
                <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <h3 className="font-syne text-2xl font-bold mb-3">{s.title}</h3>
              <p className="text-[#05290D]/60 leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 bg-[#05290D] text-white">
        <div className="container mx-auto px-6 text-center max-w-4xl">
          <div className="mb-8 flex justify-center">
            <Star className="w-8 h-8 text-yellow-400 fill-current" />
          </div>
          <blockquote className="font-syne text-4xl md:text-6xl font-bold leading-tight mb-12">
            "Jennifer doesn't just listen. She sees the structure underneath the chaos. She helped us rebuild from the ground up."
          </blockquote>
          <div className="flex items-center justify-center gap-4">
            <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix" className="w-12 h-12 rounded-full border-2 border-white/20" alt="Client" />
            <div className="text-left">
              <div className="font-bold">Marcus & Sarah</div>
              <div className="text-white/60 text-sm">Tech Executives</div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Projects (Case Studies) */}
      <section className="py-24 container mx-auto px-6">
        <div className="flex justify-between items-center mb-16">
          <h2 className="font-syne text-4xl md:text-5xl font-bold">Common Patterns</h2>
          <Button variant="ghost" className="hidden md:flex gap-2">View all <ArrowRight className="w-4 h-4" /></Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="group cursor-pointer">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
              <img src={blocks} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="The Disconnected Achiever" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-syne text-2xl font-bold mb-1">The Disconnected Achiever</h3>
                <p className="text-[#05290D]/60">Successful everywhere but home.</p>
              </div>
              <span className="px-3 py-1 rounded-full border border-[#05290D]/10 text-xs font-medium">Profile 01</span>
            </div>
          </div>

          <div className="group cursor-pointer mt-0 md:mt-16">
            <div className="aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-neutral-100">
              <img src={couple} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" alt="The Avoidant Protector" />
            </div>
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-syne text-2xl font-bold mb-1">The Avoidant Protector</h3>
                <p className="text-[#05290D]/60">Keeping distance to keep safe.</p>
              </div>
              <span className="px-3 py-1 rounded-full border border-[#05290D]/10 text-xs font-medium">Profile 02</span>
            </div>
          </div>
        </div>
      </section>

      {/* About/CTA */}
      <section className="py-24 container mx-auto px-6">
        <div className="bg-[#F4F4F0] rounded-[2rem] p-8 md:p-16 flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="relative aspect-square rounded-2xl overflow-hidden max-w-md">
              <img src={portrait} className="w-full h-full object-cover" alt="Jennifer" />
            </div>
          </div>
          <div className="flex-1 space-y-8">
            <h2 className="font-syne text-4xl md:text-5xl font-bold leading-none">
              Meet your <br />
              <span className="text-[#05290D]/50">Architect.</span>
            </h2>
            <div className="space-y-6 text-lg text-[#05290D]/80 leading-relaxed">
              <p>
                I'm Jennifer Weinmann. I don't take sides. I take the side of the relationship itself.
              </p>
              <p>
                Most therapists see the trees. I see the forest. I help you understand the system you've built, so you can decide if you want to renovate it or tear it down and start over.
              </p>
            </div>
            <div className="flex gap-4 pt-4">
              <Button className="h-14 px-8 rounded-full bg-[#05290D] text-white hover:bg-[#05290D]/90 text-lg">
                Book a Session
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-[#05290D]/10 container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="font-syne font-bold text-xl">omega.therapy</div>
          <div className="text-sm text-[#05290D]/50">
            © 2026 West Oak Therapy. The Relationship Architect.
          </div>
          <div className="flex gap-6">
            <a href="#" className="w-10 h-10 rounded-full bg-[#05290D] text-white flex items-center justify-center hover:bg-[#05290D]/80 transition-colors">
              <ArrowUpRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
