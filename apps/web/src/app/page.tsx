'use client'

import { UsersDocument } from '@xilematich/network/src/gql/generated'
import { useQuery } from '@apollo/client'
import { Button } from '@xilematich/ui/src/components/ui/button'
import { useSession, signOut } from 'next-auth/react'
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
