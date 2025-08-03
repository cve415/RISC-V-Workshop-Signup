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
              <h2 className="text-5xl font-bold text-gray-900 leading-tight">Introduction to RISC-V Architecture</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
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
            
            </div>
          </div>
        </div>
      </section>

      {/* Workshop Content */}
      <section className="py-16 px-4 bg-white/50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">RISC-V Workshop Content</h3>
            <p className="text-lg text-gray-600">Comprehensive learning modules and hands-on exercises</p>
          </div>

          <Tabs defaultValue="fundamentals" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8">
              <TabsTrigger value="fundamentals" className="flex items-center gap-2">
                <BookOpen className="h-4 w-4" />
                Fundamentals
              </TabsTrigger>
              <TabsTrigger value="programming" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Programming
              </TabsTrigger>
              <TabsTrigger value="implementation" className="flex items-center gap-2">
                <Cpu className="h-4 w-4" />
                Implementation
              </TabsTrigger>
              <TabsTrigger value="advanced" className="flex items-center gap-2">
                <Zap className="h-4 w-4" />
                Advanced
              </TabsTrigger>
            </TabsList>

            <TabsContent value="fundamentals">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-blue-600" />
                      RISC-V Architecture Basics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Introduction to RISC-V ISA principles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Base integer instruction set (RV32I/RV64I)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Register file and memory model</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Instruction formats and encoding</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                        <span>Comparison with other architectures</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-green-600" />
                      Processor Design Concepts
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>Pipeline architecture fundamentals</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>Hazard detection and resolution</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>Branch prediction strategies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>Cache hierarchy design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                        <span>Performance optimization techniques</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="programming">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Code className="h-5 w-5 text-purple-600" />
                      Assembly Programming
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>RISC-V assembly language syntax</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>Arithmetic and logical operations</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>Memory access instructions</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>Control flow and branching</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-purple-600 rounded-full mt-2"></div>
                        <span>Function calls and stack management</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-orange-600" />
                      Development Tools
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span>GNU RISC-V toolchain setup</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span>Spike simulator usage</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span>QEMU emulation environment</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span>Debugging with GDB</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-orange-600 rounded-full mt-2"></div>
                        <span>Performance profiling tools</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="implementation">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-red-600" />
                      Hardware Implementation
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span>Verilog/SystemVerilog implementation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span>Single-cycle processor design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span>Pipelined processor implementation</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span>FPGA deployment strategies</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-red-600 rounded-full mt-2"></div>
                        <span>Verification and testing methodologies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <BookOpen className="h-5 w-5 text-teal-600" />
                      System Integration
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                        <span>SoC design principles</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                        <span>Bus interfaces and protocols</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                        <span>Peripheral integration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                        <span>Memory subsystem design</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-teal-600 rounded-full mt-2"></div>
                        <span>Power management techniques</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="advanced">
              <div className="grid md:grid-cols-2 gap-8">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Zap className="h-5 w-5 text-indigo-600" />
                      Advanced Topics
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <span>Vector extensions (RVV)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <span>Compressed instructions (RVC)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <span>Atomic operations (RVA)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <span>Floating-point extensions (RVF/RVD)</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-indigo-600 rounded-full mt-2"></div>
                        <span>Custom instruction extensions</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Users className="h-5 w-5 text-pink-600" />
                      Real-World Applications
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                        <span>Embedded systems development</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                        <span>High-performance computing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                        <span>IoT and edge computing</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                        <span>AI/ML acceleration</span>
                      </li>
                      <li className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-pink-600 rounded-full mt-2"></div>
                        <span>Industry case studies</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>

          {/* Hands-on Labs Section */}
          <div className="mt-16">
            <h4 className="text-2xl font-bold text-gray-900 mb-8 text-center">Hands-on Laboratory Exercises</h4>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="border-l-4 border-l-blue-500">
                <CardHeader>
                  <CardTitle className="text-lg">Lab 1: Basic Assembly</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Write and execute your first RISC-V assembly programs</p>
                  <div className="flex items-center gap-2 text-sm text-blue-600">
                    <Code className="h-4 w-4" />
                    <span>Duration: 45 minutes</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardHeader>
                  <CardTitle className="text-lg">Lab 2: Processor Design</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Implement a simple RISC-V processor in Verilog</p>
                  <div className="flex items-center gap-2 text-sm text-green-600">
                    <Cpu className="h-4 w-4" />
                    <span>Duration: 90 minutes</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-purple-500">
                <CardHeader>
                  <CardTitle className="text-lg">Lab 3: Performance Analysis</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">Analyze and optimize RISC-V code performance</p>
                  <div className="flex items-center gap-2 text-sm text-purple-600">
                    <Zap className="h-4 w-4" />
                    <span>Duration: 60 minutes</span>
                  </div>
                </CardContent>
              </Card>
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
