import React from 'react'

import { Scene } from '@components/Photography/Registration/index'

import { PhotographyChart } from '@components/Charts/Registration/index'

import '@styles/Components/Photography/photography.scss'

const Photography = () => {
    
    return (
        <div
          id='scene__wrapper'
          style={{
            display: 'flex',
            displayDirection: 'row',
          }}
        >
          <Scene />
          <PhotographyChart />
        </div>
    )
}

export default Photography