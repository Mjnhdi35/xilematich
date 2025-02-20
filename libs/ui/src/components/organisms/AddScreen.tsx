import { FormTypeCreateCinema } from '@xilematich/forms/src/createCinema'
import { useFieldArray, useFormContext, useWatch } from 'react-hook-form'
import { SimpleAccordion } from '../molecules/SimpleAccordion'
import { Button } from '../ui/button'
import { Label } from '../ui/label'
import { HtmlSelect } from '../ui/select'
import { Input } from '../ui/input'

import { Grid } from './GridSeat'
import { Plus } from 'lucide-react'
import {
  ProjectionType,
  SoundSystemType,
} from '@xilematich/network/src/gql/generated'

export const AddScreensInCinema = () => {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext<FormTypeCreateCinema>()
  const { fields, append, remove } = useFieldArray({
    control,
    name: `screens`,
  })

  const { screens } = useWatch<FormTypeCreateCinema>()

  return (
    <div>
      {fields.map((item, index) => (
        <SimpleAccordion title={index + 1 || '[Empty]'} key={item.id}>
          <div className={`flex justify-end my-2`}>
            <Button
              variant="link"
              size="sm"
              className="text-xs text-gray-600 underline underline-offset-2"
              onClick={() => {
                remove(index)
              }}
            >
              remove screen
            </Button>
          </div>

          <div className={`flex flex-col gap-2`}>
            <div className="grid grid-cols-2 gap-2">
              <Label
                title="Projection type"
                error={errors.screens?.[index]?.type?.toString()}
              >
                <HtmlSelect
                  placeholder="projection type"
                  {...register(`screens.${index}.projectionType`)}
                >
                  {Object.values(ProjectionType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </HtmlSelect>
              </Label>
              <Label
                title="Sound system type"
                error={errors.screens?.[index]?.type?.toString()}
              >
                <HtmlSelect
                  placeholder="sound system type"
                  {...register(`screens.${index}.soundSystemType`)}
                >
                  {Object.values(SoundSystemType).map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </HtmlSelect>
              </Label>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Label
                title="Rows"
                error={errors.screens?.[index]?.rows?.message}
              >
                <Input
                  placeholder="Enter the name"
                  {...register(`screens.${index}.rows`, {
                    valueAsNumber: true,
                  })}
                />
              </Label>
              <Label
                title="Columns"
                error={errors.screens?.[index]?.columns?.message}
              >
                <Input
                  type="number"
                  placeholder="Enter the name"
                  {...register(`screens.${index}.columns`, {
                    valueAsNumber: true,
                  })}
                />
              </Label>
              <Label
                title="Price"
                error={errors.screens?.[index]?.price?.message}
              >
                <Input
                  type="number"
                  placeholder="Enter the price"
                  {...register(`screens.${index}.price`, {
                    valueAsNumber: true,
                  })}
                />
              </Label>
            </div>
            <Grid
              rows={screens?.[index]?.rows || 0}
              columns={screens?.[index]?.columns || 0}
            />
          </div>
        </SimpleAccordion>
      ))}
      <div>
        <Button
          className="flex items-center justify-center w-full py-2 text-xs border border-dashed "
          size="sm"
          variant="outline"
          onClick={() =>
            append({
              columns: 0,
              rows: 0,
              price: 0,
              numberRoom: 0,
              projectionType: ProjectionType.Imax,
              soundSystemType: SoundSystemType.ImaxEnhanced,
            })
          }
        >
          <Plus className="w-4 h-4" /> Add screen
        </Button>
      </div>
    </div>
  )
}
