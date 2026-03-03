import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import portrait from "@/assets/jennifer-portrait.png";
import chairs from "@/assets/therapy-chairs.png";
import { Check, ArrowRight, TreePine, Scale, Handshake, MapPin } from "lucide-react";

export default function GroundedSanctuary() {
  return (
    <div className="min-h-screen font-poppins text-brand-coffee bg-brand-vermilion/30">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-brand-sage/20">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-medium text-xl tracking-tight text-brand-teal">
            The Relationship Architect
          </div>
          <div className="hidden md:flex gap-8 text-sm font-medium text-brand-coffee/80">
            <a href="#about" className="hover:text-brand-teal transition-colors">About</a>
            <a href="#approach" className="hover:text-brand-teal transition-colors">Approach</a>
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
                I See the Forest and the Trees
              </h1>
              <p className="text-lg md:text-xl text-brand-coffee/80 max-w-xl leading-relaxed">
                Therapy that holds the whole picture—your individual needs AND what your relationship actually requires to thrive.
              </p>
              <div className="pt-4">
                <Button size="lg" className="bg-brand-gold hover:bg-brand-gold/90 text-brand-coffee font-medium h-14 px-8 rounded-lg shadow-lg shadow-brand-gold/20">
                  Let's Talk About What's Between You
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl shadow-brand-teal/10 aspect-[4/5] md:aspect-square max-w-md mx-auto">
                <img 
                  src={chairs} 
                  alt="Two chairs facing each other in a warm office" 
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

      {/* Differentiator Bar */}
      <div className="bg-white border-y border-brand-sage/20">
        <div className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 text-sm font-medium tracking-wide uppercase text-brand-sage">
            <span className="flex items-center gap-2"><TreePine className="w-5 h-5 text-brand-teal" /> I See the Whole Pattern</span>
            <span className="flex items-center gap-2"><Scale className="w-5 h-5 text-brand-teal" /> Neutral Relationship Advocate</span>
            <span className="flex items-center gap-2"><Handshake className="w-5 h-5 text-brand-teal" /> Thought Partner</span>
            <span className="flex items-center gap-2"><MapPin className="w-5 h-5 text-brand-teal" /> Washington & Telehealth</span>
          </div>
        </div>
      </div>

      {/* My Approach Section */}
      <section id="approach" className="py-24 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center space-y-6">
            <h2 className="text-4xl font-medium text-brand-teal">I Work Differently Than Most Therapists</h2>
            <div className="space-y-6 text-lg text-brand-coffee/80 leading-relaxed text-left md:text-center">
              <p>
                Most therapists see one person at a time—even in couples work. I see three: you, your partner, and the <strong>relationship itself</strong>.
              </p>
              <p>
                I don't take sides between people. But I'm not passive either. I actively advocate for what your relationship needs to be healthy—while making sure neither of you gets lost in the process.
              </p>
              <p>
                Think of me as a thought partner who can see what you can't see when you're standing in the middle of it. I help you understand the <em>pattern</em>, not just assign blame. And then we build something better together.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-brand-vermilion/10">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <h2 className="text-4xl font-medium text-brand-teal">Building What's Between You</h2>
            <p className="text-brand-coffee/80 text-lg leading-relaxed">
              Whether you come alone or together, the goal is the same: authentic connection built on understanding.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "When Work Starts With You",
                subtitle: "Individual Therapy",
                desc: "Sometimes the most important relationship to repair is the one you have with yourself. Individual work helps you understand your patterns—so you can show up differently in every relationship that matters."
              },
              {
                title: "When Work Is Between You",
                subtitle: "Couples Therapy",
                desc: "Your relationship is its own entity—with its own needs, patterns, and potential. I help you both see it clearly, understand what it requires, and build something that actually works for both of you."
              },
              {
                title: "When Something Else Showed Up",
                subtitle: "Recovery Support",
                desc: "Alcohol, cannabis, or compulsive behaviors become part of your relationship system—a third presence neither of you invited. I help you address what's driving the use while repairing the trust that's been eroded."
              }
            ].map((service, i) => (
              <Card key={i} className="border-l-4 border-l-brand-gold border-y-0 border-r-0 rounded-r-lg shadow-lg shadow-black/5 hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                <CardHeader>
                  <div className="text-sm font-medium text-brand-sage uppercase tracking-wider mb-2">{service.subtitle}</div>
                  <CardTitle className="text-xl font-medium text-brand-teal leading-tight">{service.title}</CardTitle>
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
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center gap-16">
            <div className="w-full md:w-1/2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-lg overflow-hidden shadow-xl">
                  <img src={portrait} alt="Jennifer Weinmann" className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block border-l-4 border-brand-teal">
                  <p className="font-handwriting text-brand-teal text-lg">"The Relationship Architect"</p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 space-y-6">
              <h2 className="text-4xl font-medium text-brand-teal">I'm Jennifer Weinmann, LMFT</h2>
              <div className="space-y-4 text-lg text-brand-coffee/80 leading-relaxed">
                <p>
                  I have an unusual ability that makes me very good at this work.
                </p>
                <p>
                  I can hold two things at once that most people can't: I can see exactly what you need as an individual—your wounds, your patterns, your growth edges—while simultaneously seeing what your <strong>relationship</strong> needs as a living system.
                </p>
                <p>
                  I don't take sides. I take the side of the relationship itself.
                </p>
                <p>
                  After fourteen years of working with high-performing individuals and couples, I've learned that most relationship problems aren't about who's right. They're about patterns that neither person can see clearly—because you're both inside them.
                </p>
                <p>
                  I help you step outside those patterns together. Then we rebuild.
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

      {/* Pattern Recognition Section */}
      <section className="py-24 bg-brand-coffee text-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-medium mb-4">Do any of these sound familiar?</h2>
            <p className="text-white/60">Common patterns that bring high-performers to my practice</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
             <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-brand-gold/50 transition-colors">
               <h3 className="text-brand-gold font-medium text-xl mb-4">The Disconnected Achiever</h3>
               <p className="text-white/80 leading-relaxed">"You're not failing your family. You just built a relationship system that doesn't require you to show up emotionally—because somewhere you learned that showing up emotionally wasn't safe."</p>
             </div>
             <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-brand-gold/50 transition-colors">
               <h3 className="text-brand-gold font-medium text-xl mb-4">The Numbing Achiever</h3>
               <p className="text-white/80 leading-relaxed">"The drinking isn't betraying your partner. It's protecting you from something. But it's also become part of your relationship—a third presence neither of you invited."</p>
             </div>
             <div className="bg-white/5 p-8 rounded-lg border border-white/10 hover:border-brand-gold/50 transition-colors">
               <h3 className="text-brand-gold font-medium text-xl mb-4">The Avoidant Achiever</h3>
               <p className="text-white/80 leading-relaxed">"You're not bad at relationships. You're protecting yourself from relationships. The walls make perfect sense. Let's figure out what you're actually running from."</p>
             </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-24 bg-brand-teal text-white text-center">
        <div className="container mx-auto px-6 max-w-4xl">
          <blockquote className="text-3xl md:text-4xl font-medium leading-tight mb-8">
            "She saw the pattern we couldn't see. She didn't just listen—she helped us rebuild the entire foundation."
          </blockquote>
          <cite className="not-italic text-brand-vermilion font-medium tracking-wide block">— Former Client</cite>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 bg-white text-center">
        <div className="container mx-auto px-6 max-w-2xl space-y-8">
          <h2 className="text-4xl font-medium text-brand-coffee">Ready to see the whole picture?</h2>
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
