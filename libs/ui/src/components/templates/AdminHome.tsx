'use client'

import React, { ReactNode } from 'react'
import { AdminMenu } from '../organisms/AdminMenu'
import { SimpleSidebar } from '../molecules/SimpleSidebar'
import { IsAdmin } from '../organisms/IsAdmin'

const AdminHome = ({ children }: { children: ReactNode }) => {
  return (
    <IsAdmin>
      <div className="flex mt-6 ">
        <div className="hidden w-full max-w-xs min-w-min sm:block">
          <AdminMenu />
        </div>
        <div className="flex-grow">
          <div className="sm:hidden flex justify-end items-center">
            <SimpleSidebar>
              <AdminMenu />
            </SimpleSidebar>
          </div>
          <div className="p-4 bg-slate-100">{children}</div>
        </div>
      </div>
    </IsAdmin>
  )
}

export default AdminHome
