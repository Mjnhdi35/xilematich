import { ReactNode } from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { formSchemaCreateShowtime } from './schemas'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'

export type FormTypeCreateShowtime = z.infer<typeof formSchemaCreateShowtime>

export const useFormCreateShowtime = () =>
  useForm<FormTypeCreateShowtime>({
    resolver: zodResolver(formSchemaCreateShowtime),
    defaultValues: { movieId: -99, screenId: -99, showtimes: [] },
    mode: 'onChange',
    reValidateMode: 'onBlur',
  })

export const FormProviderCreateShowtime = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateShowtime()

  return <FormProvider {...methods}>{children}</FormProvider>
}
