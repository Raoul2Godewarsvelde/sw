import React, { useRef, useMemo, useCallback } from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

const SceneContent = () => {

    const count = 500
    let num = 0

    const line = useRef()
    const particle = useRef()
    
    const [positions, sizes] = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const sizes = new Float32Array(count * 3)

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
            sizes[i] = Math.random() < 0.03 ? 15 : 6
        }

        return [positions, sizes]
    }, [])

    useFrame(() => {
        if (line.current && num < count && particle.current) {
            line.current.setDrawRange(0, 10)
            particle.current.setDrawRange(0, 50)
            num++
        }
    })

    return (
        <>
            <mesh scale={[10, 10, 10]} onClick={console.log('ok')}>
                <icosahedronBufferGeometry attach='geometry' args={[2, 2]} />
                <meshNormalMaterial attach='material' wireframe />
            </mesh>
            <group>
                <lineSegments>
                    <bufferGeometry ref={line}>
                    <bufferAttribute
                        attach='attributes-position'
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                    </bufferGeometry>
                    <lineBasicMaterial
                    attach='material'
                    color={'#9c88ff'}
                    linewidth={0.3}
                    />
                </lineSegments>
                <points>
                    <bufferGeometry ref={particle}>
                    <bufferAttribute
                        attach='attributes-position'
                        count={positions.length / 3}
                        array={positions}
                        itemSize={3}
                    />
                    </bufferGeometry>
                    <pointsMaterial size={0.1} />
                </points>
            </group>
        </>
    )
}

export default SceneContent

// https://docs.pmnd.rs/react-three-fiber/API/objects
// https://codesandbox.io/s/m7inl?file=/src/App.js