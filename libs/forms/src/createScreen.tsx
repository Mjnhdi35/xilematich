import { zodResolver } from '@hookform/resolvers/zod'
import { formSchemaCreateScreen } from './schemas'
import { ReactNode } from 'react'
import { z } from 'zod'
import { FormProvider, useForm } from 'react-hook-form'
import {
  ProjectionType,
  SoundSystemType,
} from '@xilematich/network/src/gql/generated'

export type FormTypeCreateScreen = z.infer<typeof formSchemaCreateScreen>

export const useFormCreateScreen = () =>
  useForm<FormTypeCreateScreen>({
    resolver: zodResolver(formSchemaCreateScreen),
    defaultValues: {
      columns: 8,
      rows: 5,
      numberRoom: 0,
      price: 49,
      projectionType: ProjectionType.Imax,
      soundSystemType: SoundSystemType.ImaxEnhanced,
    },
    mode: 'onChange',
    reValidateMode: 'onBlur',
  })

export const FormProviderCreateScreen = ({
  children,
}: {
  children: ReactNode
}) => {
  const methods = useFormCreateScreen()

  return <FormProvider {...methods}>{children}</FormProvider>
}
