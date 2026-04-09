'use client';

import Link from "next/link"
import { FacebookLogo, InstagramLogo, TwitterLogo, WhatsappLogo, Eyeglasses, MapPin, Phone, Envelope } from "@phosphor-icons/react/dist/ssr"

export function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-10">
      <div className="container mx-auto px-6 max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 lg:col-span-1">
            <Link href="/" className="group flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-indigo-600 text-white rounded-xl flex items-center justify-center text-xs font-bold rotate-3 group-hover:rotate-0 transition-all duration-300 shadow-lg shadow-indigo-600/20">
                BO
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-black tracking-tight leading-none text-white">
                  Best Optical
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] font-bold text-indigo-400">
                  Premium Eyewear
                </span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed mb-8 font-medium">
              A decade of excellence in providing premium eyewear solutions and personalized styling in Sahibganj Jharkhand. Your vision, carefully curated.
            </p>
            <div className="flex gap-4">
              <a href="https://facebook.com/bestoptical" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <FacebookLogo className="w-5 h-5" weight="fill" />
              </a>
              <a href="https://instagram.com/bestoptical" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <InstagramLogo className="w-5 h-5" weight="fill" />
              </a>
              <a href="https://twitter.com/bestoptical" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center hover:bg-white/10 hover:text-white transition-all">
                <TwitterLogo className="w-5 h-5" weight="fill" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link href="#services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
              <li><Link href="#collection" className="hover:text-blue-500 transition-colors">Frame Collection</Link></li>
              <li><Link href="#about" className="hover:text-blue-500 transition-colors">About Us</Link></li>
              <li><Link href="#contact" className="hover:text-blue-500 transition-colors">Contact & Location</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Our Services</h4>
            <ul className="space-y-4">
              <li className="hover:text-white transition-colors cursor-default">Precision Lens Fitting</li>
              <li className="hover:text-white transition-colors cursor-default">Expert Frame Styling</li>
              <li className="hover:text-white transition-colors cursor-default">Advanced Lens Coatings</li>
              <li className="hover:text-white transition-colors cursor-default">Maintenance & Repair</li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact Us</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0" weight="bold" />
                <span>Tamtam stand, Opposite to Kali Mandir, College Road, Sahibganj, Jharkhand</span>
              </li>
              <li className="flex flex-col gap-2">
                <div className="flex gap-3 items-center">
                  <Phone className="w-5 h-5 text-blue-500 shrink-0" weight="bold" />
                  <a href="tel:+918539972725" className="hover:text-white transition-colors">+91 85399 72725</a>
                </div>
                <div className="flex gap-3 items-center ml-8">
                  <a href="tel:+917488682381" className="hover:text-white transition-colors">+91 74886 82381</a>
                </div>
              </li>
              <li className="flex gap-3 items-center">
                <Envelope className="w-5 h-5 text-blue-500 shrink-0" weight="bold" />
                <a href="mailto:mdkaifkamil.123@gmail.com" className="hover:text-white transition-colors">mdkaifkamil.123@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 pt-12 border-t border-white/5">
          <div className="lg:col-span-2">
            <h4 className="text-white font-bold mb-4 uppercase tracking-wider text-sm">Join Our Newsletter</h4>
            <p className="text-slate-400 mb-6 text-sm max-w-md">Subscribe to get the latest updates on new collections, eye care tips and exclusive offers.</p>
            <form className="flex gap-2 max-w-md" onSubmit={(e) => e.preventDefault()}>
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-blue-600 transition-all"
                required
              />
              <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-sm font-bold transition-all active:scale-95 whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
          
          <div className="lg:col-span-2 flex flex-col justify-end lg:items-end">
            <p className="text-slate-500 text-sm mb-2 font-medium">Need immediate assistance?</p>
            <a 
              href="https://wa.me/918539972725" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500/10 hover:bg-green-500/20 text-green-500 px-6 py-3 rounded-xl border border-green-500/20 transition-all font-bold w-fit"
            >
              <WhatsappLogo className="w-5 h-5" weight="fill" />
              Chat on WhatsApp
            </a>
          </div>
        </div>

        <div className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Best Optical. All rights reserved.
          </p>
          <div className="flex gap-8 text-sm text-slate-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
          <div className="fixed bottom-8 right-8 z-50">
             <a 
                href="https://wa.me/918539972725" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-16 h-16 bg-green-500 text-white rounded-full flex items-center justify-center shadow-2xl hover:bg-green-600 hover:scale-110 transition-all group"
             >
                <WhatsappLogo className="w-8 h-8" weight="fill" />
                <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-lg text-sm font-bold opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-lg border">
                    Chat with us!
                </span>
             </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
