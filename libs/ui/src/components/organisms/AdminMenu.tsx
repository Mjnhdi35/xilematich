import { Link } from '../molecules/CustomLink'

export const AdminMenu = () => {
  return (
    <div className="flex flex-col w-full max-w-xs gap-4 mx-4 px-2 py-4">
      <Link href="/">Dashboard</Link>
      <Link href="/cinemas">Cinemas</Link>
      <Link className="pl-4" href="/cinemas/new">
        Create cinema
      </Link>
      <Link href="/movies">Movies</Link>
      <Link className="pl-4" href="/movies/new">
        Create movie
      </Link>
      <Link href="/admins">Manage Admins</Link>
      <Link href="/managers">Manage Managers</Link>
    </div>
  )
}
