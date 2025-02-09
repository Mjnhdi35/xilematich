'use client'

import * as React from 'react'
import * as LabelPrimitive from '@radix-ui/react-label'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '../../lib/utils'

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
)

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants> & { error?: string } & {
      optional?: boolean
    }
>(({ className, title, children, error, optional, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  >
    <div className="flex items-baseline justify-between">
      <div className="mb-1 font-semibold capitalize">{title}</div>
      <div className="text-xs text-gray-600 ">
        {optional ? '(optional)' : null}
      </div>
    </div>
    {children}
    <div className="mt-2 font-normal text-red-500 mb-4">{error}</div>
  </LabelPrimitive.Root>
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
