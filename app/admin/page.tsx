"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { ArrowLeft, CheckCircle, FileSpreadsheet, Upload, X } from "lucide-react"

export default function AdminPage() {
  const [file, setFile] = useState<File | null>(null)
  const [uploading, setUploading] = useState(false)
  const [uploadStatus, setUploadStatus] = useState<"idle" | "success" | "error">("idle")
  const [uploadMessage, setUploadMessage] = useState("")

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0])
      setUploadStatus("idle")
    }
  }

  const handleUpload = async () => {
    if (!file) return;
  
    setUploading(true);
    setUploadStatus("idle");
  
    const formData = new FormData();
    formData.append("file", file);
  
    try {
      const res = await fetch("/api/admin/upload", {
        method: "POST",
        body: formData,
      });
  
      const result = await res.json();
  
      if (res.ok) {
        setUploadStatus("success");
        setUploadMessage(result.message);
        console.log("Extracted Data:", result.data);
      } else {
        throw new Error(result.error || "Upload failed");
      }
    } catch (error) {
      setUploadStatus("error");
      setUploadMessage((error as Error).message);
    } finally {
      setUploading(false);
    }
  };
  

  return (
    <div className="container flex min-h-screen flex-col py-8">
      <div className="mb-8 flex items-center gap-2">
        <Link href="/">
          <Button variant="outline" size="icon">
            <ArrowLeft className="h-4 w-4" />
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Admin Panel</h1>
      </div>

      <Card className="mx-auto w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-2xl">Upload College Data</CardTitle>
          <CardDescription>Upload an Excel file with college information and cutoff data</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full gap-6">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="file">Excel File</Label>
              <div className="flex flex-col gap-4">
                <div className="flex h-32 w-full cursor-pointer flex-col items-center justify-center rounded-md border border-dashed border-muted-foreground/25 px-6 py-10 text-center transition-colors hover:border-muted-foreground/50">
                  <Input
                    id="file"
                    type="file"
                    accept=".xlsx,.xls,.csv"
                    className="hidden"
                    onChange={handleFileChange}
                  />
                  <Label htmlFor="file" className="cursor-pointer">
                    <FileSpreadsheet className="mx-auto mb-2 h-8 w-8 text-muted-foreground" />
                    <span className="text-sm font-medium text-muted-foreground">
                      {file ? file.name : "Click to upload Excel file"}
                    </span>
                  </Label>
                </div>

                {file && (
                  <div className="flex items-center justify-between rounded-md border px-3 py-2">
                    <div className="flex items-center gap-2">
                      <FileSpreadsheet className="h-5 w-5 text-muted-foreground" />
                      <span className="text-sm font-medium">{file.name}</span>
                    </div>
                    <Button variant="ghost" size="icon" onClick={() => setFile(null)}>
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {uploadStatus === "success" && (
              <Alert className="border-teal-600 bg-teal-50 text-teal-800 dark:bg-teal-950 dark:text-teal-300">
                <CheckCircle className="h-4 w-4" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>{uploadMessage}</AlertDescription>
              </Alert>
            )}

            {uploadStatus === "error" && (
              <Alert variant="destructive">
                <X className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{uploadMessage}</AlertDescription>
              </Alert>
            )}
          </div>
        </CardContent>
        <CardFooter>
          <Button className="w-full bg-teal-600 hover:bg-teal-700" onClick={handleUpload} disabled={!file || uploading}>
            {uploading ? (
              <>
                <svg
                  className="mr-2 h-4 w-4 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Uploading...
              </>
            ) : (
              <>
                <Upload className="mr-2 h-4 w-4" /> Upload File
              </>
            )}
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
