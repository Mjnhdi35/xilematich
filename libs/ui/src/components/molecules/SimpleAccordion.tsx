import { BaseComponent } from '../../lib/types'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion'

export const SimpleAccordion = ({
  title,
  children,
}: { title: string | number } & BaseComponent) => {
  return (
    <Accordion type="multiple">
      <AccordionItem value={title.toString()} defaultChecked>
        <AccordionTrigger>{title}</AccordionTrigger>
        <AccordionContent>
          <div className="max-w-md">{children}</div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
