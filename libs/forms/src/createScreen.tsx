import { zodResolver } from '@hookform/resolvers/zod'
import { formSchemaCreateScreen } from './schemas'
import { ReactNode } from 'react'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

export type FormTypeCreateScreen = z.infer<typeof formSchemaCreateScreen>

export const useFormCreateScreen = () =>
  useForm<FormTypeCreateScreen>({
    resolver: zodResolver(formSchemaCreateScreen),
  })

export const FormProviderCreateScreen = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateScreen()

  return <FormProvider {...methods}>{children}</FormProvider>
}
