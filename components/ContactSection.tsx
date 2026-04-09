"use client"

import { Phone, WhatsappLogo, Envelope, MapPin, Clock } from "@phosphor-icons/react/dist/ssr"

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Details */}
          <div>
            <h2 className="text-4xl font-bold text-slate-900 mb-8 tracking-tight">Visit Best Optical</h2>
            <p className="text-slate-600 mb-12 text-lg">
              We're here to help you see the world more clearly. Drop by our store for a free consultation or contact us via phone or WhatsApp.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <MapPin className="w-6 h-6 text-blue-900" weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Our Location</h4>
                  <p className="text-slate-600">Tamtam stand, Opposite to Kali Mandir, College Road, Sahibganj, Jharkhand</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Phone className="w-6 h-6 text-blue-900" weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Phone</h4>
                  <p className="text-slate-600 hover:text-blue-900 transition-colors">
                    <a href="tel:+918539972725">+91 85399 72725</a>
                  </p>
                  <p className="text-slate-600 hover:text-blue-900 transition-colors">
                    <a href="tel:+917488682381">+91 74886 82381</a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <WhatsappLogo className="w-6 h-6 text-green-600" weight="fill" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">WhatsApp</h4>
                  <p className="text-slate-600 hover:text-green-600 transition-colors cursor-pointer">
                    <a href="https://wa.me/918539972725" target="_blank" rel="noopener noreferrer">
                        Chat with our experts
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm border border-slate-100 flex items-center justify-center shrink-0">
                  <Clock className="w-6 h-6 text-blue-900" weight="bold" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Opening Hours</h4>
                  <p className="text-slate-600">Mon - Sun: 10:00 AM - 08:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          {/* Map Embed */}
          <div className="h-[500px] w-full rounded-3xl overflow-hidden border-8 border-white shadow-2xl relative">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3608.8190191772983!2d87.6333320614947!3d25.24301998020531!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39fa99510ee975a7%3A0x43fb179983607176!2sBest%20Optical!5e0!3m2!1sen!2sin!4v1775737691125!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
