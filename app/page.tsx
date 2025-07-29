"use client"

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Cpu, Users, BookOpen, Code, Zap, Phone } from "lucide-react"

export default function RISCVWorkshop() {
  const workshopContent = {
    overview: {
      title: "Workshop Overview",
      description: "Learn the fundamentals of RISC-V architecture and implementation",
      topics: [
        "Introduction to RISC-V ISA",
        "Processor Design Principles",
        "Assembly Programming",
        "Hardware Implementation",
        "Performance Optimization",
        "Debugging Techniques",
      ],
    },
    prerequisites: {
      title: "Prerequisites",
      requirements: [
        "Basic understanding of computer architecture",
        "Familiarity with assembly language concepts",
        "Programming experience (any language)",
        "Laptop with development environment",
        "Basic knowledge of digital logic",
        "Understanding of CPU instruction cycles",
      ],
    },
    materials: {
      title: "What You'll Get",
      items: [
        "Comprehensive workshop materials and slides",
        "Hands-on lab exercises and solutions",
        "RISC-V development tools and simulators",
        "Reference guides and documentation",
        "Access to online resources and community",
        "Certificate of completion",
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

      {/* Registration Form Section - Moved to Top */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl text-gray-900 flex items-center justify-center gap-2">
                <Cpu className="h-6 w-6" />
                Register Now
              </CardTitle>
              <CardDescription>Secure your spot in this exclusive RISC-V workshop</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="w-full overflow-hidden rounded-lg">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdsXz-d54ULv54d0GBzSv2zg_SCp7I-wPGTgZe24O8TVGvb8A/viewform?embedded=true"
                  width="100%"
                  height="2084"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="w-full"
                  title="RISC-V Workshop Registration Form"
                >
                  Loading registration form...
                </iframe>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Hero Section - Simplified */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">Master RISC-V Architecture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Join our comprehensive workshop to learn the fundamentals of RISC-V processor design, assembly
                programming, and hardware implementation.
              </p>
            </div>

            <div className="flex items-center justify-center gap-8 text-sm text-gray-600">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5" />
                <span>50+ Attendees</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                <span>Hands-on Labs</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5" />
                <span>Expert Instructors</span>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mt-12">
              <img
                src="/placeholder.svg?height=400&width=800&text=RISC-V+Architecture+Workshop"
                alt="RISC-V Architecture Diagram"
                className="w-full max-w-4xl mx-auto h-96 object-cover rounded-xl shadow-2xl"
              />
            </div>
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
              <TabsTrigger value="prerequisites" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Prerequisites
              </TabsTrigger>
              <TabsTrigger value="materials" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Materials
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
                        Gain hands-on experience with RISC-V architecture, learn to write efficient assembly code,
                        understand the principles behind modern processor design, and explore real-world applications of
                        RISC-V in embedded systems and high-performance computing.
                      </p>
                    </div>
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
                        speed during the workshop. We encourage learners at all levels to participate.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="materials">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Zap className="h-5 w-5 text-green-600" />
                    {workshopContent.materials.title}
                  </CardTitle>
                  <CardDescription>Resources and materials included with your registration</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="font-semibold mb-3">Included Materials:</h4>
                      <ul className="space-y-3">
                        {workshopContent.materials.items.map((item, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="bg-gradient-to-br from-green-50 to-blue-50 p-6 rounded-lg">
                      <h4 className="font-semibold mb-3">Post-Workshop Support:</h4>
                      <p className="text-gray-600">
                        After the workshop, you'll have access to our online community, additional resources, and
                        follow-up sessions to continue your RISC-V learning journey.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Questions? Contact:</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Phone className="h-5 w-5 text-blue-400" />
                  <h4 className="text-lg font-semibold text-white">Paul Sherman</h4>
                </div>
                <p className="text-gray-300 mb-3">Workshop Coordinator</p>
                <a href="tel:+14083830471" className="text-blue-400 hover:text-blue-300 font-mono text-lg">
                  (408) 383-0471
                </a>
              </CardContent>
            </Card>

            <Card className="bg-gray-800 border-gray-700">
              <CardContent className="pt-6">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Phone className="h-5 w-5 text-green-400" />
                  <h4 className="text-lg font-semibold text-white">Christopher Velasco</h4>
                </div>
                <p className="text-gray-300 mb-3">Technical Support</p>
                <a href="tel:+14156448565" className="text-green-400 hover:text-green-300 font-mono text-lg">
                  (415) 644-8565
                </a>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4 border-t border-gray-800">
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
