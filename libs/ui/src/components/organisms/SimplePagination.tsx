'use client'

import React from 'react'
import { IconArrowLeft, IconArrowRight } from '@tabler/icons-react'
import { Button } from '../ui/button'
import { TAKE_COUNT } from '@xilematich/util/hooks/async'
export interface SimplePaginationProps {
  setSkip: React.Dispatch<React.SetStateAction<number>>
  setTake: React.Dispatch<React.SetStateAction<number>>
  skip: number
  take: number
  resultCount: number
}

export const SimplePagination: React.FC<SimplePaginationProps> = ({
  setSkip,
  skip,
  take,
  resultCount = 0,
}) => {
  const goToNextPage = () => {
    setSkip(skip + take)
  }

  const goToPreviousPage = () => {
    setSkip(Math.max(skip - take, 0))
  }

  const disableLeft = skip === 0
  const disableRight = resultCount < TAKE_COUNT

  return (
    <div className="flex items-center gap-2 mt-4">
      <Button
        variant="outline"
        size="icon"
        onClick={goToPreviousPage}
        disabled={disableLeft}
      >
        <IconArrowLeft
          size={20}
          className={disableLeft ? 'text-gray-300' : ''}
        />
      </Button>
      <Button
        variant="outline"
        size="icon"
        onClick={goToNextPage}
        disabled={disableRight}
      >
        <IconArrowRight
          size={20}
          className={disableRight ? 'text-gray-300' : ''}
        />
      </Button>
    </div>
  )
}
