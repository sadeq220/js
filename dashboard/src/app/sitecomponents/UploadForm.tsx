"use client"

import * as React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Upload, X } from "lucide-react"

export default function UploadForm() {
    const [files, setFiles] = React.useState<File[]>([])
    const [uploading, setUploading] = React.useState(false)
    const fileInputRef = React.useRef<HTMLInputElement>(null)

    const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files) {
            setFiles(prevFiles => [...prevFiles, ...Array.from(event.target.files || [])])
        }
    }

    const handleRemoveFile = (fileToRemove: File) => {
        setFiles(prevFiles => prevFiles.filter(file => file !== fileToRemove))
    }

    const handleUploadClick = () => {
        fileInputRef.current?.click()
    }

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (files.length === 0) return

        setUploading(true)

        // Simulating file upload
        await new Promise(resolve => setTimeout(resolve, 2000))

        // Here you would typically send the files to your server
        console.log("Files uploaded:", files.map(file => file.name))

        setUploading(false)
        setFiles([])
        if (fileInputRef.current) {
            fileInputRef.current.value = ''
        }
    }

    return (
        <Card className="w-full max-w-md">
            <CardHeader>
                <CardTitle>Upload Files</CardTitle>
            </CardHeader>
            <form onSubmit={handleSubmit}>
                <CardContent className="space-y-4">
                    <div className="flex flex-col items-center justify-center space-y-2">
                        <input
                            ref={fileInputRef}
                            type="file"
                            onChange={handleFileChange}
                            className="hidden"
                            multiple
                            id="file-upload"
                        />
                        <Button
                            type="button"
                            variant="outline"
                            size="lg"
                            className="w-full h-32 border-dashed"
                            onClick={handleUploadClick}
                        >
                            <div className="flex flex-col items-center space-y-2">
                                <Upload className="h-8 w-8" />
                                <span>Click to upload files</span>
                            </div>
                        </Button>
                    </div>
                    {files.length > 0 && (
                        <div className="space-y-2">
                            <h3 className="text-sm font-medium">Selected Files:</h3>
                            <ul className="space-y-1">
                                {files.map((file, index) => (
                                    <li key={index} className="flex items-center justify-between text-sm text-muted-foreground bg-secondary rounded-md p-2">
                                        <span className="truncate max-w-[200px]">{file.name}</span>
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            onClick={() => handleRemoveFile(file)}
                                            className="h-6 w-6 p-0"
                                        >
                                            <X className="h-4 w-4" />
                                            <span className="sr-only">Remove {file.name}</span>
                                        </Button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </CardContent>
                <CardFooter>
                    <Button type="submit" className="w-full" disabled={files.length === 0 || uploading}>
                        {uploading ? "Uploading..." : "Upload"}
                    </Button>
                </CardFooter>
            </form>
        </Card>
    )
}