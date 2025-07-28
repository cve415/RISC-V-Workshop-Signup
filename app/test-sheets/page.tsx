"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { testGoogleSheetsConnection } from "../actions"

export default function TestSheetsPage() {
  const [testResult, setTestResult] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)

  async function handleTest() {
    setIsLoading(true)
    try {
      const result = await testGoogleSheetsConnection()
      setTestResult(result)
    } catch (error) {
      setTestResult({ success: false, error: "Test failed" })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle>Google Sheets API Test</CardTitle>
            <CardDescription>Test your Google Sheets connection before going live</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Button onClick={handleTest} disabled={isLoading} className="w-full">
              {isLoading ? "Testing Connection..." : "Test Google Sheets Connection"}
            </Button>

            {testResult && (
              <div
                className={`p-4 rounded-lg ${testResult.success ? "bg-green-50 border border-green-200" : "bg-red-50 border border-red-200"}`}
              >
                {testResult.success ? (
                  <div>
                    <h3 className="font-semibold text-green-800 mb-2">✅ Connection Successful!</h3>
                    <div className="text-sm text-green-700 space-y-1">
                      <p>
                        <strong>Spreadsheet:</strong> {testResult.title}
                      </p>
                      <p>
                        <strong>Sheet Count:</strong> {testResult.sheetCount}
                      </p>
                      <div>
                        <strong>Sheets:</strong>
                        <ul className="ml-4 mt-1">
                          {testResult.sheets?.map((sheet: any, index: number) => (
                            <li key={index}>
                              {sheet.title} ({sheet.rowCount} rows, {sheet.columnCount} columns)
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-semibold text-red-800 mb-2">❌ Connection Failed</h3>
                    <p className="text-sm text-red-700">{testResult.error}</p>
                  </div>
                )}
              </div>
            )}

            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
              <h4 className="font-semibold text-blue-800 mb-2">Setup Checklist:</h4>
              <ul className="text-sm text-blue-700 space-y-1">
                <li>✓ Google Sheets API enabled</li>
                <li>✓ Service account created</li>
                <li>✓ Service account has access to spreadsheet</li>
                <li>✓ Environment variables configured</li>
                <li>✓ Spreadsheet headers match expected format</li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
