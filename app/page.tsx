"use client"
import { useState } from "react"
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
  Clock,
  Target,
  Lightbulb,
  Cog,
} from "lucide-react"

type WorkshopSection = {
  id: string
  title: string
  icon: any
  content: {
    title: string
    description: string
    topics: string[]
    keyPoints?: string[]
    duration?: string
  }
}

const workshopSections: WorkshopSection[] = [
  {
    id: "overview",
    title: "Overview",
    icon: BookOpen,
    content: {
      title: "Workshop Overview",
      description: "Introduction to the RISC-V Hands-On Workshop and what you'll learn throughout the sessions.",
      topics: [
        "Workshop objectives and learning outcomes",
        "RISC-V ecosystem and community",
        "Open-source hardware movement",
        "Industry adoption and use cases",
        "Prerequisites and setup requirements",
      ],
      keyPoints: [
        "Understand the fundamentals of RISC-V architecture",
        "Gain hands-on experience with RISC-V development",
        "Learn about the open-source hardware ecosystem",
        "Connect with the RISC-V community",
      ],
      duration: "30 minutes",
    },
  },
  {
    id: "abstractions",
    title: "Famous Abstractions",
    icon: Lightbulb,
    content: {
      title: "Famous Abstractions in Computer Architecture",
      description: "Explore the key abstractions that make modern computing possible and how RISC-V implements them.",
      topics: [
        "Hardware/Software interface",
        "Instruction Set Architecture (ISA)",
        "Assembly language abstraction",
        "Compiler abstractions",
        "Operating system abstractions",
        "Virtual memory concepts",
      ],
      keyPoints: [
        "Understand layered abstractions in computing",
        "Learn how abstractions enable modularity",
        "See how RISC-V simplifies these abstractions",
        "Appreciate the elegance of clean interfaces",
      ],
      duration: "45 minutes",
    },
  },
  {
    id: "fundamentals",
    title: "RISC-V Fundamentals",
    icon: Cpu,
    content: {
      title: "RISC-V Architecture Fundamentals",
      description:
        "Deep dive into the core principles and design philosophy of the RISC-V instruction set architecture.",
      topics: [
        "RISC vs CISC design philosophy",
        "RISC-V design principles",
        "Modular ISA extensions",
        "Base integer instruction sets (RV32I, RV64I)",
        "Register file organization",
        "Memory model and addressing",
      ],
      keyPoints: [
        "Master the RISC-V design philosophy",
        "Understand the modular extension system",
        "Learn about different base architectures",
        "Grasp the clean, simple instruction format",
      ],
      duration: "60 minutes",
    },
  },
  {
    id: "instruction-set",
    title: "Instruction Set",
    icon: Code,
    content: {
      title: "RISC-V Instruction Set Architecture",
      description: "Comprehensive coverage of RISC-V instructions, formats, and encoding schemes.",
      topics: [
        "Six instruction formats (R, I, S, B, U, J)",
        "Arithmetic and logical operations",
        "Load and store instructions",
        "Branch and jump instructions",
        "Immediate value handling",
        "Instruction encoding and decoding",
      ],
      keyPoints: [
        "Master all six instruction formats",
        "Understand instruction encoding",
        "Learn efficient instruction usage patterns",
        "Practice instruction format recognition",
      ],
      duration: "90 minutes",
    },
  },
  {
    id: "constants-variables",
    title: "Constants & Variables",
    icon: FileText,
    content: {
      title: "Constants, Variables, and Data Handling",
      description: "Learn how RISC-V handles different data types, constants, and variable storage mechanisms.",
      topics: [
        "Immediate values and constants",
        "Register allocation strategies",
        "Memory layout and data segments",
        "Stack and heap management",
        "Data type representations",
        "Endianness considerations",
      ],
      keyPoints: [
        "Understand immediate value limitations",
        "Learn efficient constant loading",
        "Master register usage conventions",
        "Grasp memory organization principles",
      ],
      duration: "45 minutes",
    },
  },
  {
    id: "all-instructions",
    title: "All Instructions",
    icon: Database,
    content: {
      title: "Complete RISC-V Instruction Reference",
      description: "Comprehensive reference of all 82 RISC-V base instructions with examples and use cases.",
      topics: [
        "Base integer instructions (RV32I/RV64I)",
        "Arithmetic operations (ADD, SUB, MUL, DIV)",
        "Logical operations (AND, OR, XOR, shifts)",
        "Memory operations (LW, SW, LB, SB)",
        "Control flow (BEQ, BNE, JAL, JALR)",
        "System instructions (ECALL, EBREAK)",
      ],
      keyPoints: [
        "Reference all 82 base instructions",
        "Understand instruction categories",
        "Learn common instruction patterns",
        "Practice instruction selection",
      ],
      duration: "120 minutes",
    },
  },
  {
    id: "isa-extensions",
    title: "ISA Extensions",
    icon: Zap,
    content: {
      title: "RISC-V ISA Extensions",
      description: "Explore the modular extension system that makes RISC-V flexible and customizable.",
      topics: [
        "Standard extensions (M, A, F, D, C)",
        "Multiplication and division (M extension)",
        "Atomic operations (A extension)",
        "Floating-point (F and D extensions)",
        "Compressed instructions (C extension)",
        "Custom extension development",
      ],
      keyPoints: [
        "Understand the extension philosophy",
        "Learn about standard extensions",
        "See how extensions interact",
        "Explore custom extension possibilities",
      ],
      duration: "75 minutes",
    },
  },
  {
    id: "soc-integration",
    title: "SoC Integration",
    icon: Settings,
    content: {
      title: "System-on-Chip Integration",
      description: "Learn how RISC-V cores integrate into complete system-on-chip designs.",
      topics: [
        "SoC architecture overview",
        "Bus interfaces and protocols",
        "Memory subsystem integration",
        "Peripheral interfacing",
        "Interrupt handling",
        "Power management considerations",
      ],
      keyPoints: [
        "Understand SoC design principles",
        "Learn integration challenges",
        "Master bus protocol basics",
        "Grasp system-level considerations",
      ],
      duration: "60 minutes",
    },
  },
  {
    id: "hardware-setup",
    title: "Hardware Setup",
    icon: Wrench,
    content: {
      title: "Hardware Setup and Configuration",
      description: "Hands-on setup of RISC-V development boards and hardware platforms.",
      topics: [
        "Development board overview",
        "Toolchain installation",
        "Hardware connections",
        "JTAG debugging setup",
        "Serial communication",
        "Power and reset considerations",
      ],
      keyPoints: [
        "Set up development environment",
        "Configure hardware connections",
        "Establish debugging capabilities",
        "Verify system functionality",
      ],
      duration: "45 minutes",
    },
  },
  {
    id: "development-environment",
    title: "Development Environment",
    icon: Cog,
    content: {
      title: "RISC-V Development Environment",
      description: "Complete setup and configuration of the RISC-V software development environment.",
      topics: [
        "GNU toolchain installation",
        "Cross-compilation setup",
        "Simulator configuration (QEMU, Spike)",
        "IDE and editor setup",
        "Debugging tools (GDB, OpenOCD)",
        "Build system configuration",
      ],
      keyPoints: [
        "Install complete toolchain",
        "Configure cross-compilation",
        "Set up simulation environment",
        "Master debugging workflow",
      ],
      duration: "60 minutes",
    },
  },
  {
    id: "lab-exercises",
    title: "Lab Exercises",
    icon: Play,
    content: {
      title: "Hands-On Lab Exercises",
      description: "Practical programming exercises to reinforce RISC-V concepts and skills.",
      topics: [
        "Assembly language programming",
        "Simple arithmetic programs",
        "Control flow exercises",
        "Memory manipulation tasks",
        "Function call conventions",
        "System call usage",
      ],
      keyPoints: [
        "Practice assembly programming",
        "Implement common algorithms",
        "Debug and optimize code",
        "Understand performance implications",
      ],
      duration: "180 minutes",
    },
  },
  {
    id: "resources",
    title: "Resources",
    icon: BookOpen,
    content: {
      title: "Additional Resources and References",
      description: "Comprehensive collection of resources for continued RISC-V learning and development.",
      topics: [
        "Official RISC-V specifications",
        "Online documentation and tutorials",
        "Community forums and support",
        "Open-source projects and examples",
        "Academic papers and research",
        "Industry case studies",
      ],
      keyPoints: [
        "Access official documentation",
        "Join the RISC-V community",
        "Explore open-source projects",
        "Continue learning journey",
      ],
      duration: "Reference material",
    },
  },
]

export default function RISCVWorkshop() {
  const [activeSection, setActiveSection] = useState<string>("overview")

  const currentSection = workshopSections.find((section) => section.id === activeSection) || workshopSections[0]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center gap-3">
            <Cpu className="h-8 w-8 text-blue-600" />
            <div>
              <h1 className="text-2xl font-bold text-gray-900">RISC-V Workshop</h1>
              <p className="text-sm text-gray-600">Interactive Learning Experience</p>
            </div>
          </div>
        </div>
      </header>

      {/* Registration Form Section */}
      <section className="py-8 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="shadow-xl border-0 bg-white backdrop-blur">
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
                  {workshopSections.map((section) => {
                    const IconComponent = section.icon
                    return (
                      <Button
                        key={section.id}
                        variant={activeSection === section.id ? "default" : "ghost"}
                        className="w-full justify-between text-left"
                        onClick={() => setActiveSection(section.id)}
                      >
                        <div className="flex items-center gap-2">
                          <IconComponent className="h-4 w-4" />
                          {section.title}
                        </div>
                        <ChevronRight className="h-4 w-4" />
                      </Button>
                    )
                  })}
                </CardContent>
              </Card>
            </div>

            {/* Main Content */}
            <div className="lg:col-span-3 space-y-8">
              {/* Current Section Content */}
              <Card>
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <currentSection.icon className="h-6 w-6 text-blue-600" />
                    <CardTitle className="text-2xl">{currentSection.content.title}</CardTitle>
                  </div>
                  <CardDescription className="text-base">{currentSection.content.description}</CardDescription>
                  {currentSection.content.duration && (
                    <div className="flex items-center gap-2 mt-3">
                      <Clock className="h-4 w-4 text-gray-500" />
                      <Badge variant="outline">{currentSection.content.duration}</Badge>
                    </div>
                  )}
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Topics Covered */}
                  <div>
                    <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                      <Target className="h-5 w-5 text-green-600" />
                      Topics Covered
                    </h4>
                    <ul className="space-y-2">
                      {currentSection.content.topics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Key Learning Points */}
                  {currentSection.content.keyPoints && (
                    <div>
                      <h4 className="font-semibold text-lg mb-3 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-yellow-600" />
                        Key Learning Points
                      </h4>
                      <div className="grid md:grid-cols-2 gap-3">
                        {currentSection.content.keyPoints.map((point, index) => (
                          <div key={index} className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-700 text-sm">{point}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>

              {/* Instructors */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-blue-600" />
                    Instructors
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">Paul Sherman</p>
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
