'use client'

import { useQuery } from '@apollo/client'
import { WhoamiDocument } from '@xilematich/network/src/gql/generated'
import { ReactNode } from 'react'
import { Loader } from '../molecules/Loader'
import { TellThem } from '../molecules/TellThem'

export const IsAdmin = ({ children }: { children: ReactNode }) => {
  const { data, loading } = useQuery(WhoamiDocument)

  if (loading)
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    )

  if (data?.whoami.id && data.whoami.admin?.__typename !== 'Admin') {
    return <TellThem id={data.whoami.id} role={'admin'} />
  }

  return (
    <>
      <div className="p-4 bg-slate-100">{children}</div>
    </>
  )
}
