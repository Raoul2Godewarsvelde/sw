import React, { createRef, Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'
import { Lights } from '@components/RayMarching/Registration/index'
import { Plane } from '@components/Meshes/Primitives/Registration/index'

const Scene = () => {
    
    const camera_position_z = 2

    const cameraRef = createRef()
    
    return (
        <Canvas id={'rayMarching__canvas'} width={window.innerWidth} height={window.innerHeight}>
            <PerspectiveCamera 
                ref={cameraRef}
                canvasId={'rayMarching__canvas'}
                makeDefault
                position={[5, 5, 5]}
                cameraPositionZ={camera_position_z}
                orbitControl={true}
            />
            <Lights />
            <Suspense fallback={null}>
                <Plane
                    position={{x: 0, y: 0, z: 0}}
                    rotation={{x: 0, y: 0, z: 0}}
                    scale={{x: 1, y: 1, z: 1}}
                    size={{x: 1, y: 1}}
                    segments={{x: 10, y: 10}}
                    wireframe={false}
                    color={'#ff0000'}
                    opacity={1}
                />
            </Suspense>
        </Canvas>
    )
}

export default Scene