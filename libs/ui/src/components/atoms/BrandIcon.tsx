import { PopcornIcon } from 'lucide-react'
import { ReactNode } from 'react'

export interface IBrandIconProps {
  children?: ReactNode
}

export const BrandIcon = ({
  children = (
    <div className="shadow bg-gradient-to-r to-primary-500 from-cyan-500">
      <PopcornIcon size={34} />
    </div>
  ),
}: IBrandIconProps) => {
  return (
    <div className="inline-block overflow-hidden">
      <div className="flex items-center justify-center ">{children}</div>
    </div>
  )
}
