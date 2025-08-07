import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import Link from "next/link"
import Image from "next/image"
import { ArrowDownRight, Github, Linkedin, Mail, ExternalLink } from 'lucide-react'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

import Navbar from "@/components/navbar"
import FadeIn from "@/components/fade-in"
import ProjectsGrid from "@/components/projects-grid"
import ContactForm from "@/components/contact-form"
import { Hero } from "@/components/ui/animated-hero"
import { TimelineDemo } from "@/components/timeline-demo"

const inter = Inter({ subsets: ["latin"], display: "swap" })

export const metadata: Metadata = {
  title: "Modern Minimal Portfolio",
  description:
    "A clean, responsive personal portfolio with resume gallery, projects, and contact form.",
  openGraph: {
    title: "Modern Minimal Portfolio",
    description:
      "A clean, responsive personal portfolio with resume gallery, projects, and contact form.",
    type: "website",
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
                  I&apos;m a Data Science student passionate about building user-centered solutions
                  with modern web technologies. My focus areas include backend services, clean
                  architecture, and intuitive frontends. This is placeholder text—replace it with a
                  short bio: your mission, interests, and what you&apos;re looking for.
                </p>
                <p className="mt-4 text-neutral-600 leading-relaxed">
                  Outside of work, I enjoy hackathons, mentoring peers, and contributing to
                  open-source. I value clarity, collaboration, and shipping quality work.
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
        <section
          id="projects"
          className="py-16 md:py-24 border-b"
          aria-labelledby="projects-heading"
        >
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
                  <div className="mt-6 flex items-center gap-4">
                    <Link
                      href="https://github.com"
                      aria-label="GitHub"
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Github className="h-5 w-5" />
                    </Link>
                    <Link
                      href="https://linkedin.com"
                      aria-label="LinkedIn"
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Linkedin className="h-5 w-5" />
                    </Link>
                    <Link
                      href="mailto:you@example.com"
                      aria-label="Email"
                      className="text-neutral-500 hover:text-neutral-900"
                    >
                      <Mail className="h-5 w-5" />
                    </Link>
                  </div>
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
