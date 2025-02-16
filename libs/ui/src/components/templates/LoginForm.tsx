'use client'

import { useFormLogin } from '@xilematich/forms/src/login'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import Link from 'next/link'
import { signIn } from 'next-auth/react'
import { Form } from '../ui/form'
import { useToast } from '../molecules/Toaster/use-toast'

export interface ILoginFormProps {
  className?: string
}
export const LoginForm = ({ className }: ILoginFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useFormLogin()

  const { replace } = useRouter()
  const [loading, setLoading] = useState(false)
  const { toast } = useToast()
  return (
    <Form
      onSubmit={handleSubmit(async (data) => {
        const { email, password } = data
        setLoading(true)

        const result = await signIn('credentials', {
          email,
          password,
          redirect: false,
        })
        setLoading(false)

        if (result?.ok) {
          await fetch('/api/auth/session')
          replace('/')
        }
        if (result?.error) {
          toast({ title: 'Login failed. Try again.' })
        }
      })}
    >
      <Label title="Email" error={errors.email?.message}>
        <Input
          className="text-black"
          {...register('email')}
          placeholder="email"
        />
      </Label>
      <Label title="Password" error={errors.password?.message} optional>
        <Input
          className="text-black"
          type="password"
          {...register('password')}
          placeholder="******"
        />
      </Label>
      <Button type="submit" loading={loading} className="text-yellow-50">
        Submit
      </Button>
      <div className="mt-4 text-sm ">
        Do not have an xilematich account?
        <br />
        <Link
          href="/register"
          className="font-bold underline underline-offset-4 "
        >
          Create one
        </Link>{' '}
        now.
      </div>
    </Form>
  )
}
