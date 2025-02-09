'use client'

import { useMutation } from '@apollo/client'
import { signIn } from 'next-auth/react'
import Link from 'next/link'
import { Role } from '../../lib/types'
import { Form } from '../ui/form'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useFormRegister } from '@xilematich/forms/src/register'
import { RegisterWithCredentialsDocument } from '@xilematich/network/src/gql/generated'
export interface ISignupFormProps {
  className?: string
  role?: Role
}
export const RegisterForm = ({ className, role }: ISignupFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormRegister()

  const [registerWithCredentials, { loading, data }] = useMutation(
    RegisterWithCredentialsDocument,
  )

  return (
    <Form
      onSubmit={handleSubmit(async (formData) => {
        const { data, errors } = await registerWithCredentials({
          variables: {
            registerWithCredentialsInput: formData,
          },
        })

        if (errors) {
          alert(errors)
        }

        if (data) {
          alert(`User ${data.registerWithCredentials.id} created. 🎉`)
          signIn('credentials', {
            email: formData.email,
            password: formData.password,
            callbackUrl: '/',
          })
        }
      })}
    >
      <Label title="Email" error={errors.email?.message}>
        <Input
          className="text-black"
          placeholder="Enter the email."
          {...register('email')}
        />
      </Label>
      <Label title="Password" error={errors.password?.message}>
        <Input
          className="text-black"
          type="password"
          placeholder="······"
          {...register('password')}
        />
      </Label>
      <Label title="Display name" error={errors.name?.message}>
        <Input
          className="text-black"
          placeholder="Enter your name."
          {...register('name')}
        />
      </Label>
      {Object.keys(errors).length ? (
        <div className="text-xs text-gray-600">
          Please fix the above {Object.keys(errors).length} errors
        </div>
      ) : null}
      <Button type="submit" loading={loading} className="text-yellow-50">
        Register
      </Button>
      <div className="mt-4 text-sm ">
        Already have an autospace account?
        <br />
        <Link href="/login" className="font-bold underline underline-offset-4">
          Login
        </Link>{' '}
        now.
      </div>
    </Form>
  )
}
