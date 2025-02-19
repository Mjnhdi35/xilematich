import { useSession } from 'next-auth/react'
import Image from 'next/image'
import { BaseComponent } from '../../lib/types'

export const UserInfo = ({ children, className }: BaseComponent) => {
  const session = useSession()
  const image = session.data?.user?.image
  const name = session.data?.user?.name
  const id = session.data?.user?.id
  return (
    <div className={`flex gap-4 ${className}`}>
      <Image
        src={image || '/user.png'}
        alt=""
        width={255}
        height={265}
        className="w-16 h-16 object-cover border"
      />

      <div className="mx-5 text-xl">{name}</div>
      <div className="text-sm text-gray">{id}</div>

      {children}
    </div>
  )
}
