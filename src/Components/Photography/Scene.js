import React, { createRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { Camera } from '@components/Cameras/Registration/index'
import { AmbientLight, DirectionalLight } from '@components/Lights/Registration/index'

import { Carousel } from '@components/Photography/Registration/index'

const Scene = () => {
    
    const camera_position_z = 1000

    const camera = createRef()
    
    return (
        <Canvas id={'scene__canvas'} width={window.innerWidth} height={window.innerHeight}>
            <Camera 
                ref={camera}
                makeDefault
                position={[0, 0, camera_position_z]}
                cameraPositionZ={camera_position_z}
            />
            <AmbientLight />
            <DirectionalLight />
            <Suspense fallback={null}>
                <Carousel />
            </Suspense>
        </Canvas>
    )
}

export default Scene