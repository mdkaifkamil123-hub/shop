import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, WhatsappLogo, ShieldCheck, Sparkle, Trophy } from "@phosphor-icons/react/dist/ssr"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center pt-24 pb-16 overflow-hidden bg-white dark:bg-zinc-950">
      {/* Background Decor - Subtle gradients for depth */}
      <div className="absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 w-[600px] h-[600px] bg-indigo-50/50 dark:bg-indigo-900/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 left-0 translate-y-1/4 -translate-x-1/4 w-[600px] h-[600px] bg-blue-50/50 dark:bg-blue-900/10 rounded-full blur-[120px] -z-10" />
      
      <div className="container mx-auto px-6 max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative z-10 space-y-10">
          <div className="inline-flex items-center gap-3 bg-indigo-50 dark:bg-indigo-900/20 px-4 py-2 rounded-full border border-indigo-100 dark:border-indigo-800 w-fit animate-in fade-in slide-in-from-bottom-4 duration-500">
             <div className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
             <span className="text-xs font-bold text-indigo-700 dark:text-indigo-300 tracking-[0.2em] uppercase">The Best Optical Experience</span>
          </div>
          
          <div className="space-y-6 animate-in fade-in slide-in-from-bottom-8 duration-700 delay-100">
            <h1 className="text-5xl md:text-8xl font-black text-slate-900 dark:text-white leading-[1] tracking-tight">
              See the World in <br /> 
              <span className="text-transparent bg-clip-text bg-gradient-to-br from-indigo-700 via-blue-600 to-indigo-800 dark:from-indigo-400 dark:to-blue-400">Pure Clarity.</span>
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed font-medium">
              Discover a curated collection of world-class frames and precision lenses, hand-picked for style and durability. Experience a legacy of optical excellence.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-5 pt-4 animate-in fade-in slide-in-from-bottom-12 duration-1000 delay-200">
            <Button size="lg" className="h-16 px-10 text-lg bg-indigo-950 hover:bg-indigo-900 text-white transition-all rounded-full shadow-2xl shadow-indigo-900/20 active:scale-95 group font-bold" asChild>
                <Link href="#collection">
                  Explore Collection <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" weight="bold" />
                </Link>
            </Button>
            <Button variant="outline" size="lg" className="h-16 px-10 text-lg border-2 border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-900 rounded-full transition-all active:scale-95 font-bold" asChild>
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo className="mr-2 w-6 h-6 text-emerald-500" weight="fill" />
                    Chat with Us
                </a>
            </Button>
          </div>

          <div className="pt-10 flex flex-wrap items-center gap-x-10 gap-y-6 animate-in fade-in duration-1000 delay-500 border-t border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-50 dark:bg-indigo-900/30 rounded-lg">
                  <ShieldCheck className="w-5 h-5 text-indigo-600 dark:text-indigo-400" weight="bold" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">Certified Frames</span>
            </div>
            <div className="flex items-center gap-3">
                <div className="p-2 bg-amber-50 dark:bg-amber-900/30 rounded-lg">
                  <Trophy className="w-5 h-5 text-amber-600 dark:text-amber-400" weight="bold" />
                </div>
                <span className="text-sm font-bold text-slate-700 dark:text-slate-300">10+ Years Legacy</span>
            </div>
          </div>
        </div>

        <div className="relative flex items-center justify-center animate-in fade-in zoom-in duration-1000 delay-300">
           {/* Featured Image Frame */}
           <div className="relative w-full max-w-[540px] aspect-[4/5] rounded-[3rem] overflow-hidden shadow-[0_35px_60px_-15px_rgba(0,0,0,0.15)] bg-slate-100 dark:bg-zinc-900 border-[12px] border-white dark:border-zinc-800 group">
              <Image
                src="/hero-glasses.png"
                alt="Premium eyewear displayed at Best Optical"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-1000"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
           </div>
           
           {/* Floating elements */}
           <div className="absolute -top-6 -right-6 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-zinc-800 hidden md:flex items-center gap-4 animate-bounce-slow">
              <div className="w-12 h-12 bg-indigo-50 dark:bg-indigo-900/30 rounded-2xl flex items-center justify-center">
                  <span className="text-indigo-600 dark:text-indigo-400 text-xl font-bold">★</span>
              </div>
              <div>
                  <p className="text-[10px] font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em]">Excellence</p>
                  <p className="text-sm font-black dark:text-white">Premium Quality</p>
              </div>
           </div>

           <div className="absolute -bottom-8 -left-8 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md p-6 rounded-3xl shadow-2xl border border-slate-100 dark:border-zinc-800 hidden md:flex items-center gap-4">
              <div className="flex -space-x-4">
                 {[1,2,3].map(i => (
                    <div key={i} className="w-11 h-11 rounded-full border-4 border-white dark:border-zinc-900 bg-slate-200 dark:bg-zinc-800 overflow-hidden shadow-sm">
                       <div className="w-full h-full bg-gradient-to-br from-indigo-200 to-blue-300" />
                    </div>
                 ))}
              </div>
              <div>
                  <p className="text-sm font-black dark:text-white leading-none">5k+ Clients</p>
                  <p className="text-[10px] text-slate-500 uppercase tracking-widest font-black mt-1">Trusted Locally</p>
              </div>
           </div>
        </div>
      </div>
    </section>
  )
}
