import { Metadata } from "next"
import { Geist, Geist_Mono, Inter } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: {
    default: "Best Optical | Premium Eyewear & Lens Solutions in Sahibganj",
    template: "%s | Best Optical"
  },
  description: "Experience premium eyewear and expert lens fitting at Best Optical, Sahibganj. Over 10 years of excellence in personalized styling and precision vision care.",
  keywords: ["Best Optical", "Optical Shop Sahibganj", "Spectacles", "Sunglasses", "Eyewear Sahibganj", "Lens Fitting", "Power Glasses", "Jharkhand"],
  authors: [{ name: "Best Optical" }],
  creator: "Best Optical",
  publisher: "Best Optical",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://bestoptical.in"), // Assuming a domain, user can change
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Best Optical | Premium Eyewear & Lens Solutions",
    description: "Your vision, carefully curated. Providing Sahibganj with premium eyewear and expert fitting for over a decade.",
    url: "https://bestoptical.in",
    siteName: "Best Optical",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Optical | Premium Eyewear",
    description: "Premium eyewear and expert fitting in Sahibganj, Jharkhand.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", inter.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
