"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, RefreshCw } from "lucide-react"
import { testGoogleSheetsConnection } from "../actions"

export default function TestSheetsPage() {
  const [testResult, setTestResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function handleTest() {
    setIsLoading(true)
    try {
      const result = await testGoogleSheetsConnection()
      setTestResult(result)
      console.log("Test result:", result)
    } catch (error) {
      setTestResult({ success: false, error: "Test failed" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <RefreshCw className="h-6 w-6" />
              Google Sheets API Test
            </CardTitle>
            <CardDescription>Test your Google Sheets connection and verify setup</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleTest} disabled={isLoading} className="w-full" size="lg">
              {isLoading ? (
                <>
                  <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
                  Testing Connection...
                </>
              ) : (
                "🧪 Test Google Sheets Connection"
              )}
            </Button>

            {testResult && (
              <div className="space-y-4">
                {/* Connection Status */}
                <Card className={testResult.success ? "border-green-200 bg-green-50" : "border-red-200 bg-red-50"}>
                  <CardContent className="pt-6">
                    <div className="flex items-center gap-3 mb-4">
                      {testResult.success ? (
                        <CheckCircle className="h-6 w-6 text-green-600" />
                      ) : (
                        <XCircle className="h-6 w-6 text-red-600" />
                      )}
                      <h3 className={`font-semibold text-lg ${testResult.success ? "text-green-800" : "text-red-800"}`}>
                        {testResult.success ? "✅ Connection Successful!" : "❌ Connection Failed"}
                      </h3>
                    </div>

                    {testResult.success ? (
                      <div className="space-y-3 text-sm">
                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <strong>Spreadsheet:</strong> {testResult.title}
                          </div>
                          <div>
                            <strong>Sheet Count:</strong> {testResult.sheetCount}
                          </div>
                        </div>

                        <div>
                          <strong>Service Account:</strong> {testResult.serviceAccountEmail}
                        </div>

                        <div>
                          <strong>Spreadsheet ID:</strong>
                          <code className="ml-2 text-xs bg-white px-2 py-1 rounded">{testResult.spreadsheetId}</code>
                        </div>

                        {testResult.headers && (
                          <div>
                            <strong>Column Headers:</strong>
                            <div className="flex flex-wrap gap-1 mt-1">
                              {testResult.headers.map((header: string, index: number) => (
                                <Badge key={index} variant="secondary" className="text-xs">
                                  {header}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    ) : (
                      <div className="space-y-2 text-sm text-red-700">
                        <p>
                          <strong>Error:</strong> {testResult.error}
                        </p>
                        {testResult.hasCredentials && (
                          <div>
                            <strong>Credentials Status:</strong>
                            <ul className="ml-4 mt-1">
                              <li>Email: {testResult.hasCredentials.email ? "✅ Set" : "❌ Missing"}</li>
                              <li>Private Key: {testResult.hasCredentials.key ? "✅ Set" : "❌ Missing"}</li>
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>

                {/* Sheet Details */}
                {testResult.success && testResult.sheets && (
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-lg">Sheet Details</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-2">
                        {testResult.sheets.map((sheet: any, index: number) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <strong>{sheet.title}</strong>
                              <span className="text-sm text-gray-600 ml-2">(ID: {sheet.sheetId})</span>
                            </div>
                            <div className="text-sm text-gray-600">
                              {sheet.rowCount} rows × {sheet.columnCount} columns
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            )}

            {/* Setup Instructions */}
            <Card className="border-blue-200 bg-blue-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-blue-600" />
                  Setup Checklist
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Google Sheets API enabled in Google Cloud Console</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Service account created with JSON key downloaded</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Service account email added to spreadsheet with Editor permissions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Environment variables GOOGLE_SERVICE_ACCOUNT_EMAIL and GOOGLE_PRIVATE_KEY set</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span>Spreadsheet has correct column headers</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
