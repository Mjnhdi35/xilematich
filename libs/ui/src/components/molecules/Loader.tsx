import { IconRotateClockwise2 } from '@tabler/icons-react'
import { AlertBox } from './AlertBox'

export const Loader = () => <IconRotateClockwise2 className="animate-spin" />
export const LoaderPanel = ({ text }: { text?: string }) => (
  <AlertBox>
    {text}
    <Loader />
  </AlertBox>
)
