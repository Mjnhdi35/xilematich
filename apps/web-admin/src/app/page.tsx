import { IsLoggedIn } from '@xilematich/ui/src/components/organisms/IsLoggedIn'

export default function Home() {
  return (
    <IsLoggedIn>
      <div className="flex justify-center items-center">
        Hello this is Admin
      </div>
    </IsLoggedIn>
  )
}
