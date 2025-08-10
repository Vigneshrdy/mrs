import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { GoogleAnalytics } from "@next/third-parties/google"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://manthan.vigneshreddy.tech"),
  title: {
    default: "Manthan Raj Singh - Data Science Student | IIT Madras | Mumbai",
    template: "%s | Manthan Raj Singh",
  },
  description:
    "Manthan Raj Singh is a Data Science student at IIT Madras from Mumbai. Specializing in backend development, AI/ML projects, and open-source contributions.",
  generator: "Next.js",
  applicationName: "Manthan Singh Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Manthan Raj Singh",
    "Data Science",
    "IIT Madras",
    "Mumbai",
    "Backend Developer",
    "Machine Learning",
    "Python",
    "Student Developer",
  ],
  authors: [{ name: "Manthan Raj Singh", url: "https://manthan.vigneshreddy.tech" }],
  creator: "Manthan Raj Singh",
  publisher: "Manthan Raj Singh",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Manthan Raj Singh",
  url: "https://manthan.vigneshreddy.tech",
  image: "https://manthan.vigneshreddy.tech/profile-image.jpg",
  sameAs: [
    "https://github.com/manthansingh",
    "https://linkedin.com/in/manthan-singh-38b3ba187",
    "https://twitter.com/manthansingh",
  ],
  jobTitle: "Data Science Student",
  worksFor: {
    "@type": "Organization",
    name: "Indian Institute of Technology Madras",
    url: "https://www.iitm.ac.in",
  },
  alumniOf: {
    "@type": "Organization",
    name: "SVKM's Mithibai College",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Mumbai",
      addressRegion: "Maharashtra",
      addressCountry: "India",
    },
  },
  address: {
    "@type": "PostalAddress",
    addressLocality: "Mumbai",
    addressRegion: "Maharashtra",
    addressCountry: "India",
  },
  knowsAbout: [
    "Data Science",
    "Machine Learning",
    "Python Programming",
    "Backend Development",
    "Web Development",
    "Artificial Intelligence",
    "Open Source Development",
  ],
  description:
    "Data Science student at IIT Madras from Mumbai, passionate about AI/ML, backend development, and building impactful solutions.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#10b981" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="canonical" href="https://manthan.vigneshreddy.tech" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <style>{`
html {
  font-family: ${GeistSans.style.fontFamily};
  --font-sans: ${GeistSans.variable};
  --font-mono: ${GeistMono.variable};
}
        `}</style>
      </head>
      <body>
        {children}
        <GoogleAnalytics gaId="G-XXXXXXXXXX" />
      </body>
    </html>
  )
}
