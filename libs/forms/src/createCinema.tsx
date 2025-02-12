import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { z } from 'zod'
import { formSchemaCreateCinema } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
export type FormTypeCreateCinema = z.infer<typeof formSchemaCreateCinema>

export const useFormCreateCinema = () =>
  useForm<FormTypeCreateCinema>({
    resolver: zodResolver(formSchemaCreateCinema),
    defaultValues: {
      address: { address: '', lat: 0, lng: 0 },
      cinemaName: '',
      managerName: '',
      screens: [],
    },
  })

export const FormProviderCreateCinema = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateCinema()

  return <FormProvider {...methods}>{children}</FormProvider>
}
