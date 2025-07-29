"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { AlertCircle, Key, CheckCircle, XCircle, Copy } from "lucide-react"

export default function DebugKeyPage() {
  const [keyInput, setKeyInput] = useState("")
  const [analysis, setAnalysis] = useState<any>(null)

  function analyzeKey() {
    if (!keyInput.trim()) {
      setAnalysis({ error: "Please paste your private key" })
      return
    }

    const key = keyInput.trim()

    const analysis = {
      originalLength: keyInput.length,
      trimmedLength: key.length,
      hasBeginHeader: key.includes("-----BEGIN PRIVATE KEY-----"),
      hasEndFooter: key.includes("-----END PRIVATE KEY-----"),
      hasLiteralNewlines: key.includes("\\n"),
      hasActualNewlines: key.includes("\n"),
      startsWithQuote: key.startsWith('"') || key.startsWith("'"),
      endsWithQuote: key.endsWith('"') || key.endsWith("'"),
      lineCount: key.split("\n").length,
      firstLine: key.split("\n")[0],
      lastLine: key.split("\n").slice(-1)[0],
    }

    // Generate corrected version
    let correctedKey = key

    // Remove quotes
    if (analysis.startsWithQuote || analysis.endsWithQuote) {
      correctedKey = correctedKey.replace(/^["']|["']$/g, "")
    }

    // Replace literal \n with actual newlines
    if (analysis.hasLiteralNewlines) {
      correctedKey = correctedKey.replace(/\\n/g, "\n")
    }

    setAnalysis({
      ...analysis,
      correctedKey,
      isValid:
        correctedKey.includes("-----BEGIN PRIVATE KEY-----") &&
        correctedKey.includes("-----END PRIVATE KEY-----") &&
        correctedKey.includes("\n"),
    })
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto space-y-6">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Key className="h-6 w-6" />
              Private Key Debugger
            </CardTitle>
            <CardDescription>Paste your private key here to analyze and fix formatting issues</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">Paste your GOOGLE_PRIVATE_KEY value here:</label>
              <Textarea
                value={keyInput}
                onChange={(e) => setKeyInput(e.target.value)}
                placeholder="-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCB8Sj8M/QUGCPJ\n...\n-----END PRIVATE KEY-----"
                className="min-h-[200px] font-mono text-sm"
              />
            </div>

            <Button onClick={analyzeKey} className="w-full">
              Analyze Private Key
            </Button>

            {analysis && (
              <div className="space-y-4">
                {analysis.error ? (
                  <Card className="border-red-200 bg-red-50">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 text-red-800">
                        <XCircle className="h-5 w-5" />
                        <span>{analysis.error}</span>
                      </div>
                    </CardContent>
                  </Card>
                ) : (
                  <>
                    {/* Analysis Results */}
                    <Card
                      className={analysis.isValid ? "border-green-200 bg-green-50" : "border-yellow-200 bg-yellow-50"}
                    >
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-lg">
                          {analysis.isValid ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <AlertCircle className="h-5 w-5 text-yellow-600" />
                          )}
                          Key Analysis Results
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-4 text-sm">
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Has BEGIN header:</span>
                              <Badge variant={analysis.hasBeginHeader ? "default" : "destructive"}>
                                {analysis.hasBeginHeader ? "✅ Yes" : "❌ No"}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Has END footer:</span>
                              <Badge variant={analysis.hasEndFooter ? "default" : "destructive"}>
                                {analysis.hasEndFooter ? "✅ Yes" : "❌ No"}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Has actual newlines:</span>
                              <Badge variant={analysis.hasActualNewlines ? "default" : "destructive"}>
                                {analysis.hasActualNewlines ? "✅ Yes" : "❌ No"}
                              </Badge>
                            </div>
                          </div>
                          <div className="space-y-2">
                            <div className="flex items-center justify-between">
                              <span>Has literal \\n:</span>
                              <Badge variant={analysis.hasLiteralNewlines ? "destructive" : "default"}>
                                {analysis.hasLiteralNewlines ? "⚠️ Yes" : "✅ No"}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Wrapped in quotes:</span>
                              <Badge
                                variant={analysis.startsWithQuote || analysis.endsWithQuote ? "destructive" : "default"}
                              >
                                {analysis.startsWithQuote || analysis.endsWithQuote ? "⚠️ Yes" : "✅ No"}
                              </Badge>
                            </div>
                            <div className="flex items-center justify-between">
                              <span>Line count:</span>
                              <Badge variant="secondary">{analysis.lineCount}</Badge>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>

                    {/* Corrected Key */}
                    {analysis.correctedKey && (
                      <Card>
                        <CardHeader>
                          <CardTitle className="text-lg">Corrected Private Key</CardTitle>
                          <CardDescription>Use this formatted version in your environment variable</CardDescription>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-3">
                            <Textarea
                              value={analysis.correctedKey}
                              readOnly
                              className="min-h-[200px] font-mono text-sm"
                            />

                            <div className="flex gap-2">
                              <Button
                                onClick={() => {
                                  navigator.clipboard.writeText(analysis.correctedKey)
                                  alert("Private key copied to clipboard!")
                                }}
                                variant="outline"
                                size="sm"
                              >
                                <Copy className="h-4 w-4 mr-2" />
                                Copy Corrected Key
                              </Button>
                            </div>

                            <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                              <h4 className="font-semibold text-blue-800 mb-2">
                                How to Update Your Environment Variable:
                              </h4>
                              <div className="text-sm text-blue-700 space-y-2">
                                <p>
                                  <strong>For Vercel:</strong>
                                </p>
                                <ol className="list-decimal list-inside space-y-1 ml-2">
                                  <li>Go to Vercel Dashboard → Your Project → Settings → Environment Variables</li>
                                  <li>Find GOOGLE_PRIVATE_KEY and click "Edit"</li>
                                  <li>Delete the current value completely</li>
                                  <li>Paste the corrected key from above (use the Copy button)</li>
                                  <li>Click "Save"</li>
                                  <li>Redeploy your project or wait for auto-deployment</li>
                                </ol>

                                <p className="mt-3">
                                  <strong>For Local Development (.env.local):</strong>
                                </p>
                                <pre className="bg-white p-2 rounded text-xs overflow-x-auto">
                                  GOOGLE_PRIVATE_KEY="{analysis.correctedKey.replace(/\n/g, "\\n")}"
                                </pre>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    )}
                  </>
                )}
              </div>
            )}
          </CardContent>
        </Card>

        {/* Instructions */}
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <AlertCircle className="h-5 w-5 text-blue-600" />
              Common Private Key Issues
            </CardTitle>
          </CardHeader>
          <CardContent className="text-sm space-y-2">
            <div>
              <strong>1. Literal \n characters:</strong> Your key contains \\n instead of actual line breaks
            </div>
            <div>
              <strong>2. Missing quotes:</strong> In environment variables, wrap the entire key in quotes
            </div>
            <div>
              <strong>3. Extra quotes:</strong> Don't add extra quotes around an already quoted key
            </div>
            <div>
              <strong>4. Missing headers:</strong> Key must start with -----BEGIN PRIVATE KEY----- and end with -----END
              PRIVATE KEY-----
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
