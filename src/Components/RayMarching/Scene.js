import React, { createRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { Camera } from '@components/Cameras/Registration/index'

import { Lights } from '@components/RayMarching/Registration/index'

const Scene = () => {
    
    const camera_position_z = 2

    const camera = createRef()
    
    return (
        <Canvas id={'rayMarching__canvas'} width={window.innerWidth} height={window.innerHeight}>
            <Camera 
                ref={camera}
                canvasId={'rayMarching__canvas'}
                makeDefault
                position={[0, 0, camera_position_z]}
                cameraPositionZ={camera_position_z}
            />
            <Lights />
            <Suspense fallback={null}>

            </Suspense>
        </Canvas>
    )
}

export default Scene