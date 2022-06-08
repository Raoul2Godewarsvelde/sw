import React, { useEffect, createRef, useRef, Suspense } from 'react'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'
import {
    Lights,
    RayMarchingPlane
} from '@components/RayMarching/Registration/index'

const Scene = () => {

    const camera_position_z = 2

    const cameraRef = createRef()

    return (
        <Canvas id={'rayMarching__canvas'} width={window.innerWidth} height={window.innerHeight}>
            <PerspectiveCamera 
                ref={cameraRef}
                canvasId={'rayMarching__canvas'}
                makeDefault
                position={[0, 0, 2]}
                cameraPositionZ={camera_position_z}
                orbitControl={true}
            />
            <Lights />
            <Suspense fallback={null}>
                <RayMarchingPlane />
            </Suspense>
        </Canvas>
    )
}

export default Scene