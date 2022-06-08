import React, { forwardRef, useRef } from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import '@components/Materials/RayMarchingMaterial'

const Plane = forwardRef(({ position, rotation, scale, size, segments, material, ...props }, ref) => {

    // REF

    const planeRef = useRef()

    // USE FRAME

    useFrame((state, delta) => (ref.current.uTime += 0.1))

    return (
        <mesh
            ref={planeRef}
            position={[position.x, position.y, position.z]}
            rotation={[rotation.x, rotation.y, rotation.z]}
            scale={[scale.x, scale.y, scale.z]}
            onContextMenu={(e) => console.log('context menu')}
            onDoubleClick={(e) => console.log('double click')}
            onWheel={(e) => console.log('wheel spins')}
            onPointerUp={(e) => console.log('up')}
            onPointerDown={(e) => console.log('down')}
            onPointerOver={(e) => console.log('over')}
            onPointerOut={(e) => console.log('out')}
            onPointerEnter={(e) => console.log('enter')}
            onPointerLeave={(e) => console.log('leave')}
            onPointerMove={(e) => console.log('move')}
            onPointerMissed={() => console.log('missed')}
            onUpdate={(self) => console.log('props have been updated')}
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
                    attach='material'
                    ref={ref}
                    wireframe={material.wireframe}
                    side={material.double_sided ? THREE.DoubleSide : null}
                    uOpacity={material.opacity}
                    uColor={material.color}
                    uCanvasSize={material.uCanvasSize}
                />
            )}
        </mesh>
    )
})

export default Plane