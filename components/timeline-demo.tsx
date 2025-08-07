"use client"

import { Timeline } from "@/components/ui/timeline"

export default function TimelineDemo() {
  const data = [
    {
      title: "June 2025",
      content: (
        <div>
          <h3 className="text-neutral-800 text-lg font-bold mb-4">
            Weather Forecast App
          </h3>
          <p className="text-neutral-600 text-sm mb-4 italic">
            Python, OpenWeatherMap API, Tkinter, HTML
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Enabled live location-based weather updates with geolocation
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              • Deployed on GitHub Pages with responsive design and real-time data
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2024 - Jun 2025",
      content: (
        <div>
          <h3 className="text-neutral-800 text-lg font-bold mb-4">
            Student Council of IIT Madras
          </h3>
          <p className="text-neutral-600 text-sm mb-4 italic">
            PR and Outreach Head - IIT Madras
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Spearheaded external communications, media engagement, and strategic outreach for the BS Data Science Program
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Organized Local Student Meetups, Awareness Camps, Seminars and Hackathons
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              • Led a cross-functional team to drive public engagement, manage events, and grow social media reach by 3x
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "April 2024",
      content: (
        <div>
          <h3 className="text-neutral-800 text-lg font-bold mb-4">
            Notes Summarize App
          </h3>
          <p className="text-neutral-600 text-sm mb-4 italic">
            Flutter, Android Studio, HTML
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Developed an automatic notes summary using Flutter and Google API Console to generate text
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              • Implemented use of Gemini AI which generates the summary by a pre-processed prompt
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Sep 2022 - Apr 2024",
      content: (
        <div>
          <h3 className="text-neutral-800 text-lg font-bold mb-4">
            Student Support Council of SVKM
          </h3>
          <p className="text-neutral-600 text-sm mb-4 italic">
            Core Member - SVKM's Mithibai College
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Helped more than 100 students in their academics and with the help of College counsellor helped them resolve their problems
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Organized awareness drives relating to Mental Health and different Mental Disorders
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              • Led chapter of 30+ members to work towards goals that improve and promote community service, academics, and unity
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "November 2022",
      content: (
        <div>
          <h3 className="text-neutral-800 text-lg font-bold mb-4">
            AI Based Alarm
          </h3>
          <p className="text-neutral-600 text-sm mb-4 italic">
            Circuit
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Created an Smart Laser Based Security Alarm using different technical components which detects any disturbance
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • A alarm starts if the laser is interfered and an image of the location with a text is sent to the user
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              • Made this project for a Healthcare firm to enhance the security during night time and secure inventory
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "January 2022",
      content: (
        <div>
          <h3 className="text-neutral-800 text-lg font-bold mb-4">
            PDF Summary and Analyzer
          </h3>
          <p className="text-neutral-600 text-sm mb-4 italic">
            Python, CMD
          </p>
          <div className="mb-6">
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • Designed a python program where user can upload a folder of multiple PDF and get them arranged as per data in them with relevance
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm mb-2">
              • The user will get them sorted into different folder by the inbuilt features of the program
            </div>
            <div className="flex gap-2 items-center text-neutral-700 text-xs md:text-sm">
              • Summary file will also be made of the PDF
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <div className="min-h-screen w-full">
      <div className="w-full">
        <Timeline data={data} />
      </div>
    </div>
  )
}

export { TimelineDemo }
