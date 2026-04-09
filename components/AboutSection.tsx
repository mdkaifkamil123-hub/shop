import Link from "next/link"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export function AboutSection() {
  return (
    <section id="about" className="py-32 bg-white overflow-hidden relative">
      {/* Premium background decoration */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-[600px] h-[600px] bg-slate-50 rounded-full blur-[100px] opacity-70 pointer-events-none" />
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-[100px] opacity-70 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col items-center text-center mb-16">
            <h4 className="text-indigo-600 font-black uppercase tracking-[0.3em] text-xs mb-6 bg-indigo-50 px-4 py-2 rounded-full">Our Legacy</h4>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              A Decade of Dedication to <br className="hidden md:block" /> Your Vision.
            </h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-12 space-y-8 text-slate-600 text-lg md:text-xl leading-relaxed text-center font-medium max-w-3xl mx-auto">
              <p>
                For over <span className="text-indigo-900 font-bold underline decoration-indigo-200 decoration-4 underline-offset-8">10 years</span>, Best Optical has been more than just a store; it&apos;s a labor of love. What started as a small dream has grown into a trusted destination for quality eyewear, yet our heart remains exactly where it began.
              </p>
              <p>
                As a <span className="text-slate-900 font-bold">family-owned and operated business</span>, we believe in building relationships, not just processing transactions. When you walk through our doors, you aren&apos;t just a customer—you&apos;re a neighbor.
              </p>
              <p>
                Unlike large chains, we handle everything personally. From hand-selecting our frames to ensuring your lenses are perfectly fitted, every step is overseen with the care and attention to detail that only a family business can provide.
              </p>
            </div>
          </div>
          
          <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { label: "Years of History", value: "10+", color: "bg-indigo-50 text-indigo-700" },
              { label: "Family Owned", value: "100%", color: "bg-blue-50 text-blue-700" },
              { label: "Happy Customers", value: "5k+", color: "bg-emerald-50 text-emerald-700" }
            ].map((stat, i) => (
              <div key={i} className="group p-8 rounded-[2rem] bg-slate-50/50 border border-slate-100 text-center transition-all duration-500 hover:bg-white hover:shadow-2xl hover:shadow-indigo-100 hover:-translate-y-2">
                <div className={cn("w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-transform duration-500 group-hover:scale-110", stat.color)}>
                  <span className="text-2xl font-black">{stat.value}</span>
                </div>
                <p className="text-sm font-black text-slate-500 uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-20 text-center space-y-8">
            <Link href="#contact" className="inline-block">
              <Button size="lg" className="bg-indigo-950 hover:bg-indigo-900 px-12 h-16 rounded-full shadow-2xl shadow-indigo-900/20 text-white font-bold text-lg transition-all hover:scale-105 active:scale-95">
                Visit Our Shop
              </Button>
            </Link>
            <div className="flex flex-col items-center gap-2">
               <p className="text-slate-400 text-sm font-bold uppercase tracking-widest italic">Find us at</p>
               <p className="text-slate-800 font-bold bg-slate-100 px-6 py-3 rounded-2xl">
                Tamtam stand, Opposite to Kali Mandir, Sahibganj
               </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

