import { Menu } from 'lucide-react'
import { BaseComponent } from '../../lib/types'
import { Sheet, SheetContent, SheetTrigger } from '../ui/sheet'
import { Button } from '../ui/button'

export function SimpleSidebar({ children }: BaseComponent) {
  return (
    <div className="sm:hidden">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="ghost">
            <Menu className="w-5 h-5" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left">{children}</SheetContent>
      </Sheet>
    </div>
  )
}
