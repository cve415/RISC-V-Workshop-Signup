"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

const SPREADSHEET_ID = "1d9VnqGWPX5lflVZTigzrCqMt5wU8YX6l0fvgVJazcg4"

// Properly format multiline private key
function formatPrivateKey(key: string): string {
  return key
    .trim()
    .replace(/^["']|["']$/g, "")
    .replace(/\\n/g, "\n")
}

export async function submitRegistration(formData: FormData) {
  try {
    const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY

    if (!serviceEmail || !privateKey) {
      throw new Error("Missing service account credentials")
    }

    const auth = new JWT({
      email: serviceEmail,
      key: formatPrivateKey(privateKey),
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    await auth.authorize()

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth)
    await doc.loadInfo()

    const sheet = doc.sheetsByTitle["Form Responses 1"]
    if (!sheet) throw new Error("Sheet 'Form Responses 1' not found")

    await sheet.loadHeaderRow()

    const row = {
      "First Name": formData.get("firstName") ?? "",
      "Last Name": formData.get("lastName") ?? "",
      "Email Address": formData.get("email") ?? "",
      "Phone Number": formData.get("phone") ?? "",
      "Organization/Company": formData.get("organization") ?? "",
      "Role/Title": formData.get("role") ?? "",
      "Experience Level with Computer Architecture": formData.get("experience") ?? "",
      "Dietary Restrictions/Allergies": formData.get("dietary") ?? "",
      "Emergency Contact Name": formData.get("emergencyName") ?? "",
      "Emergency Contact Phone": formData.get("emergencyPhone") ?? "",
      "Registration Date": new Date().toISOString(),
    }

    await sheet.addRow(row)

    return { success: true, message: "Registration successful" }
  } catch (error) {
    console.error("Registration failed:", error)
    return {
      success: false,
      error: error instanceof Error ? error.message : "Unknown error",
    }
  }
}

export async function testGoogleSheetsConnection() {
  try {
    console.log("🧪 Starting Google Sheets connection test...")

    const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY

    const hasEmail = !!serviceEmail
    const hasKey = !!privateKey

    console.log("Environment check:", { hasEmail, hasKey })

    if (!hasEmail || !hasKey) {
      return {
        success: false,
        error: "Missing environment variables",
        details: {
          hasEmail,
          hasKey,
          serviceEmail: serviceEmail || "NOT SET",
          privateKeyLength: privateKey?.length || 0,
          spreadsheetId: SPREADSHEET_ID,
        },
      }
    }

    const formattedKey = formatPrivateKey(privateKey)

    const keyValidation = {
      hasBeginHeader: formattedKey.includes("-----BEGIN PRIVATE KEY-----"),
      hasEndFooter: formattedKey.includes("-----END PRIVATE KEY-----"),
      hasNewlines: formattedKey.includes("\n"),
      length: formattedKey.length,
      firstLine: formattedKey.split("\n")[0],
      lastLine: formattedKey.split("\n").slice(-1)[0],
    }

    console.log("🔑 Private key validation:", keyValidation)

    if (!keyValidation.hasBeginHeader || !keyValidation.hasEndFooter) {
      return {
        success: false,
        error: "Invalid private key format - missing headers",
        keyValidation,
        spreadsheetId: SPREADSHEET_ID,
        serviceAccountEmail: serviceEmail,
      }
    }

    const auth = new JWT({
      email: serviceEmail,
      key: formattedKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    console.log("🔐 JWT client created")

    try {
      await auth.authorize()
      console.log("✅ JWT authorization successful")
    } catch (authError) {
      console.error("❌ JWT authorization failed:", authError)

      let errorMessage = "Authentication failed"
      if (authError instanceof Error) {
        if (authError.message.includes("invalid_grant")) {
          errorMessage = "Invalid private key or service account email"
        } else if (authError.message.includes("access_denied")) {
          errorMessage = "Service account access denied"
        } else {
          errorMessage = authError.message
        }
      }

      return {
        success: false,
        error: errorMessage,
        authError: authError instanceof Error ? authError.message : "Unknown auth error",
        keyValidation,
        spreadsheetId: SPREADSHEET_ID,
        serviceAccountEmail: serviceEmail,
      }
    }

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, auth)

    try {
      await doc.loadInfo()
      console.log("📊 Document loaded successfully")
    } catch (docError) {
      console.error("❌ Document load failed:", docError)

      let errorMessage = "Failed to load spreadsheet"
      if (docError instanceof Error) {
        if (docError.message.includes("not found")) {
          errorMessage = "Spreadsheet not found - check the ID"
        } else if (docError.message.includes("permission")) {
          errorMessage = "No permission to access spreadsheet - check sharing"
        } else {
          errorMessage = docError.message
        }
      }

      return {
        success: false,
        error: errorMessage,
        docError: docError instanceof Error ? docError.message : "Unknown doc error",
        keyValidation,
        spreadsheetId: SPREADSHEET_ID,
        serviceAccountEmail: serviceEmail,
      }
    }

    const sheets = doc.sheetsByIndex.map((sheet) => ({
      title: sheet.title,
      rowCount: sheet.rowCount,
      columnCount: sheet.columnCount,
      sheetId: sheet.sheetId,
    }))

    const firstSheet = doc.sheetsByIndex[0]
    await firstSheet.loadHeaderRow()

    return {
      success: true,
      title: doc.title,
      sheetCount: doc.sheetCount,
      sheets,
      headers: firstSheet.headerValues,
      spreadsheetId: SPREADSHEET_ID,
      serviceAccountEmail: serviceEmail,
      keyValidation,
    }
  } catch (error) {
    console.error("❌ Connection test failed:", error)

    return {
      success: false,
      error: error instanceof Error ? error.message : "Connection failed",
      spreadsheetId: SPREADSHEET_ID,
      hasCredentials: {
        email: !!process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        key: !!process.env.GOOGLE_PRIVATE_KEY,
      },
      rawError: error instanceof Error ? error.stack : "Unknown error",
    }
  }
}
