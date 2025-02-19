// 'use client'

// import { useRouter } from 'next/navigation'
// import React from 'react'
// import { useToast } from '../molecules/Toaster/use-toast'
// import { useMutation } from '@apollo/client'
// import { useFormCreateCinema } from '@xilematich/forms/src/createCinema'
// import {
//   namedOperations,
//   CinemasDocument,
// } from '@xilematich/network/src/gql/generated'
// import { Form } from '../ui/form'
// import { Label } from '../ui/label'
// import { Input } from '../ui/input'
// import { TextArea } from '../ui/textArea'
// import { Button } from '../ui/button'
// const CreateCinema = () => {
//   const router = useRouter()
//   const { toast } = useToast()
//   const {
//     register,
//     handleSubmit,
//     setValue,
//     reset,
//     control,
//     formState: { errors },
//   } = useFormCreateCinema()

//   const [createCinemaInput, { data, loading, error }] = useMutation(
//     CinemasDocument,
//     {
//       refetchQueries: [namedOperations.Query.Cinemas],
//       onCompleted: () => {
//         reset()
//         toast({ title: 'Cinema created Successfully' })
//       },
//       onError(error, clientOptions) {
//         toast({ title: 'Action failed.', variant: 'destructive' })
//       },
//     },
//   )
//   const onSubmit = handleSubmit(async (data) => {
//     console.log('data', data)
//     await createCinemaInput({
//       variables: {
//         createCinemaInput: {
//           address: {
//             address: data.address.address,
//             lat: data.address.lat,
//             lng: data.address.lng,
//           },
//           screens: [],
//           manager: { id: data.managerId },
//           name: data.name,
//         },
//       },
//     })
//   })
//   console.log('datar', data)

//   return (
//     <div>
//       <Form onSubmit={onSubmit}>
//         <Label title="Cinema" error={errors.name?.message}>
//           <Input placeholder="Cinema name" {...register('name')} />
//         </Label>
//         <Label title="Manager ID" error={errors.managerId?.message}>
//           <Input placeholder="Manager ID" {...register('managerId')} />
//         </Label>

//         <Label title="Address" error={errors.address?.message}>
//           <TextArea placeholder="Address" {...register('address.address')} />
//         </Label>
//         {/* <Label title="Location" error={errors.title?.message}>
//           <ShowLocation />
//         </Label>
//         <AddScreens /> */}

//         <Label title="Latitude" error={errors.address?.lat?.message}>
//           <Input
//             type="number"
//             placeholder="Latitude"
//             {...register('address.lat', { valueAsNumber: true })}
//           />
//         </Label>
//         <Label title="Longitude" error={errors.address?.lng?.message}>
//           <Input
//             type="number"
//             placeholder="Longitude"
//             {...register('address.lng', { valueAsNumber: true })}
//           />
//         </Label>
//         <Button type="submit" loading={loading}>
//           Create cinema
//         </Button>
//       </Form>
//     </div>
//   )
// }

// export default CreateCinema
