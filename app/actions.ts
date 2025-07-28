"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"
import serviceAccount from "../lib/service-account.json"

const SPREADSHEET_ID = "1EbEdk_iJRDi8Bv9RAHsuM9S--wbAEpGLqvpkY2XYbZ8"

export async function submitRegistration(formData: FormData) {
  try {
    // Create JWT auth client
    const serviceAccountAuth = new JWT({
      email: serviceAccount.client_email,
      key: serviceAccount.private_key,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]

    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const organization = formData.get("organization") as string
    const experience = formData.get("experience") as string

    // Add row to spreadsheet
    await sheet.addRow({
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      Organization: organization,
      "Experience Level": experience,
      "Registration Date": new Date().toISOString(),
    })

    return { success: true }
  } catch (error) {
    console.error("Error submitting registration:", error)
    return { success: false, error: "Failed to submit registration" }
  }
}
