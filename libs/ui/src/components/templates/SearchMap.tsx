'use client'
import React, { useCallback, useState } from 'react'
import { Map } from '../organisms/map/Map'
import { Panel } from '../organisms/map/Panel'
import { DefaultZoomControls } from '../organisms/map/ZoomControls'
import { ViewStateChangeEvent } from 'react-map-gl'
import { initialViewState } from '@xilematich/util/constants'
import { Autocomplete } from '../atoms/Autocomplete'

const SearchMap = () => {
  const [mapInstance, setMapInstance] = useState(null)
  const handleMapChange = useCallback(
    (target: ViewStateChangeEvent['target']) => {
      if (!target) return
      const bounds = target.getBounds()
      if (!bounds) return
      const locationFilter = {
        ne_lat: bounds?.getNorthEast()?.lat ?? 0,
        ne_lng: bounds?.getNorthEast()?.lng ?? 0,
        sw_lat: bounds?.getSouthWest()?.lat ?? 0,
        sw_lng: bounds?.getSouthWest()?.lng ?? 0,
      }
      console.log('locationfilter', locationFilter)
    },
    [],
  )

  return (
    <Map
      onLoad={(e) => handleMapChange(e.target)}
      onDragEnd={(e) => handleMapChange(e.target)}
      onZoomEnd={(e) => handleMapChange(e.target)}
      initialViewState={initialViewState}
    >
      <Panel position="left-top">
        <Autocomplete options={['Cmt8']} />
      </Panel>
      <Panel position="right-top">
        <DefaultZoomControls />
      </Panel>
    </Map>
  )
}

export default SearchMap
