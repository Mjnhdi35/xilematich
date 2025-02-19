'use client'

import { Button } from '@xilematich/ui/src/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'

export default function Home() {
  const { data: sessionData, status } = useSession()

  console.log('data', sessionData)

  return (
    <main className="px-8">
      <div>
        {sessionData?.user?.id ? (
          <>
            <div>{sessionData.user.name}</div>
            <Button onClick={() => signOut()}>SignOut</Button>
          </>
        ) : (
          <Link href={'/login'}>Login</Link>
        )}
      </div>
    </main>
  )
}
