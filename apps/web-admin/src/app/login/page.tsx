import React from 'react'
import { LoginForm } from '@xilematich/ui/src/components/templates/LoginForm'
import { AuthLayout } from '@xilematich/ui/src/components/molecules/AuthLayout'

const page = () => {
  console.log('Login page rendered!')
  return (
    <AuthLayout title="Login">
      <LoginForm />
    </AuthLayout>
  )
}

export default page
