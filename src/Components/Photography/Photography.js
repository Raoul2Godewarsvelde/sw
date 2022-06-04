import React, { Suspense } from 'react'

import { Canvas, Dom } from 'react-three-fiber'

import {
    Content,
    Loader
} from './Registration/index'

const Photography = () => {
    
    return (
        <Canvas
          concurrent
          pixelRatio={1}
          orthographic
          camera={{ 
            zoom: 75,
            position: [0, 0, 500]
          }}
        >
          <Suspense 
            fallback={<Dom center className='loading' children='Loading...' />}
          >
            <Loader />
            <Content />
          </Suspense>
        </Canvas>
    )
}

export default Photography