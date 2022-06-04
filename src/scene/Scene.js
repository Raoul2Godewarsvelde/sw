import React, { Suspense } from 'react'

import { Canvas } from '@react-three/fiber'

import Camera from './Camera'
import Lights from './Lights'

import './css/Scene.scss'

const Scene = (props) => {
    const camera = React.createRef()
    return (
        <>
            <Canvas id={'scene_CANVAS'}>
                <Camera 
                    ref={camera}
                    makeDefault
                    position={[0, 0, 15]}
                    dpr={0.01}
                    pixelRatio={1}
                />
                <Lights />
                <Suspense fallback={null}>
                    <mesh
                        {...props}
                    >
                        <boxGeometry args={[1, 1, 1]}/>
                        <meshStandardMaterial color={'#ffffff'} />
                    </mesh>
                </Suspense>
            </Canvas>
        </>
    )
}

export default Scene