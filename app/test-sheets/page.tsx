"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, XCircle, AlertCircle, RefreshCw, Copy } from "lucide-react"
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

            {/* Troubleshooting Steps */}
            <Card className="border-orange-200 bg-orange-50">
              <CardHeader>
                <CardTitle className="text-lg flex items-center gap-2">
                  <AlertCircle className="h-5 w-5 text-orange-600" />
                  Troubleshooting Steps
                </CardTitle>
              </CardHeader>
              <CardContent className="text-sm space-y-3">
                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-800">1. Share Spreadsheet with Service Account</h4>
                  <div className="bg-white p-3 rounded border">
                    <p className="mb-2">Add this email to your spreadsheet with Editor permissions:</p>
                    <div className="flex items-center gap-2">
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded flex-1">
                        risc-v-workshop@peak-academy-467021-f8.iam.gserviceaccount.com
                      </code>
                      <Button
                        size="sm"
                        variant="outline"
                        onClick={() => {
                          navigator.clipboard.writeText(
                            "risc-v-workshop@peak-academy-467021-f8.iam.gserviceaccount.com",
                          )
                          alert("Email copied to clipboard!")
                        }}
                      >
                        <Copy className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-800">2. Check Environment Variables</h4>
                  <ul className="list-disc list-inside space-y-1 text-orange-700">
                    <li>GOOGLE_SERVICE_ACCOUNT_EMAIL is set</li>
                    <li>GOOGLE_PRIVATE_KEY is set with proper formatting</li>
                    <li>No extra quotes or spaces in the values</li>
                  </ul>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-800">3. Enable Google Sheets API</h4>
                  <p className="text-orange-700">
                    Make sure Google Sheets API is enabled in your Google Cloud Console for project:
                    peak-academy-467021-f8
                  </p>
                </div>

                <div className="space-y-2">
                  <h4 className="font-semibold text-orange-800">4. Wait for Deployment</h4>
                  <p className="text-orange-700">
                    After updating environment variables, wait 1-2 minutes for your deployment to update
                  </p>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
