import { AdminMenu } from '@xilematich/ui/src/components/organisms/AdminMenu'
import { IsAdmin } from '@xilematich/ui/src/components/templates/IsAdmin'

export default function Home() {
  return (
    <IsAdmin>
      <div className="flex justify-center items-center">
        Hello this is Admin
      </div>
    </IsAdmin>
  )
}
