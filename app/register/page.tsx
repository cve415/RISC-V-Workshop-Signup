"use client"

import { useEffect } from "react"

export default function RegisterPage() {
  useEffect(() => {
    // Redirect to the HTML form page
    window.location.href = "/form/page.html"
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-green-50 flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Redirecting to registration form...</p>
      </div>
    </div>
  )
}
