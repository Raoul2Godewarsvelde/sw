import React, { useRef } from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import '@components/Materials/RayMarchingMaterial'

const Plane = ({ position, rotation, scale, size, segments, material }) => {

    let time = 0.0

    // REF

    const planeRef = useRef()
    const materialRef = useRef()

    // USE FRAME

    useFrame((state, delta) => (materialRef.current.uTime += 0.1))

    return (
        <mesh
            ref={planeRef}
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            scale={[scale.x, scale.y, scale.z]}
        >
            <planeBufferGeometry
                attach='geometry'
                args={[size.x, size.y, segments.x, segments.y]}
            />

            {/* STANDARD */}

            {material.type === 'standard' && (
                <meshStandardMaterial
                    attach='material'
                    wireframe={material.wireframe}
                    side={material.double_sided ? THREE.DoubleSide : null}
                    transparent={material.transparent ? true : false}
                    color={material.color}
                    opacity={material.opacity}
                />
            )}

            {/* SHADER */}

            {material.type === 'shader' && (
                <rayMarchingMaterial
                    ref={materialRef}
                    wireframe={material.wireframe}
                    side={material.double_sided ? THREE.DoubleSide : null}
                    uOpacity={material.opacity}
                    uColor={material.color}
                    uCanvasSize={material.uCanvasSize}
                />
            )}
        </mesh>
    )
}

export default Plane