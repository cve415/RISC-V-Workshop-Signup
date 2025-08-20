"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Cpu, Phone } from "lucide-react"

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
                  src="https://docs.google.com/forms/d/e/1FAIpQLSe_EGmWr1YOUUdg87joPzOjig-vmC7iRriP8bkb0_XRXCRWSg/viewform?embedded=true"
                  width="100%"
                  height="5631"
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

   RISC-V Tech Hub: https://tech.riscv.org/

      {/* Contact Section */}
      <section className="py-12 px-4 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-2xl font-bold mb-8">Questions? Contact:</h3>
          <div className="flex justify-center">
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
