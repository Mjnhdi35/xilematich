'use client'

import { useRouter } from 'next/navigation'
import React from 'react'
import { useToast } from '../molecules/Toaster/use-toast'
import { useMutation } from '@apollo/client'
import { useFormCreateCinema } from '@xilematich/forms/src/createCinema'
import {
  MutationCreateCinemaDocument,
  namedOperations,
} from '@xilematich/network/src/gql/generated'
import { Form } from '../ui/form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { TextArea } from '../ui/textArea'
import { Button } from '../ui/button'

const CreateCinema = () => {
  const { replace } = useRouter()
  const { toast } = useToast()
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    control,
    formState: { errors },
  } = useFormCreateCinema()

  const [createCinemaInput, { data, loading, error }] = useMutation(
    MutationCreateCinemaDocument,
    {
      refetchQueries: [namedOperations.Query.QueryCinemas],
      onCompleted: () => {
        reset()
        toast({ title: 'Cinema created Successfully' })
      },
      onError(error, clientOptions) {
        toast({ title: 'Action failed.', variant: 'destructive' })
      },
    },
  )

  return (
    <div>
      <Form
        onSubmit={handleSubmit(async (formData) => {
          console.log(formData, 'formdaata')

          await createCinemaInput({
            variables: {
              createCinemaInput: {
                name: formData.name,
                managers: [{ id: formData.managerId }],
                address: {
                  address: formData.address.address,
                  lat: formData.address.lat,
                  lng: formData.address.lng,
                },
                screens: formData.screens.map((screen) => ({
                  numberRoom: screen.numberRoom,
                  price: screen.price,
                  projectionType: screen.projectionType,
                  soundSystemType: screen.soundSystemType,
                  columns: screen.columns,
                  rows: screen.rows,
                })),
              },
            },
          })
        })}
      >
        <Label title="Cinema" error={errors.name?.message}>
          <Input placeholder="Cinema name" {...register('name')} />
        </Label>
        <Label title="Manager ID" error={errors.managerId?.message}>
          <Input placeholder="Manager ID" {...register('managerId')} />
        </Label>
        <Label title="Address" error={errors.address?.address?.message}>
          <TextArea placeholder="Address" {...register('address.address')} />
        </Label>
        <Label title="Latitude" error={errors.address?.lat?.message}>
          <Input
            type="number"
            placeholder="Latitude"
            {...register('address.lat', { valueAsNumber: true })}
          />
        </Label>
        <Label title="Longitude" error={errors.address?.lng?.message}>
          <Input
            type="number"
            placeholder="Longitude"
            {...register('address.lng', { valueAsNumber: true })}
          />
        </Label>
        <Button type="submit" loading={loading}>
          Create cinema
        </Button>
      </Form>
    </div>
  )
}
export default CreateCinema
