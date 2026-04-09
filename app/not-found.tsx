import Link from "next/link"
import { Button } from "@/components/ui/button"
import { House, MagnifyingGlass } from "@phosphor-icons/react/dist/ssr"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 dark:bg-zinc-950 px-6 py-24 text-center overflow-hidden relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-500/10 rounded-full blur-[120px] -z-10" />
      
      <div className="space-y-8 max-w-2xl animate-in fade-in zoom-in duration-700">
        <div className="relative inline-block">
          <div className="absolute inset-0 bg-indigo-500/20 blur-3xl rounded-full" />
          <div className="relative w-32 h-32 md:w-48 md:h-48 bg-white dark:bg-zinc-900 border border-slate-100 dark:border-zinc-800 rounded-[3rem] shadow-2xl flex items-center justify-center rotate-6 hover:rotate-0 transition-transform duration-500">
            <MagnifyingGlass className="w-16 h-16 md:w-24 md:h-24 text-indigo-600 dark:text-indigo-400" weight="duotone" />
          </div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-9xl font-black text-slate-900 dark:text-white tracking-tighter">
            404
          </h1>
          <h2 className="text-2xl md:text-4xl font-black text-slate-800 dark:text-slate-100 tracking-tight">
            Lost Your Focus?
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-md mx-auto font-medium">
            We couldn't find the page you were looking for. Even the best of us lose sight of where we are sometimes.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 items-center justify-center pt-4">
          <Button size="lg" className="h-14 px-8 bg-indigo-950 dark:bg-white text-white dark:text-indigo-950 hover:bg-indigo-900 dark:hover:bg-indigo-50 rounded-full font-bold shadow-xl shadow-indigo-950/20 dark:shadow-white/10 transition-all active:scale-95 group" asChild>
            <Link href="/">
              <House className="mr-2 w-5 h-5 transition-transform group-hover:-translate-y-0.5" weight="fill" />
              Return Home
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="h-14 px-8 border-2 border-slate-200 dark:border-slate-800 hover:bg-white dark:hover:bg-zinc-900 text-slate-900 dark:text-white rounded-full font-bold transition-all active:scale-95" asChild>
            <Link href="/#contact">
              Contact Support
            </Link>
          </Button>
        </div>
      </div>
      
      {/* Subtle brand text */}
      <div className="absolute bottom-12 left-0 right-0">
        <p className="text-xs font-black uppercase tracking-[0.4em] text-slate-300 dark:text-zinc-800">
          Best Optical • Premium Vision
        </p>
      </div>
    </main>
  )
}
