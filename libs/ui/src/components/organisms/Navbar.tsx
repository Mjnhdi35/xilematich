import { MenuItem } from '@xilematich/util/types'
import { Container } from '../atoms/Container'
import { Sidebar } from './Sidebar'
import { BaseComponent } from '../../lib/types'

export type INavbarProps = {
  menuItems: MenuItem[]
} & BaseComponent

export const Navbar = ({ menuItems }: INavbarProps) => {
  return (
    <nav className="sticky top-0 w-full h-12 border-2 border-white border-y bg-white/40 backdrop-blur backdrop-filter">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Sidebar menuItems={menuItems} />
            {/* userprofile */}
          </div>
        </div>
      </Container>
    </nav>
  )
}
