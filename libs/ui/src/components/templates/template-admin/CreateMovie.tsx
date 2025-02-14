import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Dialog, DialogTitle } from '../../ui/dialog'
import { Form } from '../../ui/form'
import { Label } from '../../ui/label'
import { Input } from '../../ui/input'
import {
  Genre,
  MutationCreateMovieDocument,
  namedOperations,
} from '@xilematich/network/src/gql/generated'
import { HtmlSelect } from '../../ui/select'
import { ProgressBar } from '../../molecules/ProgressBar'
import { Button } from '../../ui/button'
import { useFormCreateMovie } from '@xilematich/forms/src/createMovie'
import { useMutation } from '@apollo/client'
import { useCloudinaryUpload } from '@xilematich/util/hooks/cloudinary'
import { useToast } from '../../molecules/Toaster/use-toast'

export interface ICreateMovieProps {}

export const CreateMovie = ({}: ICreateMovieProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
  } = useFormCreateMovie()
  const { toast } = useToast()
  const [createMovie, { loading, data }] = useMutation(
    MutationCreateMovieDocument,
    {
      onCompleted: () => {
        reset(), toast({ title: `create movie ${data?.createMovie.id}` })
      },
      onError: () => {},
    },
  )
  const [open, setOpen] = useState(false)
  const { uploading, upload } = useCloudinaryUpload()

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle>Success</DialogTitle>
        Movie created.
      </Dialog>
      <Form
        onSubmit={handleSubmit(
          async ({
            director,
            duration,
            genre,
            posterUrl,
            releaseDate,
            title,
          }) => {
            const uploadedImages = await upload(posterUrl)

            await createMovie({
              variables: {
                createMovieInput: {
                  id: '',
                  director,
                  duration,
                  genre,
                  posterUrl: uploadedImages[0],
                  releaseDate,
                  title,
                },
              },
              refetchQueries: [namedOperations.Query.Movies],
            })
            reset()
            setOpen(true)
          },
        )}
      >
        <Label title="title" error={errors.title?.message}>
          <Input placeholder="Title" {...register('title')} />
        </Label>
        <Label title="director name" error={errors.director?.message}>
          <Input placeholder="Director name" {...register('director')} />
        </Label>
        <Label title="Duration" error={errors.duration?.message}>
          <Input
            placeholder="Duration"
            {...register('duration', { valueAsNumber: true })}
          />
        </Label>
        <Label title="Release date" error={errors.releaseDate?.message}>
          <Input
            placeholder="Release date"
            type="date"
            {...register('releaseDate')}
          />
        </Label>
        <Label title="Genre" error={errors.genre?.message}>
          <HtmlSelect placeholder="projection type" {...register(`genre`)}>
            {Object.values(Genre).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </HtmlSelect>
        </Label>
        <Label title="Images" error={errors.posterUrl?.message?.toString()}>
          <Controller
            control={control}
            name={`posterUrl`}
            render={({ field }) => (
              <Input
                type="file"
                accept="image/*"
                multiple={false}
                onChange={(e) => field.onChange(e?.target?.files)}
              />
            )}
          />
          {uploading && <ProgressBar value={Number(upload)} />}
        </Label>
        <Button loading={loading} type="submit">
          Submit
        </Button>
      </Form>
    </div>
  )
}
