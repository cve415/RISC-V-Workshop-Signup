"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Cpu, Users, BookOpen, Code, Zap, Phone } from "lucide-react";

export default function RISCVWorkshop() {
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

      {/* Registration Form Section */}
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

      {/* Workshop Content */}
      <section className="py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">RISC-V Workshop Content</h3>
          <p className="text-lg text-gray-600 mb-8">Comprehensive learning modules and hands-on exercises</p>

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

            {/* Fundamentals Tab */}
            <TabsContent value="fundamentals">
              {/* Include your fundamentals content here */}
            </TabsContent>

            {/* Programming Tab */}
            <TabsContent value="programming">
              {/* Include your programming content here */}
            </TabsContent>

            {/* Implementation Tab */}
            <TabsContent value="implementation">
              {/* Include your implementation content here */}
            </TabsContent>

            {/* Advanced Tab */}
            <TabsContent value="advanced">
              {/* Include your advanced content here */}
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
  );
}
