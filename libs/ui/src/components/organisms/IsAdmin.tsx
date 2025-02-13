'use client'

import { useQuery } from '@apollo/client'
import { AdminMeDocument } from '@xilematich/network/src/gql/generated'
import { ReactNode } from 'react'
import { LoaderPanel } from '../molecules/Loader'
import { AlertSection } from '../molecules/AlertSection'

export const IsAdmin = ({ children }: { children: ReactNode }) => {
  const { data, loading } = useQuery(AdminMeDocument)

  if (loading) {
    return <LoaderPanel text="Loading company..." />
  }

  if (!data?.adminMe?.id)
    return (
      <AlertSection>
        <div>You are not an admin.</div>
      </AlertSection>
    )

  return <>{children}</>
}
