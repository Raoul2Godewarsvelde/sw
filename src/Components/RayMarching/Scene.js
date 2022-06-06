import React, { createRef, Suspense } from 'react'

import * as THREE from 'three'
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
                position={[0, 0, 2]}
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
                    material={{
                        type: 'shader',
                        wireframe: false,
                        double_sided: true,
                        color: new THREE.Color(0x000ff0),
                        opacity: 1.0,
                        uCanvasSize: {x: 2, y: 2}
                    }}
                />
            </Suspense>
        </Canvas>
    )
}

export default Scene