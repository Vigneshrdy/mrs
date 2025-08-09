"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import type { PropsWithChildren } from "react"
import { useScrollTracking } from "@/hooks/use-scroll-tracking"

type Props = PropsWithChildren<{
  delay?: number
  className?: string
}>

export default function FadeIn({ children, delay = 0.05, className }: Props) {
  const ref = useRef<HTMLDivElement | null>(null)
  const inView = useInView(ref, { once: true, margin: "-20% 0px" })

  // Initialize scroll tracking
  useScrollTracking()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 16 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
      transition={{ duration: 0.6, ease: "easeOut", delay }}
    >
      {children}
    </motion.div>
  )
}
