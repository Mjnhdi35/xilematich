import { IconTrash } from '@tabler/icons-react'
import Image from 'next/image'
import { BaseComponent } from '../../lib/types'
import { useEffect, useState } from 'react'

export interface IImageUploadProps extends BaseComponent {
  srcs?: FileList | string
  clearImage: () => void
}

export const ImagePreview = ({
  srcs,
  clearImage,
  children,
}: IImageUploadProps) => {
  const [previewUrls, setPreviewUrls] = useState<string[]>([])

  useEffect(() => {
    if (srcs) {
      if (typeof srcs === 'string') {
        setPreviewUrls([srcs])
      } else if (srcs instanceof FileList) {
        const urls = Array.from(srcs).map((file) => URL.createObjectURL(file))
        setPreviewUrls(urls)
        return () => urls.forEach(URL.revokeObjectURL)
      }
    } else {
      setPreviewUrls([])
    }
  }, [srcs])

  if (previewUrls.length > 0) {
    return (
      <div className="grid gap-2 relative">
        <button
          onClick={() => clearImage()}
          className="absolute z-10 p-2 text-white bg-red/80 flex gap-2 items-center rounded left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          <IconTrash /> Clear all
        </button>
        {previewUrls.map((url, index) => (
          <Image
            key={index}
            className="object-cover h-full w-full aspect-square"
            alt=""
            width={300}
            height={300}
            src={url}
            priority
          />
        ))}
      </div>
    )
  }

  return (
    <div className="flex items-center justify-center w-full h-full min-h-36">
      {children}
    </div>
  )
}
