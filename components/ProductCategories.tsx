import Image from "next/image"
import { ArrowUpRight } from "@phosphor-icons/react/dist/ssr"

const categories = [
  {
    title: "Men's Collection",
    count: "200+ Models",
    image: "/men-category.png",
    color: "bg-indigo-600",
  },
  {
    title: "Women's Collection",
    count: "350+ Models",
    image: "/women-category.png",
    color: "bg-rose-500",
  },
  {
    title: "Kids' Specialist",
    count: "80+ Models",
    image: "/kids-category.png",
    color: "bg-amber-500",
  },
]

export function ProductCategories() {
  return (
    <section id="collection" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl text-left">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">Our Premium Collections</h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              Explore a curated selection of the world's most iconic eyewear brands. From timeless classics to modern trends, find the perfect pair that reflects your personality.
            </p>
          </div>
          <button className="group text-blue-900 font-semibold flex items-center gap-2 border-b-2 border-blue-900 pb-1 hover:text-blue-700 hover:border-blue-700 transition-all">
            See All Collections <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" weight="bold" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {categories.map((cat, idx) => (
            <div key={idx} className="group relative aspect-[4/5] md:aspect-[3/4] overflow-hidden rounded-[2rem] shadow-xl bg-white">
              <Image
                src={cat.image}
                alt={cat.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <div className={`inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white mb-4 ${cat.color}`}>
                    New Arrival
                  </div>
                  <h3 className="text-3xl font-bold text-white mb-2 leading-tight">{cat.title}</h3>
                  <p className="text-slate-300 mb-6 font-medium tracking-wide">{cat.count}</p>
                  
                  <button className="flex items-center gap-2 bg-white/10 hover:bg-white text-white hover:text-slate-900 backdrop-blur-md px-8 py-3 rounded-2xl border border-white/20 transition-all font-semibold overflow-hidden">
                    <span className="relative z-10 text-sm">Browse Collection</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:rotate-45" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
