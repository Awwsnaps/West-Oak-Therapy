import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Sparkles, BookOpen, Shield } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50 font-sans p-8 md:p-16">
      <div className="max-w-6xl mx-auto space-y-16">
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-neutral-900">
            West Oak Therapy
            <span className="block text-xl md:text-2xl font-normal text-neutral-500 mt-2">Creative Direction Presentation</span>
          </h1>
          <p className="text-lg text-neutral-600 max-w-2xl">
            Three distinct creative approaches for Jennifer Weinmann's practice. Select a direction below to view the prototype.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          
          {/* Direction 1 */}
          <Link href="/grounded">
            <Card className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-t-4 border-t-[#D79E54]">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 bg-[#D79E54]/10 rounded-lg flex items-center justify-center text-[#D79E54] group-hover:scale-110 transition-transform">
                  <Shield className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Grounded Sanctuary</h3>
                  <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">The Safe & Traditional</p>
                  <p className="text-neutral-600 leading-relaxed">
                    A warm, professional site establishing immediate trust. "Exceed expectations within expectations."
                  </p>
                </div>
                <div className="flex items-center text-[#D79E54] font-medium group-hover:gap-3 transition-all">
                  View Direction <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Direction 2 */}
          <Link href="/narrative">
            <Card className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-t-4 border-t-[#2F6479]">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 bg-[#2F6479]/10 rounded-lg flex items-center justify-center text-[#2F6479] group-hover:scale-110 transition-transform">
                  <BookOpen className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-neutral-900 mb-2">Narrative Sanctuary</h3>
                  <p className="text-sm font-medium text-neutral-400 uppercase tracking-wider mb-4">The Story-First</p>
                  <p className="text-neutral-600 leading-relaxed">
                    An immersive editorial experience that draws visitors into a story of transformation.
                  </p>
                </div>
                <div className="flex items-center text-[#2F6479] font-medium group-hover:gap-3 transition-all">
                  View Direction <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>

          {/* Direction 3 */}
          <Link href="/mirror">
            <Card className="h-full group hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden border-t-4 border-t-[#1F0E0B] bg-[#0D0D0D] text-white">
              <CardContent className="p-8 space-y-6">
                <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">The Mirror</h3>
                  <p className="text-sm font-medium text-white/50 uppercase tracking-wider mb-4">The Experimental</p>
                  <p className="text-white/70 leading-relaxed">
                    An interactive, confrontational experience that reflects the visitor's reality back to them.
                  </p>
                </div>
                <div className="flex items-center text-white font-medium group-hover:gap-3 transition-all">
                  View Direction <ArrowRight className="w-4 h-4 ml-2" />
                </div>
              </CardContent>
            </Card>
          </Link>
        </div>

        <div className="text-center text-sm text-neutral-400">
          Prototype created for client review • February 2026
        </div>
      </div>
    </div>
  );
}
