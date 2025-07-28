"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Cpu, Users, BookOpen, Code, Zap } from "lucide-react"
import { submitRegistration } from "./actions"

export default function RISCVWorkshop() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const result = await submitRegistration(formData)
      if (result.success) {
        setSubmitMessage("Registration successful! We'll be in touch soon.")
        // Reset form
        const form = document.getElementById("registration-form") as HTMLFormElement
        form?.reset()
      } else {
        setSubmitMessage("Registration failed. Please try again.")
      }
    } catch (error) {
      setSubmitMessage("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const workshopContent = {
    overview: {
      title: "Workshop Overview",
      description: "Learn the fundamentals of RISC-V architecture and implementation",
      topics: [
        "Introduction to RISC-V ISA",
        "Processor Design Principles",
        "Assembly Programming",
        "Hardware Implementation",
      ],
    },
    schedule: {
      title: "Schedule",
      sessions: [
        { time: "9:00 AM - 10:30 AM", topic: "RISC-V Architecture Fundamentals", speaker: "Dr. Sarah Chen" },
        { time: "10:45 AM - 12:15 PM", topic: "Assembly Programming Workshop", speaker: "Prof. Michael Rodriguez" },
        { time: "1:15 PM - 2:45 PM", topic: "Hardware Implementation", speaker: "Dr. Emily Watson" },
        { time: "3:00 PM - 4:30 PM", topic: "Advanced Topics & Q&A", speaker: "Panel Discussion" },
      ],
    },
    prerequisites: {
      title: "Prerequisites",
      requirements: [
        "Basic understanding of computer architecture",
        "Familiarity with assembly language concepts",
        "Programming experience (any language)",
        "Laptop with development environment",
      ],
    },
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Cpu className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">RISC-V Workshop</h1>
            <Badge variant="secondary" className="ml-auto">
              Free Event
            </Badge>
          </div>
        </div>
      </header>

      {/* Hero Section with Registration */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Hero Content */}
            <div className="space-y-6">
              <div className="space-y-4">
                <h2 className="text-4xl font-bold text-gray-900 leading-tight">Master RISC-V Architecture</h2>
                <p className="text-xl text-gray-600">
                  Join our comprehensive workshop to learn the fundamentals of RISC-V processor design, assembly
                  programming, and hardware implementation.
                </p>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>50+ Attendees</span>
                </div>
                <div className="flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  <span>4 Sessions</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4" />
                  <span>Hands-on Labs</span>
                </div>
              </div>

              {/* Hero Image */}
              <div className="lg:hidden">
                <img
                  src="/risc-v-hero.png"
                  alt="RISC-V Architecture Diagram"
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>

            {/* Registration Form */}
            <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-gray-900">Register Now</CardTitle>
                <CardDescription>Secure your spot in this exclusive RISC-V workshop</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="registration-form" action={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name</Label>
                      <Input id="firstName" name="firstName" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name</Label>
                      <Input id="lastName" name="lastName" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input id="email" name="email" type="email" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization/University</Label>
                    <Input id="organization" name="organization" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <select
                      id="experience"
                      name="experience"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      required
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-green-600 hover:from-blue-700 hover:to-green-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Registering..." : "Register for Workshop"}
                  </Button>

                  {submitMessage && (
                    <p
                      className={`text-sm text-center ${submitMessage.includes("successful") ? "text-green-600" : "text-red-600"}`}
                    >
                      {submitMessage}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Hero Image - Desktop */}
          <div className="hidden lg:block mt-12">
            <img
              src="/risc-v-hero.png"
              alt="RISC-V Architecture Diagram"
              className="w-full h-80 object-cover rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </section>

      {/* Workshop Content Tabs */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">Workshop Details</h3>
            <p className="text-lg text-gray-600">Everything you need to know about the workshop</p>
          </div>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="overview" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Overview
              </TabsTrigger>
              <TabsTrigger value="schedule" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Schedule
              </TabsTrigger>
              <TabsTrigger value="prerequisites" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Prerequisites
              </TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BookOpen className="h-5 w-5 text-blue-600" />
                    {workshopContent.overview.title}
                  </CardTitle>
                  <CardDescription>{workshopContent.overview.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Key Topics Covered:</h4>
                      <ul className="space-y-2">
                        {workshopContent.overview.topics.map((topic, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                            {topic}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">What You'll Learn:</h4>
                      <p className="text-gray-600">
                        Gain hands-on experience with RISC-V architecture, learn to write efficient assembly code, and
                        understand the principles behind modern processor design.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="schedule">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    {workshopContent.schedule.title}
                  </CardTitle>
                  <CardDescription>Full day workshop schedule</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {workshopContent.schedule.sessions.map((session, index) => (
                      <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="text-sm font-mono text-blue-600 min-w-[140px]">{session.time}</div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{session.topic}</h4>
                          <p className="text-sm text-gray-600">{session.speaker}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="prerequisites">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5 text-orange-600" />
                    {workshopContent.prerequisites.title}
                  </CardTitle>
                  <CardDescription>What you should know before attending</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Required Knowledge:</h4>
                      <ul className="space-y-3">
                        {workshopContent.prerequisites.requirements.map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                            <span>{req}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Don't Meet All Requirements?</h4>
                      <p className="text-gray-600">
                        Don't worry! We'll provide introductory materials and our instructors will help you get up to
                        speed during the workshop.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Cpu className="h-6 w-6" />
            <span className="text-lg font-semibold">RISC-V Workshop</span>
          </div>
          <p className="text-gray-400">Empowering the next generation of processor architects</p>
        </div>
      </footer>
    </div>
  )
}
