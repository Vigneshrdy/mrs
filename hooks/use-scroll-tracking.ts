"use client"

import { useEffect } from "react"
import { trackSectionView, trackEngagement } from "@/lib/analytics"

export function useScrollTracking() {
  useEffect(() => {
    const sections = ["hero", "about", "timeline", "projects", "contact"]
    const sectionElements = sections.map((id) => document.getElementById(id)).filter(Boolean)
    const viewedSections = new Set<string>()

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.target.id) {
            const sectionId = entry.target.id

            // Track section view only once per session
            if (!viewedSections.has(sectionId)) {
              trackSectionView(sectionId)
              viewedSections.add(sectionId)
            }
          }
        })
      },
      {
        threshold: 0.3, // Trigger when 30% of section is visible
        rootMargin: "-10% 0px -10% 0px",
      },
    )

    sectionElements.forEach((element) => {
      if (element) observer.observe(element)
    })

    // Track time spent on page
    const startTime = Date.now()

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - startTime) / 1000)
      trackEngagement("time_on_page", "engagement", timeSpent)
    }

    window.addEventListener("beforeunload", handleBeforeUnload)

    return () => {
      observer.disconnect()
      window.removeEventListener("beforeunload", handleBeforeUnload)
    }
  }, [])
}
