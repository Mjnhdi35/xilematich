import { useState } from 'react'
import { IconPlus } from '@tabler/icons-react'
import { Container } from '../../atoms/Container'
import { Dialog, DialogContent } from '../../ui/dialog'
import { CreateMovie } from './CreateMovie'
import { Button } from '../../ui/button'
import { ListMovies } from './ListMovies'

export interface IAdminProps {}

export const Admin = ({}: IAdminProps) => {
  const [open, setOpen] = useState(false)

  return (
    <Container>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>Create Movie</DialogContent>
        <CreateMovie />
      </Dialog>
      <div className="flex justify-end my-2">
        <Button
          variant="default"
          size={'default'}
          onClick={() => setOpen(true)}
        >
          <div className="flex items-center gap-2">
            <IconPlus /> Create movie
          </div>
        </Button>
      </div>
      <ListMovies />
    </Container>
  )
}
