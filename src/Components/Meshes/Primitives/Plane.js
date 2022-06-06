import React, { useRef } from 'react'

import * as THREE from 'three'

const Plane = ({ position, rotation, scale, size, segments, wireframe, color, opacity }) => {

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
            <meshStandardMaterial
                attach='material'
                wireframe={wireframe}
                transparent
                side={THREE.DoubleSide}
                color={color}
                opacity={opacity}
            />
        </mesh>
    )
}

export default Plane