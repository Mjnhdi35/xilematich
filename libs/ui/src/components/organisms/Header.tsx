'use client'

import React from 'react'
import Link from 'next/link'
import Brand from '../atoms/Brand'
import { MenuItem, Role } from '@xilematich/util/types'
import { BaseComponent } from '../../lib/types'
import { useSession } from 'next-auth/react'
import { Button } from '../ui/button'
import { Container } from '../atoms/Container'
import { Navbar } from './Navbar'

export type IHeaderProps = {
  type?: Role
  menuItems: MenuItem[]
} & BaseComponent

export const Header = ({ type, menuItems }: IHeaderProps) => {
  const session = useSession()

  const id = session?.data?.user?.id

  return (
    <header>
      <nav className="shadow-md bg-white/50 w-full backdrop:blur-md">
        <Container className="relative flex items-center justify-between h-16 py-2 gap-16">
          <Link href={'/'} aria-label="Home" className="w-auto ">
            <Brand className="hidden h-12 sm:block" />
            <Brand className="block sm:hidden" />
          </Link>

          <div className="flex items-center gap-2">
            {id ? (
              <div className="flex gap-6 items-center">
                <div className="text-sm mr-6 flex gap-3">
                  {/* <Menus menuItems={menuItems} /> */}
                  <Navbar />
                </div>
              </div>
            ) : (
              <>
                <Link href="/register">
                  <Button variant="outline" className="hidden md:block">
                    Register
                  </Button>
                </Link>
                <Link href="/login">
                  <Button>Log in</Button>
                </Link>
              </>
            )}
          </div>
        </Container>
      </nav>
      <div className="h-16" />
    </header>
  )
}
