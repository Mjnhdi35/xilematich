'use client'

import { ListMovies } from '@xilematich/ui/src/components/templates/ListMovies'
import { Button } from '@xilematich/ui/src/components/ui/button'
import { signOut, useSession } from 'next-auth/react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
  const { data: sessionData, status } = useSession()
  const router = useRouter()
  console.log('data', sessionData)
  if (!sessionData && status === 'unauthenticated') {
    return router.push('/login')
  }

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
      <ListMovies />
    </main>
  )
}
