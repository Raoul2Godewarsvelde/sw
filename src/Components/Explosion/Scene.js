import React, { createRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'

import { Lights, SceneContent } from '@components/Explosion/Registration/index'

const Scene = () => {
    
    const camera_position_z = 50

    const cameraRef = createRef()

    return (
        <Canvas
            id={'explosion__canvas'}
            width={window.innerWidth}
            height={window.innerHeight}
        >
            <PerspectiveCamera 
                ref={cameraRef}
                canvasId={'explosion__canvas'}
                makeDefault
                position={[0, 0, 50]}
                cameraPositionZ={camera_position_z}
                orbitControl={true}
            />
            <Lights />
            <Suspense fallback={null}>
                <SceneContent />
            </Suspense>
        </Canvas>
    )
}

export default Scene