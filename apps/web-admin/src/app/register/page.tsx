import React from 'react'
import { RegisterForm } from '@xilematich/ui/src/components/templates/RegisterForm'
import { AuthLayout } from '@xilematich/ui/src/components/molecules/AuthLayout'

const page = () => {
  return (
    <AuthLayout title={'Register'}>
      <RegisterForm />
    </AuthLayout>
  )
}

export default page
