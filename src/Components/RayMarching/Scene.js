import React, { useEffect, createRef, useRef, Suspense } from 'react'

import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'

import { PerspectiveCamera } from '@components/Cameras/Registration/index'
import { Lights } from '@components/RayMarching/Registration/index'
import { Plane } from '@components/Meshes/Primitives/Registration/index'

import matcap from '@assets/Materials/Matcaps/7A7A7A_D9D9D9_BCBCBC_B4B4B4.jpeg'

const Scene = () => {
    
    const camera_position_z = 2

    const cameraRef = createRef()
    const planeRef = useRef({
        uMouse: {
            x: 0.0,
            y: 0.0
        }
    })

    useEffect(() => {
        window.addEventListener('mousemove', (e) => {
            planeRef.current.uMouse.x = e.pageX
            planeRef.current.uMouse.y = e.pageY
            console.log({x: e.pageX, y: e.pageY})
        })
    })

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
                    ref={planeRef}
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
                        uCanvasSize: {x: 2, y: 2},
                        matcap: new THREE.TextureLoader().load(matcap)
                    }}
                />
            </Suspense>
        </Canvas>
    )
}

export default Scene