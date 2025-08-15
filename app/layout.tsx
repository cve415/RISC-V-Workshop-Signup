import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "RISC-V Workshop - Interactive Learning Experience",
  description:
    "Join our comprehensive RISC-V workshop covering architecture fundamentals, instruction sets, and hands-on development.",
  keywords: "RISC-V, workshop, computer architecture, processor design, open source hardware",
  authors: [{ name: "RISC-V Workshop Team" }],
  viewport: "width=device-width, initial-scale=1",
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
