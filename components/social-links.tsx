"use client"

import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"
import { trackSocialClick, trackContactForm } from "@/lib/analytics"

export function SocialLinks() {
  const handleSocialClick = (platform: string) => {
    trackSocialClick(platform)
  }

  const handleEmailClick = () => {
    trackContactForm("email")
    trackSocialClick("email")
  }

  return (
    <div className="mt-6 flex items-center gap-4">
      <Link
        href="https://github.com"
        aria-label="GitHub"
        className="text-neutral-500 hover:text-neutral-900"
        onClick={() => handleSocialClick("github")}
      >
        <Github className="h-5 w-5" />
      </Link>
      <Link
        href="https://linkedin.com"
        aria-label="LinkedIn"
        className="text-neutral-500 hover:text-neutral-900"
        onClick={() => handleSocialClick("linkedin")}
      >
        <Linkedin className="h-5 w-5" />
      </Link>
      <Link
        href="mailto:you@example.com"
        aria-label="Email"
        className="text-neutral-500 hover:text-neutral-900"
        onClick={handleEmailClick}
      >
        <Mail className="h-5 w-5" />
      </Link>
    </div>
  )
}
