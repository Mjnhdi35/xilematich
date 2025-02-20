import AdminHome from '@xilematich/ui/src/components/templates/AdminHome'
import { IsLoggedIn } from '@xilematich/ui/src/components/organisms/IsLoggedIn'
export default function Home() {
  return (
    <IsLoggedIn>
      <AdminHome>
        <div className="flex justify-center items-center">
          Hello this is Admin
        </div>
      </AdminHome>
    </IsLoggedIn>
  )
}
