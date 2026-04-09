import { ShieldCheck, Wrench, Sparkle, PintGlassIcon } from "@phosphor-icons/react/dist/ssr"



const services = [
  {
    title: "Precision Lens Fitting",
    description: "State-of-the-art centering and fitting techniques to ensure your vision is crystal clear and comfortable.",
    icon: ShieldCheck,
  },
  {
    title: "Expert Frame Styling",
    description: "Personalized consultation to find the perfect frames that match your face shape, style, and personality.",
    icon: PintGlassIcon,
  },
  {
    title: "Advanced Lens Coatings",
    description: "Enhance your visual experience with premium blue-light, anti-glare, and scratch-resistant protection.",
    icon: Sparkle,
  },
  {
    title: "Maintenance & Repair",
    description: "Professional adjustments and expert repair services to extend the life and comfort of your eyewear.",
    icon: Wrench,
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-50/50 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-50/50 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        <div className="max-w-3xl mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-50 text-indigo-700 text-xs font-black tracking-[0.2em] uppercase mb-6 border border-indigo-100">
            <span className="w-2 h-2 rounded-full bg-indigo-600 animate-pulse" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-slate-900 mb-8 tracking-tight">
            Premium Eyewear <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-600">Solutions</span>
          </h2>
          <p className="text-xl text-slate-600 leading-relaxed font-medium">
            At Best Optical, we combine technical precision with aesthetic excellence to provide you with the finest eyewear experience tailored to your lifestyle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, idx) => (
            <div 
                key={idx} 
                className="group p-10 rounded-[2.5rem] border border-slate-100 bg-white hover:bg-indigo-950 transition-all duration-700 hover:-translate-y-3 hover:shadow-[0_40px_80px_-15px_rgba(49,46,129,0.15)] relative overflow-hidden"
            >
              <div className="relative z-10">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 flex items-center justify-center mb-10 group-hover:bg-white/10 group-hover:scale-110 transition-all duration-500">
                  <service.icon className="w-8 h-8 text-indigo-600 group-hover:text-white" weight="bold" />
                </div>
                <h3 className="text-2xl font-black text-slate-900 mb-6 group-hover:text-white transition-colors duration-500 tracking-tight">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-indigo-100/80 transition-colors duration-500 font-medium">
                  {service.description}
                </p>
                
                <div className="mt-10 pt-8 border-t border-slate-50 group-hover:border-white/10 transition-colors duration-500">
                  <span className="text-sm font-black uppercase tracking-widest text-indigo-600 group-hover:text-indigo-300 flex items-center gap-2 group/btn">
                    Details
                    <div className="w-0 group-hover:w-8 h-[2px] bg-indigo-300 transition-all duration-500" />
                  </span>
                </div>
              </div>
              
              {/* Subtle accent for hover state */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-600/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-400/20 transition-all duration-700" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
