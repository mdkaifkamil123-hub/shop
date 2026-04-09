import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { Services } from "@/components/Services"
import { ProductCategories } from "@/components/ProductCategories"
import { AboutSection } from "@/components/AboutSection"
import { ContactSection } from "@/components/ContactSection"
import { Footer } from "@/components/Footer"

export default function Page() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Best Optical",
    "image": "https://bestoptical.in/hero.png",
    "@id": "https://bestoptical.in",
    "url": "https://bestoptical.in",
    "telephone": "+918539972725",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Tamtam stand, Opposite to Kali Mandir, College Road",
      "addressLocality": "Sahibganj",
      "addressRegion": "JH",
      "postalCode": "816101",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 25.2425,
      "longitude": 87.6403
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday"
      ],
      "opens": "10:00",
      "closes": "20:00"
    },
    "sameAs": [
      "https://facebook.com/bestoptical",
      "https://instagram.com/bestoptical"
    ]
  }

  return (
    <main className="flex min-h-screen flex-col">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <Hero />
      <Services />
      <ProductCategories />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
