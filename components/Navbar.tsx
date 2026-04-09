"use client"

import * as React from "react"
import Link from "next/link"
import { List, X, Phone, WhatsappLogo } from "@phosphor-icons/react/dist/ssr"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"

const navLinks = [
  { name: "Home", href: "#" },
  { name: "Services", href: "#services" },
  { name: "Our Collection", href: "#collection" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-500 ease-in-out",
        isScrolled
          ? "bg-white/70 dark:bg-slate-900/80 backdrop-blur-xl shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] py-2"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="flex items-center justify-between">
          <Link 
            href="/" 
            className="group flex items-center gap-3 transition-transform duration-300 hover:scale-[1.02]"
          >
            <div className="relative">
              <div className="w-10 h-10 bg-indigo-950 dark:bg-white text-white dark:text-indigo-950 rounded-xl flex items-center justify-center text-xs font-bold rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-lg shadow-indigo-900/20">
                BO
              </div>
              <div className="absolute -inset-1 bg-indigo-900/10 dark:bg-white/10 rounded-xl blur-sm -z-10 group-hover:bg-indigo-900/20 dark:group-hover:bg-white/20 transition-all"></div>
            </div>
            <div className="flex flex-col">
              <span className={cn(
                "text-xl font-extrabold tracking-tight leading-none transition-colors duration-300",
                isScrolled ? "text-slate-900 dark:text-white" : "text-indigo-950 dark:text-white"
              )}>
                Best Optical
              </span>
              <span className={cn(
                "text-[10px] uppercase tracking-[0.2em] font-semibold transition-colors duration-300",
                isScrolled ? "text-indigo-600/70" : "text-indigo-600 dark:text-indigo-300/80"
              )}>
                Premium Eyewear
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "px-4 py-2 text-sm font-semibold transition-all duration-300 rounded-full",
                  isScrolled 
                    ? "text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-white/10" 
                    : "text-indigo-950/80 dark:text-white/80 hover:text-indigo-950 dark:hover:text-white hover:bg-white/20"
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
             <Button 
                variant="ghost" 
                size="icon" 
                className="rounded-full w-10 h-10 text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-500/10 hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:text-emerald-700 dark:hover:text-emerald-300 transition-all duration-300 border border-emerald-100 dark:border-emerald-500/20" 
                asChild
             >
                <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                    <WhatsappLogo className="w-5 h-5" weight="bold" />
                </a>
             </Button>
             <Button 
               className="bg-indigo-950 dark:bg-white hover:bg-indigo-900 dark:hover:bg-indigo-50 text-white dark:text-indigo-950 rounded-full px-6 font-semibold shadow-lg shadow-indigo-900/20 dark:shadow-white/10 transition-all duration-300 hover:translate-y-[-1px] active:translate-y-[0px]"
               asChild
             >
               <a href="tel:+1234567890">
                 <Phone className="w-4 h-4 mr-2" weight="fill" />
                 Call Us
               </a>
             </Button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={cn(
              "md:hidden p-2.5 rounded-xl transition-all duration-300",
              isScrolled 
                ? "bg-slate-100 dark:bg-zinc-800 text-slate-900 dark:text-white" 
                : "bg-white/20 dark:bg-white/10 text-indigo-950 dark:text-white backdrop-blur-md"
            )}
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <List className="w-6 h-6" weight="bold" />}
          </button>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-4 right-4 mt-3 bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-100 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-300 p-2 z-[60]">
            <div className="flex flex-col space-y-1 p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="px-4 py-3 text-base font-semibold text-slate-700 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-white hover:bg-indigo-50 dark:hover:bg-white/10 rounded-2xl transition-all"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="grid grid-cols-2 gap-3 pt-4 border-t border-slate-100 dark:border-slate-800 mt-2">
                  <Button variant="outline" className="justify-center gap-2 py-6 rounded-2xl text-emerald-600 dark:text-emerald-400 border-emerald-100 dark:border-emerald-500/20 hover:bg-emerald-50 dark:hover:bg-emerald-500/10 hover:border-emerald-200 dark:hover:border-emerald-500/30 font-bold" asChild>
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <WhatsappLogo className="w-5 h-5" weight="bold" />
                        WhatsApp
                    </a>
                  </Button>
                  <Button className="py-6 rounded-2xl bg-indigo-950 dark:bg-white hover:bg-indigo-900 dark:hover:bg-indigo-50 text-white dark:text-indigo-950 shadow-md shadow-indigo-900/20 dark:shadow-white/10 font-bold" asChild>
                    <a href="tel:+1234567890">
                      <Phone className="w-5 h-5 mr-2" weight="bold" />
                      Call Us
                    </a>
                  </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
