import { zodResolver } from '@hookform/resolvers/zod'
import { formSchemaCreateAddress } from './schemas'
import { ReactNode } from 'react'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'

export type FormTypeCreateAddress = z.infer<typeof formSchemaCreateAddress>

export const useFormCreateAddress = () =>
  useForm<FormTypeCreateAddress>({
    resolver: zodResolver(formSchemaCreateAddress),
    defaultValues: {
      address: '',
      lat: 0,
      lng: 0,
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
  })

export const FormProviderCreateAddress = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateAddress()

  return <FormProvider {...methods}>{children}</FormProvider>
}
