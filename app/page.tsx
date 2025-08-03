"use client"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Cpu,
  Users,
  BookOpen,
  Code,
  Zap,
  Phone,
  ChevronRight,
  Play,
  Settings,
  Wrench,
  Database,
  FileText,
} from "lucide-react"

export default function RISCVWorkshop() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Cpu className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">RISC-V Workshop</h1>
              <p className="text-sm text-gray-600">20th International Joint Conference • Naresuan University</p>
            </div>
            <Badge variant="secondary" className="ml-auto">
              June 28 - July 1, 2023
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

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">RISC-V Hands-On Workshop</h2>
              <p className="text-xl text-gray-600">
                20th International Joint Conference on Computer Science and Software Engineering
              </p>
              <p className="text-lg text-gray-500">
                June 28th - July 1st, 2023 • Naresuan University, Phitsanulok, THAILAND
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src="https://sjc.microlink.io/dhrKdIDz-ACUnaDS4D-17prwbzWFRL6Fhewi7sXnLPDvxjCS2x7kqAzkF9hTK-j4mjFbnswhFG6Z7TrQM74AKQ.jpeg"
                alt="RISC-V Workshop interface showing workshop sections and hands-on activities"
                className="max-w-full h-auto rounded-lg shadow-lg"
                width={800}
                height={500}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Content */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Sidebar Navigation */}
            <div className="lg:col-span-1">
              <Card className="sticky top-4">
                <CardHeader>
                  <CardTitle className="text-lg">Workshop Sections</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Overview
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      Famous Abstractions
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Cpu className="h-4 w-4" />
                      RISC-V Fundamentals
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Instruction Set
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4" />
                      Constants & Variables
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Database className="h-4 w-4" />
                      All Instructions
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Zap className="h-4 w-4" />
                      ISA Extensions
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Settings className="h-4 w-4" />
                      SoC Integration
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Wrench className="h-4 w-4" />
                      Hardware Setup
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Development Environment
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <Play className="h-4 w-4" />
                      Lab Exercises
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" className="w-full justify-between text-left">
                    <div className="flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Resources
                    </div>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Instructors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Instructors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Naruemon Rattanakunkorn & Paul Sherman</p>
                </CardContent>
              </Card>

              {/* Workshop Agenda */}
              <Card>
                <CardHeader>
                  <CardTitle>Workshop Agenda</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                      <span>Thinking General</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span>What is RISC-V?</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                      <span>Grammar, Constants, Variables, and Operations</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <span>Code and Lab Etiquette</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <span>Wiring, Assembling, Compiling, Linking, Loading, Running, and Looking</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-cyan-500 rounded-full"></div>
                      <span>Six Tables, Six RISC-V ISA Extensions, and have some fun</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-pink-500 rounded-full"></div>
                      <span>Review and Wrap-up</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Statistics Cards */}
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">82 Instructions</CardTitle>
                    <CardDescription>Complete ISA coverage</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-blue-600 mb-2">82</div>
                    <p className="text-sm text-gray-600">No more instructions than you'll ever need</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">32 Registers</CardTitle>
                    <CardDescription>General purpose registers</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-green-600 mb-2">32</div>
                    <p className="text-sm text-gray-600">More registers than you'll ever need (less one)</p>
                  </CardContent>
                </Card>

                <Card className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">6 Formats</CardTitle>
                    <CardDescription>Instruction formats</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-4xl font-bold text-purple-600 mb-2">6</div>
                    <p className="text-sm text-gray-600">All ~82 instructions can be made with these six forms</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
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
                <p className="text-gray-300 mb-3">Workshop Presenter</p>
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
                <p className="text-gray-300 mb-3">Community Support</p>
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
