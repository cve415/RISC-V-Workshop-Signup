"use server"

import { GoogleSpreadsheet } from "google-spreadsheet"
import { JWT } from "google-auth-library"

// UPDATE THIS with your new spreadsheet ID
const SPREADSHEET_ID = "1d9VnqGWPX5lflVZTigzrCqMt5wU8YX6l0fvgVJazcg4"

// Helper function to properly format the private key
function formatPrivateKey(key: string): string {
  if (!key) return ""

  // Remove any extra quotes and whitespace
  let formattedKey = key.trim().replace(/^["']|["']$/g, "")

  // Replace literal \n with actual newlines
  formattedKey = formattedKey.replace(/\\n/g, "\n")

  // Ensure proper formatting
  if (!formattedKey.includes("-----BEGIN PRIVATE KEY-----")) {
    console.error("❌ Private key missing BEGIN header")
  }
  if (!formattedKey.includes("-----END PRIVATE KEY-----")) {
    console.error("❌ Private key missing END footer")
  }

  return formattedKey
}

export async function submitRegistration(formData: FormData) {
  try {
    console.log("🔧 Starting registration process...")

    // Check environment variables
    const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY

    console.log("📧 Service account email:", serviceEmail ? "✅ Set" : "❌ Missing")
    console.log("🔑 Private key:", privateKey ? `✅ Set (${privateKey.length} chars)` : "❌ Missing")

    if (!serviceEmail || !privateKey) {
      throw new Error("Missing Google service account credentials")
    }

    // Format the private key properly
    const formattedKey = formatPrivateKey(privateKey)
    console.log("🔧 Private key formatted, length:", formattedKey.length)

    // Create JWT auth client
    const serviceAccountAuth = new JWT({
      email: serviceEmail,
      key: formattedKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    console.log("🔐 JWT auth client created")

    // Test authentication first
    try {
      await serviceAccountAuth.authorize()
      console.log("✅ JWT authorization successful")
    } catch (authError) {
      console.error("❌ JWT authorization failed:", authError)
      throw new Error(`Authentication failed: ${authError instanceof Error ? authError.message : "Unknown auth error"}`)
    }

    // Initialize the sheet
    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)
    console.log("📊 Loading spreadsheet info...")

    await doc.loadInfo()
    console.log("✅ Sheet loaded:", doc.title)

    // Get the first sheet
    const sheet = doc.sheetsByIndex[0]
    console.log("📋 Using sheet:", sheet.title)

    // Load headers to verify structure
    await sheet.loadHeaderRow()
    console.log("📝 Sheet headers:", sheet.headerValues)

    // Extract form data
    const firstName = formData.get("firstName") as string
    const lastName = formData.get("lastName") as string
    const email = formData.get("email") as string
    const phone = formData.get("phone") as string
    const organization = formData.get("organization") as string
    const role = formData.get("role") as string
    const experience = formData.get("experience") as string
    const dietary = formData.get("dietary") as string
    const emergencyName = formData.get("emergencyName") as string
    const emergencyPhone = formData.get("emergencyPhone") as string

    console.log("📋 Form data:", {
      firstName,
      lastName,
      email,
      phone,
      organization,
      role,
      experience,
      dietary,
      emergencyName,
      emergencyPhone,
    })

    // Add row to spreadsheet
    const newRow = await sheet.addRow({
      "First Name": firstName,
      "Last Name": lastName,
      "Email Address": email,
      "Phone Number": phone,
      "Organization/Company": organization || "Not specified",
      "Role/Title": role || "Not specified",
      "Experience Level with Computer Architecture": experience,
      "Dietary Restrictions/Allergies": dietary || "None",
      "Emergency Contact Name": emergencyName,
      "Emergency Contact Phone": emergencyPhone,
      "Registration Date": new Date().toISOString(),
    })

    console.log("✅ Row added successfully at row number:", newRow.rowNumber)

    return { success: true, message: "Registration successful!" }
  } catch (error) {
    console.error("❌ Error submitting registration:", error)

    // Provide more specific error messages
    let errorMessage = "Failed to submit registration"

    if (error instanceof Error) {
      const message = error.message.toLowerCase()

      if (message.includes("decoder") || message.includes("unsupported")) {
        errorMessage = "Private key format error - please check your GOOGLE_PRIVATE_KEY environment variable"
      } else if (message.includes("credentials") || message.includes("authentication")) {
        errorMessage = "Google Sheets authentication failed - check your service account setup"
      } else if (message.includes("permission")) {
        errorMessage = "Permission denied - make sure the service account has access to the spreadsheet"
      } else if (message.includes("not found")) {
        errorMessage = "Spreadsheet not found - check the spreadsheet ID"
      } else {
        errorMessage = error.message
      }
    }

    return {
      success: false,
      error: errorMessage,
    }
  }
}

export async function testGoogleSheetsConnection() {
  try {
    console.log("🧪 Starting Google Sheets connection test...")

    // Check environment variables
    const serviceEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL
    const privateKey = process.env.GOOGLE_PRIVATE_KEY

    const hasEmail = !!serviceEmail
    const hasKey = !!privateKey

    console.log("Environment check:", { hasEmail, hasKey })
    console.log("Service email:", serviceEmail)
    console.log("Private key length:", privateKey?.length)
    console.log("Private key starts with:", privateKey?.substring(0, 50))

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

    // Format and validate private key
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

    const serviceAccountAuth = new JWT({
      email: serviceEmail,
      key: formattedKey,
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    })

    console.log("🔐 JWT client created")

    // Test authentication explicitly
    try {
      const authResult = await serviceAccountAuth.authorize()
      console.log("✅ JWT authorization successful", authResult)
    } catch (authError) {
      console.error("❌ JWT authorization failed:", authError)

      // More specific error handling
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

    const doc = new GoogleSpreadsheet(SPREADSHEET_ID, serviceAccountAuth)

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

    // Get detailed sheet information
    const sheets = doc.sheetsByIndex.map((sheet) => ({
      title: sheet.title,
      rowCount: sheet.rowCount,
      columnCount: sheet.columnCount,
      sheetId: sheet.sheetId,
    }))

    // Load headers from first sheet
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
