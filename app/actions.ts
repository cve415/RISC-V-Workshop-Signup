"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

const SPREADSHEET_ID = "1EbEdk_iJRDi8Bv9RAHsuM9S--wbAEpGLqvpkY2XYbZ8"

// For testing, we'll use environment variables instead of the JSON file
export async function submitRegistration(formData: FormData) {
  try {
    // Create JWT auth client using environment variables
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    console.log("Connecting to Google Sheets...")

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    console.log("Sheet loaded:", doc.title)

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]
    console.log("Using sheet:", sheet.title)

    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const organization = formData.get("organization") as string
    const experience = formData.get("experience") as string

    console.log("Adding row with data:", { firstName, lastName, email, organization, experience })

    // Add row to spreadsheet
    const newRow = await sheet.addRow({
      "First Name": firstName,
      "Last Name": lastName,
      Email: email,
      Organization: organization,
      "Experience Level": experience,
      "Registration Date": new Date().toISOString(),
    })

    console.log("Row added successfully:", newRow.rowNumber)

    return { success: true, message: "Registration successful!" }
  } catch (error) {
    console.error("Error submitting registration:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Failed to submit registration",
    }
  }
}

// Test function to verify connection
export async function testGoogleSheetsConnection() {
  try {
    const serviceAccountAuth = new JWT({
      email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)
    await doc.loadInfo()

    return {
      success: true,
      title: doc.title,
      sheetCount: doc.sheetCount,
      sheets: doc.sheetsByIndex.map((sheet) => ({
        title: sheet.title,
        rowCount: sheet.rowCount,
        columnCount: sheet.columnCount,
      })),
    }
  } catch (error) {
    return {
      success: false,
      error: error instanceof Error ? error.message : "Connection failed",
    }
  }
}
