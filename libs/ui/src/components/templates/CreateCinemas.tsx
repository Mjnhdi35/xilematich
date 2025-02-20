'use client'

import React, { useState } from 'react'
import { useMutation } from '@apollo/client'
import {
  MutationCreateCinemaDocument,
  namedOperations,
} from '@xilematich/network/src/gql/generated'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { Form } from '../ui/form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { TextArea } from '../ui/textArea'
import { Button } from '../ui/button'
import { useToast } from '../molecules/Toaster/use-toast'
import {
  FormProviderCreateCinema,
  FormTypeCreateCinema,
  useFormCreateCinema,
} from '@xilematich/forms/src/createCinema'
import { Map } from '../organisms/map/Map'
import { Marker } from '../organisms/map/MapMaker'
import { initialViewState } from '@xilematich/util/constants'
import { Panel } from '../organisms/map/Panel'
import { DefaultZoomControls } from '../organisms/map/ZoomControls'
import { Autocomplete } from '../atoms/Autocomplete'
import { AddScreensInCinema } from '../organisms/AddScreen'

export interface ICreateCinemaProps {}

export const CreateCinemas = () => {
  return (
    <FormProviderCreateCinema>
      <CreateCinemasContent />
    </FormProviderCreateCinema>
  )
}

export const CreateCinemasContent = ({}: ICreateCinemaProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
    resetField,
  } = useFormCreateCinema()
  const [createCinemaInput, { data, loading }] = useMutation(
    MutationCreateCinemaDocument,
  )
  const { toast } = useToast()
  const [open, setOpen] = useState(false)

  return (
    <div className="grid gap-3 md:grid-cols-2">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Success</DialogTitle>
          Cinema created successfully.
        </DialogContent>
      </Dialog>

      <Form>
        <Label title="Cinema">
          <Input placeholder="Cinema" />
        </Label>
        <Label title="ManagerID">
          <Input placeholder="ManagerID" />
        </Label>
        <Label title="Address">
          <TextArea placeholder="Address" />
        </Label>

        <AddScreensInCinema />

        <Button type="submit" loading={loading} className="w-full text-white">
          Create cinema
        </Button>
      </Form>

      <Map initialViewState={initialViewState}>
        <Marker
          latitude={initialViewState.latitude}
          longitude={initialViewState.longitude}
        />

        <Panel position="left-top">
          <Autocomplete options={['Cmt8']} />
        </Panel>

        <Panel position="right-top">
          <DefaultZoomControls />
        </Panel>
      </Map>
    </div>
  )
}
