import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"

import Navbar from "@/components/navbar"
import FadeIn from "@/components/fade-in"
import ProjectsGrid from "@/components/projects-grid"
import ContactForm from "@/components/contact-form"
import { Hero } from "@/components/ui/animated-hero"
import { TimelineDemo } from "@/components/timeline-demo"
import { SocialLinks } from "@/components/social-links"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Manthan Raj Singh - Data Science Student | IIT Madras | Mumbai",
  description:
    "Manthan Raj Singh is a Data Science student at IIT Madras from Mumbai. Specializing in backend development, AI/ML projects, and open-source contributions. Available for internships and collaborations.",
  keywords: [
    "Manthan Raj Singh",
    "Data Science",
    "IIT Madras",
    "Mumbai",
    "Backend Developer",
    "Machine Learning",
    "Python",
    "Student Developer",
    "Open Source",
    "AI Projects",
    "Web Development",
    "Portfolio",
  ],
  authors: [{ name: "Manthan Raj Singh" }],
  creator: "Manthan Raj Singh",
  publisher: "Manthan Raj Singh",
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
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://manthan.vigneshreddy.tech",
    title: "Manthan Raj Singh - Data Science Student | IIT Madras",
    description:
      "Data Science student at IIT Madras from Mumbai. Passionate about AI/ML, backend development, and building impactful solutions.",
    siteName: "Manthan Raj Singh Portfolio",
    images: [
      {
        url: "https://manthan.vigneshreddy.tech/og-image.png",
        width: 1200,
        height: 630,
        alt: "Manthan Raj Singh - Data Science Student at IIT Madras",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Manthan Raj Singh - Data Science Student | IIT Madras",
    description:
      "Data Science student at IIT Madras from Mumbai. Building AI/ML projects and contributing to open source.",
    images: ["https://manthan.vigneshreddy.tech/og-image.png"],
    creator: "@manthansingh",
  },
  alternates: {
    canonical: "https://manthan.vigneshreddy.tech",
  },
  category: "Portfolio",
  classification: "Personal Portfolio Website",
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Mumbai, Maharashtra, India",
    "geo.position": "19.0760;72.8777",
    ICBM: "19.0760, 72.8777",
  },
}

export default function Page() {
  return (
    <div className={`${inter.className} text-neutral-900 bg-white`}>
      <Navbar />
      <main id="top" className="scroll-smooth">
        {/* Hero */}
        <section id="hero" className="relative pt-16 md:pt-24 border-b">
          <Hero />
        </section>

        {/* About */}
        <section id="about" className="py-16 md:py-24 border-b" aria-labelledby="about-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <FadeIn>
              <div className="max-w-3xl">
                <h2 id="about-heading" className="text-2xl md:text-3xl font-bold">
                  About Me
                </h2>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  I&apos;m a Data Science student passionate about building user-centered solutions with modern web
                  technologies. My focus areas include backend services, clean architecture, and intuitive frontends.
                  This is placeholder text—replace it with a short bio: your mission, interests, and what you&apos;re
                  looking for.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Outside of work, I enjoy hackathons, mentoring peers, and contributing to open-source. I value
                  clarity, collaboration, and shipping quality work.
                </p>
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Timeline */}
        <section id="timeline" className="py-16 md:py-24 border-b" aria-labelledby="timeline-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <TimelineDemo />
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16 md:py-24 border-b" aria-labelledby="projects-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <FadeIn>
              <h2 id="projects-heading" className="text-2xl md:text-3xl font-bold">
                Projects
              </h2>
              <p className="mt-2 text-neutral-600">
                A few representative projects. Replace with your real portfolio items.
              </p>
              <div className="mt-8">
                <ProjectsGrid />
              </div>
            </FadeIn>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-16 md:py-24" aria-labelledby="contact-heading">
          <div className="container mx-auto max-w-6xl px-4">
            <FadeIn>
              <div className="grid gap-10 md:grid-cols-2">
                <div>
                  <h2 id="contact-heading" className="text-2xl md:text-3xl font-bold">
                    Contact
                  </h2>
                  <p className="mt-2 text-neutral-600">
                    Let&apos;s build something together. Send a message or reach out on social.
                  </p>
                  <SocialLinks />
                </div>
                <div>
                  <ContactForm />
                </div>
              </div>
            </FadeIn>
          </div>
        </section>
      </main>

      <footer className="border-t">
        <div className="container mx-auto max-w-6xl px-4 py-6 flex flex-col sm:flex-row gap-3 items-center justify-between">
          <p className="text-xs text-neutral-500">
            © {new Date().getFullYear()} Manthan Raj Singh. All rights reserved.
          </p>
          <nav className="flex gap-4 text-xs">
            <Link href="#about" className="hover:underline underline-offset-4">
              About
            </Link>
            <Link href="#projects" className="hover:underline underline-offset-4">
              Projects
            </Link>
            <Link href="#contact" className="hover:underline underline-offset-4">
              Contact
            </Link>
          </nav>
        </div>
      </footer>
    </div>
  )
}
