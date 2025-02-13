'use client'
import { IconDoorExit } from '@tabler/icons-react'
import { signOut } from 'next-auth/react'
import { Button } from '../ui/button'

export const LogoutButton = () => {
  return (
    <Button
      variant={'outline'}
      onClick={() => {
        signOut()
      }}
      className="flex gap-2"
    >
      <IconDoorExit /> Logout
    </Button>
  )
}
