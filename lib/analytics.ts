// Google Analytics 4 tracking functions
declare global {
  interface Window {
    gtag: (command: string, targetId: string, config?: Record<string, any>) => void
  }
}

// Track page views
export const trackPageView = (url: string) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("config", "G-XXXXXXXXXX", {
      page_location: url,
    })
  }
}

// Track custom events
export const trackEvent = (action: string, category: string, label?: string, value?: number) => {
  if (typeof window !== "undefined" && window.gtag) {
    window.gtag("event", action, {
      event_category: category,
      event_label: label,
      value: value,
    })
  }
}

// Track contact form submissions
export const trackContactForm = (method: "email" | "form") => {
  trackEvent("contact", "engagement", method)
}

// Track project clicks
export const trackProjectClick = (projectName: string, type: "live" | "code") => {
  trackEvent("project_click", "projects", `${projectName}_${type}`)
}

// Track social media clicks
export const trackSocialClick = (platform: string) => {
  trackEvent("social_click", "social", platform)
}

// Track resume/CV downloads
export const trackResumeDownload = () => {
  trackEvent("download", "resume", "pdf")
}

// Track section views (for scroll tracking)
export const trackSectionView = (section: string) => {
  trackEvent("section_view", "navigation", section)
}

// Track external link clicks
export const trackExternalLink = (url: string, context: string) => {
  trackEvent("external_link", "outbound", `${context}_${url}`)
}

// Enhanced ecommerce tracking for portfolio engagement
export const trackEngagement = (action: string, section: string, duration?: number) => {
  trackEvent(action, "engagement", section, duration)
}
