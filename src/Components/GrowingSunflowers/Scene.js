import React, { createRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'
import {
    ContentScene,
    Lights
} from '@components/GrowingSunflowers/Registration/index'

const Scene = () => {

    const camera_position_z = 2

    const cameraRef = createRef()

    return (
        <Canvas id={'growingSunflowers__canvas'} width={window.innerWidth} height={window.innerHeight}>
            <PerspectiveCamera 
                ref={cameraRef}
                canvasId={'growingSunflowers__canvas'}
                makeDefault
                position={[0, 0, 2]}
                cameraPositionZ={camera_position_z}
                orbitControl={true}
            />
            <Lights />
            <Suspense fallback={null}>
                <ContentScene />
            </Suspense>
        </Canvas>
    )
}

export default Scene