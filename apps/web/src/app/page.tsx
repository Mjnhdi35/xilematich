'use client'
import { addTwoNumber } from '@xilematich/samplemost'
import { UsersDocument } from '@xilematich/network/src/gql/generated'
import { useQuery } from '@apollo/client'
import { Button } from '@xilematich/ui/src/components/ui/button'
import { useSession, signOut } from 'next-auth/react'
import { BrandIcon } from '@xilematich/ui/src/components/atoms/BrandIcon'
import Link from 'next/link'

export default function Home() {
  const { data, loading } = useQuery(UsersDocument)
  const { data: sessionData, status } = useSession()

  return (
    <main className="px-8">
      <div>
        {sessionData?.user?.id ? (
          <Button onClick={() => signOut()}>SignOut</Button>
        ) : (
          <Link href={'/login'}>Login</Link>
        )}
      </div>
      <div>
        {data?.users.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>
    </main>
  )
}
