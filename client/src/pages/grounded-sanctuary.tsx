import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import portrait from "@/assets/jennifer-portrait.png";
import nature from "@/assets/pnw-nature.png";
import { Check, ArrowRight } from "lucide-react";

export default function GroundedSanctuary() {
  return (
    <div className="min-h-screen font-poppins text-brand-coffee bg-brand-vermilion/30">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-sage/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-medium text-xl tracking-tight text-brand-teal">
            West Oak Therapy
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-brand-coffee/80">
            <a href="#about" className="hover:text-brand-teal transition-colors">About</a>
            <a href="#services" className="hover:text-brand-teal transition-colors">Services</a>
            <a href="#contact" className="hover:text-brand-teal transition-colors">Contact</a>
          </div>
          <Button className="bg-brand-gold hover:bg-brand-gold/90 text-brand-coffee font-medium rounded-lg">
            Book Consultation
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 space-y-6 z-10">
              <h1 className="text-5xl md:text-6xl font-medium leading-[1.1] text-brand-teal tracking-tight">
                Healing That Goes Deeper Than the Surface
              </h1>
              <p className="text-lg md:text-xl text-brand-coffee/80 max-w-xl leading-relaxed">
                For high-achieving individuals and couples in Washington who are ready to break free from old patterns and build something better.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-coffee font-medium h-14 px-8 rounded-lg shadow-lg shadow-brand-gold/20">
                  Schedule a Free Consultation
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-teal/10 aspect-[4/5] md:aspect-square max-w-md mx-auto">
                <img 
                  src={nature} 
                  alt="Peaceful nature scene" 
                  className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute top-10 -right-10 w-64 h-64 bg-brand-teal/10 rounded-full blur-3xl -z-10" />
              <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-gold/20 rounded-full blur-3xl -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <div className="bg-white border-y border-brand-sage/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium tracking-wide uppercase text-brand-sage">
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> 14 Years Experience</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Licensed LMFT</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Telehealth Available</span>
            <span className="flex items-center gap-2"><Check className="w-4 h-4 text-brand-teal" /> Private Pay</span>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <section id="services" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-medium text-brand-teal">The Science and Soul of Transformation</h2>
            <p className="text-brand-coffee/80 text-lg leading-relaxed">
              I help successful people who've achieved everything—except the connection they were working for. Through evidence-based approaches and genuine human care, we'll address what's really driving the patterns you can't seem to break.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Individual Therapy",
                desc: "Address the roots, not just the symptoms. For trauma, anxiety, and the patterns that keep repeating."
              },
              {
                title: "Couples Therapy",
                desc: "Rebuild connection when success at work hasn't translated to success at home."
              },
              {
                title: "Recovery Support",
                desc: "When alcohol or cannabis has become the answer to questions you haven't asked yet."
              }
            ].map((service, i) => (
              <Card key={i} className="border-brand-sage/20 shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-2xl font-medium text-brand-teal mb-2">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-brand-coffee/80 leading-relaxed mb-6">{service.desc}</p>
                  <a href="#" className="inline-flex items-center text-brand-gold font-medium hover:gap-2 transition-all group">
                    Learn more <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-brand-vermilion/20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
                  <p className="font-handwriting text-brand-teal text-lg">"Exceeding expectations within expectations."</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-medium text-brand-teal">I'm Jennifer Weinmann, LMFT</h2>
              <div className="space-y-4 text-lg text-brand-coffee/80 leading-relaxed">
                <p>
                  Fourteen years ago, I started this work because I believe everyone deserves a therapist who brings both clinical excellence and genuine care.
                </p>
                <p>
                  I specialize in helping high-performing individuals and couples who know something needs to change—but haven't found the right support to make it happen.
                </p>
                <p>
                  I don't offer quick fixes. I offer real understanding, strategic insight, and the steady presence you need to transform.
                </p>
              </div>
              <div className="pt-4">
                <Button variant="outline" className="border-brand-teal text-brand-teal hover:bg-brand-teal hover:text-white h-12 px-6 rounded-lg">
                  Read Full Bio
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-brand-teal text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <blockquote className="text-3xl md:text-4xl font-medium leading-tight mb-8">
            "This changed everything. I finally feel like I'm actually present in my own life again."
          </blockquote>
          <cite className="not-italic text-brand-vermilion font-medium tracking-wide block">— Former Client</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-2xl space-y-8">
          <h2 className="text-4xl font-medium text-brand-coffee">Ready to Start?</h2>
          <p className="text-xl text-brand-coffee/70">
            Let's have a conversation about what real healing could look like for you.
          </p>
          <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-coffee font-medium h-14 px-10 text-lg rounded-lg shadow-lg">
            Book Your Free Consultation
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-coffee text-white/60 py-12 border-t border-white/10">
        <div className="container mx-auto px-6 text-center space-y-4">
          <div className="text-white font-medium text-lg">West Oak Therapy & Consultation</div>
          <p>© 2026 Jennifer Weinmann, LMFT. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
