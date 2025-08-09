"use client"

import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import FadeIn from "@/components/fade-in"
import { ExternalLink, Github } from "lucide-react"
import { trackProjectClick, trackExternalLink } from "@/lib/analytics"

const items = [
  {
    title: "Weather Forecast App",
    desc: "Location-based weather updates with geolocation and responsive UI.",
    href: "#",
    repo: "#",
  },
  {
    title: "Notes Summarize App",
    desc: "Automatic notes summarization using AI with a clean Flutter/JS stack.",
    href: "#",
    repo: "#",
  },
  {
    title: "PDF Summary & Analyzer",
    desc: "Batch PDF analysis and auto-sorting with summary export.",
    href: "#",
    repo: "#",
  },
]

export default function ProjectsGrid() {
  const handleProjectClick = (project: string, type: "live" | "code", url: string) => {
    trackProjectClick(project, type)
    trackExternalLink(url, "project")
  }

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((p, i) => (
        <FadeIn key={p.title} delay={0.05 + i * 0.05}>
          <Card className="h-full flex flex-col">
            <CardHeader className="p-0">
              <div className="relative w-full h-44 overflow-hidden rounded-t-lg">
                <Image
                  src={`/placeholder.svg?height=320&width=640&query=${encodeURIComponent(
                    p.title + " project cover neutral",
                  )}`}
                  alt={`${p.title} cover`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <h3 className="font-semibold">{p.title}</h3>
              <p className="mt-2 text-sm text-neutral-600">{p.desc}</p>
            </CardContent>
            <CardFooter className="mt-auto flex gap-2">
              <Link href={p.href}>
                <Button
                  size="sm"
                  variant="outline"
                  className="gap-2 bg-transparent"
                  onClick={() => handleProjectClick(p.title, "live", p.href)}
                >
                  <ExternalLink className="h-4 w-4" />
                  Live
                </Button>
              </Link>
              <Link href={p.repo}>
                <Button
                  size="sm"
                  variant="ghost"
                  className="gap-2"
                  onClick={() => handleProjectClick(p.title, "code", p.repo)}
                >
                  <Github className="h-4 w-4" />
                  Code
                </Button>
              </Link>
            </CardFooter>
          </Card>
        </FadeIn>
      ))}
    </div>
  )
}
