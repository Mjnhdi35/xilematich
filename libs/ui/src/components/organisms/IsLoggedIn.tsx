'use client'
import { ReactNode } from 'react'
import { useSession } from 'next-auth/react'
import { LoaderPanel } from '../molecules/Loader'
import { AlertBox } from '../molecules/AlertBox'
import { Link } from '../molecules/CustomLink'

type RenderPropChild = (id: string) => ReactNode

export const IsLoggedIn = ({
  children,
  notLoggedIn,
}: {
  children: RenderPropChild | ReactNode
  notLoggedIn?: ReactNode
}) => {
  const { status, data } = useSession()

  if (status === 'loading') {
    return <LoaderPanel text="Loading user..." />
  }

  if (!data?.user?.id) {
    if (notLoggedIn) {
      return <>{notLoggedIn}</>
    } else {
      return (
        <>
          <AlertBox>
            <Link href={'/login'}>You are not logged in Click to login</Link>
          </AlertBox>
        </>
      )
    }
  }

  return (
    <>
      {typeof children === 'function'
        ? (children as RenderPropChild)(data.user.id)
        : children}
    </>
  )
}
