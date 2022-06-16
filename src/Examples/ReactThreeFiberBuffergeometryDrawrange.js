import './styles.css'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import React, { useMemo, useRef } from 'react'

const sizes = {
  width: window.innerWidth,
  height: window.innerHeight
}

/* const Box = () => {
    return (
        <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color='hotpink' />
        </mesh>
    )
} */

/* const Particles = () => {

    const count = 500

    const [positions, sizes] = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const sizes = new Float32Array(count * 3)
        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
            sizes[i] = Math.random() < 0.03 ? 15 : 6
        }

        return [positions, sizes]
    }, [])

    return (
        <points>
            <bufferGeometry>
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    count={positions.length / 3}
                    itemSize={3}
                    array={positions}
                />
            </bufferGeometry>
            <pointsMaterial size={0.1} />
        </points>
    )
} */

const Lines = () => {

    const count = 500
    let num = 0

    const line = useRef()
    const particle = useRef()
    
    const [positions] = useMemo(() => {
        const positions = new Float32Array(count * 3)
        const sizes = new Float32Array(count * 3)

        for (let i = 0; i < count * 3; i++) {
            positions[i] = (Math.random() - 0.5) * 10
            sizes[i] = Math.random() < 0.03 ? 15 : 6
        }

        return [positions]
    }, [])

    useFrame(() => {
        if (line.current && num < count && particle.current) {
            line.current.setDrawRange(0, 10)
            particle.current.setDrawRange(0, 50)
            num++
        }
    })

    return (
        <group>
            <lineSegments>
                <bufferGeometry ref={line}>
                <bufferAttribute
                    attachObject={['attributes', 'position']}
                    count={positions.length / 3}
                    itemSize={3}
                    array={positions}
                    drawrangle={(0, 0)}
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
                    attachObject={['attributes', 'position']}
                    count={positions.length / 3}
                    itemSize={3}
                    array={positions}
                />
                </bufferGeometry>
                <pointsMaterial size={0.1} />
            </points>
        </group>
    )
}

export default function App() {
    return (
        <Canvas className='canvas'>
            <perspectiveCamera
                fov={75}
                aspect={sizes.width / sizes.height}
                position={[0, 0, 3]}
                near={0.1}
                far={100}
            >
                <Lines />
            </perspectiveCamera>
            <ambientLight />
            <OrbitControls />
        </Canvas>
    )
}
