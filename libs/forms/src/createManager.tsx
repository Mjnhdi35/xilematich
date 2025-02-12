import { z } from 'zod'
import { schemaCreateManager } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { FormProvider, useForm } from 'react-hook-form'
import { ReactNode } from 'react'

export type FormTypeCreateManager = z.infer<typeof schemaCreateManager>

export const useFormCreateManager = () =>
  useForm<FormTypeCreateManager>({
    resolver: zodResolver(schemaCreateManager),
  })

export const FormProviderCreateManager = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateManager()

  return <FormProvider {...methods}>{children}</FormProvider>
}
