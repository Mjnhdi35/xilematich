'use client'

import { MenuItem } from '@xilematich/util/types'
import { LogoutButton } from '../molecules/LogoutButton'
import { UserInfo } from '../molecules/UserInfo'
import { Menus } from './Menus'
import { useDialogState } from '@xilematich/util/hooks/dialog'
import { IconMenu2 } from '@tabler/icons-react'
import Sidebar from './Sidebar'

export interface INavSidebarProps {
  menuItems: MenuItem[]
}

export const NavSidebar = ({ menuItems }: INavSidebarProps) => {
  const [open, setOpen] = useDialogState()

  return (
    <>
      <Sidebar open={open} setOpen={setOpen}>
        <div className="flex flex-col items-start space-y-1">
          <UserInfo className="mb-4" />
          <Menus menuItems={menuItems} />
        </div>
        <div className=" mt-auto">
          <LogoutButton />
        </div>
      </Sidebar>
    </>
  )
}
