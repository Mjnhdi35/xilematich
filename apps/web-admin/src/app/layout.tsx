import type { Metadata } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import '@xilematich/ui/src/app/globals.css'
import { ApolloProvider } from '@xilematich/network/src/config/apollo'
import { SessionProvider } from '@xilematich/ui/src/components/molecules/SessionProvider'
import { Header } from '@xilematich/ui/src/components/organisms/Header'
import { Container } from '@xilematich/ui/src/components/atoms/container'
import { MenuItem } from '@xilematich/util/types'
const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Xilematich',
  description: 'Admin | mdj',
}
const MenuItems: MenuItem[] = [{ label: '', href: '' }]

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-300`}
      >
        <SessionProvider>
          <ApolloProvider>
            <Header type="admin" menuItems={MenuItems} />
            <Container>{children}</Container>
          </ApolloProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
