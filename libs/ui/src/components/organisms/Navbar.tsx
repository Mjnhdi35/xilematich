import { Container } from '../atoms/Container'
import { Sidebar } from './Sidebar'

export interface INavbarProps {}

export const Navbar = () => {
  return (
    <nav className="sticky top-0 w-full h-12 border-2 border-white border-y bg-white/40 backdrop-blur backdrop-filter">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sidebar />
            {/* userprofile */}
          </div>
        </div>
      </Container>
    </nav>
  )
}
