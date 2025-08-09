"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { trackContactForm, trackEvent } from "@/lib/analytics"

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  async function onSubmit(formData: FormData) {
    setStatus("loading")

    // Track form submission attempt
    trackEvent("form_start", "contact", "contact_form")

    try {
      const payload = Object.fromEntries(formData.entries())
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })

      if (!res.ok) throw new Error("Request failed")

      setStatus("success")

      // Track successful form submission
      trackContactForm("form")
      trackEvent("form_submit", "contact", "success")
    } catch (e) {
      setStatus("error")

      // Track form submission error
      trackEvent("form_submit", "contact", "error")
    }
  }

  return (
    <form action={onSubmit} className="grid gap-3">
      <div className="grid gap-2">
        <label htmlFor="name" className="text-sm font-medium">
          Name
        </label>
        <Input
          id="name"
          name="name"
          placeholder="Your name"
          required
          onFocus={() => trackEvent("form_field_focus", "contact", "name")}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="email" className="text-sm font-medium">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          placeholder="you@example.com"
          required
          onFocus={() => trackEvent("form_field_focus", "contact", "email")}
        />
      </div>
      <div className="grid gap-2">
        <label htmlFor="message" className="text-sm font-medium">
          Message
        </label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me about your project..."
          rows={5}
          required
          onFocus={() => trackEvent("form_field_focus", "contact", "message")}
        />
      </div>
      <div className="flex items-center gap-3 pt-1">
        <Button
          type="submit"
          className="bg-emerald-600 hover:bg-emerald-700 text-white"
          disabled={status === "loading"}
        >
          {status === "loading" ? "Sending..." : "Send message"}
        </Button>
        <p aria-live="polite" className="text-sm">
          {status === "success" && <span className="text-emerald-700">Thanks! I&apos;ll get back to you soon.</span>}
          {status === "error" && <span className="text-red-600">Something went wrong. Try again.</span>}
        </p>
      </div>
    </form>
  )
}
