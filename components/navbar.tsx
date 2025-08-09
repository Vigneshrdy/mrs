"use client"

import Link from "next/link"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"
import { trackEvent, trackSectionView } from "@/lib/analytics"

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll)
    document.documentElement.style.scrollBehavior = "smooth"
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const handleNavClick = (section: string) => {
    trackEvent("navigation", "navbar", section)
    trackSectionView(section)
  }

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors",
        scrolled ? "bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b" : "bg-transparent",
      )}
      role="banner"
    >
      <div className="container mx-auto max-w-6xl px-4 h-16 flex items-center justify-between">
        <Link href="#top" className="font-semibold" onClick={() => handleNavClick("home")}>
          MRS
        </Link>
        <nav aria-label="Primary" className="hidden sm:flex items-center gap-6 text-sm">
          <Link
            className="text-neutral-600 hover:text-neutral-900"
            href="#about"
            onClick={() => handleNavClick("about")}
          >
            About
          </Link>
          <Link
            className="text-neutral-600 hover:text-neutral-900"
            href="#timeline"
            onClick={() => handleNavClick("timeline")}
          >
            Timeline
          </Link>
          <Link
            className="text-neutral-600 hover:text-neutral-900"
            href="#projects"
            onClick={() => handleNavClick("projects")}
          >
            Projects
          </Link>
          <Link
            className="text-neutral-600 hover:text-neutral-900"
            href="#contact"
            onClick={() => handleNavClick("contact")}
          >
            Contact
          </Link>
        </nav>
        <Link
          href="#contact"
          className="sm:hidden text-sm text-emerald-700 hover:text-emerald-900"
          aria-label="Contact"
          onClick={() => handleNavClick("contact")}
        >
          Contact
        </Link>
      </div>
    </header>
  )
}
