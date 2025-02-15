'use client'

import { useQuery } from '@apollo/client'
import { WhoamiDocument } from '@xilematich/network/src/gql/generated'
import { redirect } from 'next/navigation'
import { ReactNode } from 'react'
import { Loader } from '../molecules/Loader'
import { TellThem } from '../molecules/TellThem'
import { AdminMenu } from '../organisms/AdminMenu'

export const IsAdmin = ({ children }: { children: ReactNode }) => {
  const { data, loading, error } = useQuery(WhoamiDocument)

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    )

  if (!data) {
    return redirect('/login')
  }

  if (data?.whoami && data?.whoami.admin?.__typename !== 'Admin') {
    return <TellThem id={data.whoami.id} role={'admin'} />
  }

  return (
    <div className="flex mt-2">
      <div className="hidden w-full max-w-xs min-w-min sm:block">
        <AdminMenu />
      </div>
      <div className="flex-grow">
        <div className="sm:hidden">
          <AdminMenu />
        </div>
        <div className="p-4 bg-slate-100">{children}</div>
      </div>
    </div>
  )
}
