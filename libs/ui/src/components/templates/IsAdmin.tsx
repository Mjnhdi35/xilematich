'use client'

import { useQuery } from '@apollo/client'
import { WhoamiDocument } from '@xilematich/network/src/gql/generated'
import { ReactNode, useEffect } from 'react'
import { Loader } from '../molecules/Loader'
import { TellThem } from '../molecules/TellThem'
import { AdminMenu } from '../organisms/AdminMenu'
import { SimpleSidebar } from '../molecules/SimpleSidebar'
import { useSession } from 'next-auth/react'
export const IsAdmin = ({ children }: { children: ReactNode }) => {
  const { data, loading, error, refetch } = useQuery(WhoamiDocument)
  const { data: session, status } = useSession()

  useEffect(() => {
    if (status === 'authenticated') {
      refetch()
    }
  }, [status, refetch])
  if (loading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    )

  if (data?.whoami.id && data.whoami.admin?.__typename !== 'Admin') {
    return <TellThem id={data?.whoami.id} role={'admin'} />
  }

  return (
    <div className="flex mt-2">
      {data?.whoami?.admin && (
        <div className="hidden w-full max-w-xs min-w-min sm:block">
          <AdminMenu />
        </div>
      )}
      <div className="flex-grow">
        <div className="sm:hidden ">
          <SimpleSidebar>
            <AdminMenu />
          </SimpleSidebar>
        </div>
        <div className="p-4 bg-slate-100">{children}</div>
      </div>
    </div>
  )
}
