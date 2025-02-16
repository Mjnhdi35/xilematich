'use client'

import React, { useState } from 'react'
import {
  FormTypeCreateMovie,
  useFormCreateMovie,
} from '@xilematich/forms/src/createMovie'
import { useCloudinaryUpload } from '@xilematich/util/hooks/cloudinary'
import { useMutation } from '@apollo/client'
import {
  Genre,
  MutationCreateMovieDocument,
  namedOperations,
} from '@xilematich/network/src/gql/generated'
import { useToast } from '../molecules/Toaster/use-toast'
import { useRouter } from 'next/navigation'
import { Dialog, DialogContent, DialogTitle } from '../ui/dialog'
import { Form } from '../ui/form'
import { Controller, useFormContext } from 'react-hook-form'
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
  } = useFormCreateMovie()
  const { toast } = useToast()

  const [open, setOpen] = useState(false)
  const { uploading, upload } = useCloudinaryUpload()
  const { posterUrl } = watch()
  const [createMovieInput, { data, loading }] = useMutation(
    MutationCreateMovieDocument,
    {
      refetchQueries: [namedOperations.Query.Movies],
      onCompleted: () => {
        reset()
        toast({ title: 'Movie created successfully.' })
      },
      onError(error, clientOptions) {
        toast({ title: 'Action failed.', variant: 'destructive' })
      },
    },
  )
  console.log('Form Data:', data)
  console.log('Loading:', loading, 'Uploading:', uploading)
  return (
    <div className="max-w-lg mx-auto">
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogTitle>Success</DialogTitle>
          Movie created successfully!
        </DialogContent>
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
            id,
          }) => {
            const file = posterUrl?.[0] || null
            let uploadedUrl = ''

            if (file) {
              const uploadedImages = await upload(file)
              uploadedUrl = uploadedImages[0]
            }

            await createMovieInput({
              variables: {
                createMovieInput: {
                  id,
                  director,
                  duration,
                  genre,
                  posterUrl: uploadedUrl,
                  releaseDate,
                  title,
                },
              },
            })
          },
        )}
        className="space-y-4"
      >
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
            srcs={posterUrl[0]}
            clearImage={() => reset({ posterUrl: '' })}
          >
            <Controller
              control={control}
              name="posterUrl"
              render={({ field }) => (
                <Input
                  type="file"
                  accept="image/*"
                  multiple={false}
                  onChange={(e) => field.onChange(e.target.files)}
                />
              )}
            />
          </ImagePreview>

          {uploading && <ProgressBar value={1} />}

          {errors.posterUrl && (
            <p className="text-red-500">
              {errors.posterUrl.message?.toString()}
            </p>
          )}
        </Label>

        <Button
          type="submit"
          disabled={loading || uploading}
          className="w-full"
        >
          {loading || uploading ? 'Submitting...' : 'Submit'}
        </Button>
      </Form>
    </div>
  )
}
