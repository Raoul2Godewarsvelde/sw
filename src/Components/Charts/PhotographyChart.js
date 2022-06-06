import React, { useEffect, useState } from 'react'

import { usePhotographyChartStore } from '@hooks/Zustand/Charts/PhotographyChartStore'

import { SimpleLineChart } from '@components/Charts/Components/Registration/index'

function PhotographyChart() {

  // HOOKS

  const [
    eDeltaY
  ] = usePhotographyChartStore((state) => [
    state.eDeltaY, state.setEDeltaY
  ])

  // USE STATES

  const [datas, setDatas] = useState({
    e_delta_y: 0
  })

  // USE EFFECT

  useEffect(() => {
    console.log(eDeltaY)
    let datas_copy = datas
    datas_copy.e_delta_y = eDeltaY
    setDatas(datas_copy)
  }, [eDeltaY])

  return (
    <SimpleLineChart
      datas={datas}
    />
  )
}

export default PhotographyChart