'use client'
import { addTwoNumber } from '@xilematich/samplemost'
import { UsersDocument } from '@xilematich/network/src/gql/generated'
import { useQuery } from '@apollo/client'
import { Button } from '@xilematich/ui/src/components/ui/button'
export default function Home() {
  const { data, loading } = useQuery(UsersDocument)
  console.log(data)

  return (
    <div>
      <h1 className="bg-red-300">hello, {addTwoNumber(4, 5)}</h1>
      <Button className="bg-blue-500 text-slate-600">Bam vao</Button>
      <div className="bg-slate-500">
        {data?.users.map((user) => <div key={user.id}>{user.name}</div>)}
      </div>
    </div>
  )
}
