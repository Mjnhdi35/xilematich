'use client'

import React, { ReactNode } from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetTrigger,
} from '../ui/sheet'
import { Button } from '../ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'

// const menu: { href: string; title: string }[] = [
//   { href: '/', title: 'Dashboard' },
//   { href: '/cinemas', title: 'Cinemas' },
//   { href: '/movies', title: 'Movies' },
//   { href: '/manage-admins', title: 'Manage Admin' },
//   { href: '/manage-managers', title: 'Manage Manager' },
// ]

export interface INavSidebarProps {
  open: boolean
  setOpen: (open: boolean) => void
  children: ReactNode
}

const Sidebar = ({ open, setOpen, children }: INavSidebarProps) => {
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant={'ghost'}>
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>

      <SheetContent className="bg-white">
        {/* <div className="flex flex-col gap-2 mt-4 mb-8">
          {menu.map((item, index) => (
            <Link href={item.href} key={index}>
              <div className="flex items-center gap-2">
                <div className="capitalize">{item.title}</div>
              </div>
            </Link>
          ))}
        </div> */}
        {children}
      </SheetContent>

      <SheetFooter>
        <SheetClose asChild>{/* <p>sign out</p> */}</SheetClose>
      </SheetFooter>
    </Sheet>
  )
}

export default Sidebar
