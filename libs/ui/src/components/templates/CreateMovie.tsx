'use client'

import React, { useState } from 'react'
import { useFormCreateMovie } from '@xilematich/forms/src/createMovie'
import { useCloudinaryUpload } from '@xilematich/util/hooks/cloudinary'
import { useMutation } from '@apollo/client'
import {
  Genre,
  MutationCreateMovieDocument,
  namedOperations,
} from '@xilematich/network/src/gql/generated'
import { useToast } from '../molecules/Toaster/use-toast'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { Form } from '../ui/form'
import { Controller } from 'react-hook-form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { HtmlSelect } from '../ui/select'
import { ImagePreview } from '../molecules/ImagePreview'
import { ProgressBar } from '../molecules/ProgressBar'
import { Button } from '../ui/button'

export interface ICreateMovieProps {}

export const CreateMovie = ({}: ICreateMovieProps) => {
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors },
    watch,
    resetField,
  } = useFormCreateMovie()
  const { toast } = useToast()

  const [open, setOpen] = useState(false)
  const { uploading, upload, uploadProgress } = useCloudinaryUpload()
  const { posterUrl } = watch()
  const [createMovieInput, { data, loading }] = useMutation(
    MutationCreateMovieDocument,
    {
      refetchQueries: [namedOperations.Query.QueryMovies],
      onCompleted: () => {
        reset()
        toast({ title: 'Movie created successfully.' })
      },
      onError(error, clientOptions) {
        toast({ title: 'Action failed.', variant: 'destructive' })
      },
    },
  )
  const onSubmit = handleSubmit(async (data) => {
    await createMovieInput({
      variables: {
        createMovieInput: {
          title: data.title,
          director: data.director,
          posterUrl: data.posterUrl,
          duration: data.duration,
          genre: data.genre,
          releaseDate: data.releaseDate,
        },
      },
    })
  })
  return (
    <div className="max-w-lg mx-auto">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Success</DialogTitle>
          Movie created successfully!
        </DialogContent>
      </Dialog>

      <Form onSubmit={onSubmit} className="space-y-4">
        <Label title="Title" error={errors.title?.message}>
          <Input placeholder="Title" {...register('title')} />
        </Label>

        <Label title="Director name" error={errors.director?.message}>
          <Input placeholder="Director name" {...register('director')} />
        </Label>

        <Label title="Duration" error={errors.duration?.message}>
          <Input
            placeholder="Duration"
            type="number"
            {...register('duration', { valueAsNumber: true })}
          />
        </Label>

        <Label title="Release date" error={errors.releaseDate?.message}>
          <Input
            placeholder="Release date"
            type="date"
            {...register('releaseDate', {
              setValueAs: (value) => {
                if (!value) return ''
                const date = new Date(value)
                return isNaN(date.getTime()) ? '' : date.toISOString()
              },
            })}
          />
        </Label>

        <Label title="Genre" error={errors.genre?.message}>
          <HtmlSelect placeholder="Select genre" {...register('genre')}>
            {Object.values(Genre).map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </HtmlSelect>
        </Label>

        <Label title="Poster Image">
          <ImagePreview
            srcs={posterUrl}
            clearImage={() => resetField('posterUrl')}
          >
            <Controller
              control={control}
              name={'posterUrl'}
              render={({ field }) => (
                <Input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onChange={async (e) => {
                    const file = e.target.files?.[0]
                    if (file) {
                      try {
                        const url = await upload(file)
                        field.onChange(url)
                      } catch (error) {
                        console.log(error)
                      }
                    }
                  }}
                />
              )}
            />
          </ImagePreview>

          {uploading && <ProgressBar value={uploadProgress} />}

          {errors.posterUrl && (
            <p className="text-red-500">
              {errors.posterUrl.message?.toString()}
            </p>
          )}
        </Label>

        <Button
          type="submit"
          disabled={loading || uploading}
          className="w-full text-white"
        >
          {loading || uploading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </div>
  )
}
