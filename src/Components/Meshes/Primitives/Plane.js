import React, { useRef } from 'react'

import * as THREE from 'three'

import '@components/Materials/ShaderMaterial'

const Plane = ({ position, rotation, scale, size, segments, material }) => {

    // REF

    const planeRef = useRef()

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
                <shaderMaterial
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