'use client'

import { useState } from 'react'

export const useCloudinaryUpload = () => {
  const [uploading, setUploading] = useState(false)
  const [uploadProgress, setUploadProgress] = useState(0)
  const upload = async (file: File) => {
    setUploading(true)
    setUploadProgress(0)
    try {
      const formData = new FormData()
      formData.append('file', file)
      formData.append(
        'upload_preset',
        process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!,
      )

      const response = await fetch(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
        {
          method: 'POST',
          body: formData,
        },
      )

      if (!response.ok) throw new Error('Upload failed')

      const data = await response.json()
      return data.secure_url as string
    } catch (error) {
      throw new Error('Upload failed')
    } finally {
      setUploading(false)
      setUploadProgress(100)
    }
  }

  return { upload, uploading, uploadProgress }
}
