import React, { useRef, useMemo, useCallback } from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import degreesToRadians from '@functions/DegreesToRadians'

const SceneContent = () => {

    const unity = 10
    
    const count = 500
    let num = 0

    const vertices_number = 12
    const radius = 10
    const PI = 3.1415926
    const H_ANGLE = PI / 180 * 72           // 72 degree = 360 / 5
    const V_ANGLE = Math.atan(1.0 / 2)      // elevation = 26.565 degree

    const line = useRef()
    const particle = useRef()
    const reperesRef = useRef()

    const setArray = (vertices_number) => {
        const vertices_array = []

        for(let i = 0; i < vertices_number * 3; i++) {
            vertices_array.push(0)
        }

        console.log('vertices_array', vertices_array)

        return vertices_array
    }

    const vertices_array = setArray(vertices_number)

    let hAngle1 = -PI / 2 - H_ANGLE / 2;  // start from -126 deg at 1st row
    let hAngle2 = -PI / 2;                // start from -90 deg at 2nd row

    // the first top vertex at (0, 0, r)
    vertices_array[0] = 0
    vertices_array[1] = 0
    vertices_array[2] = 0
    /* vertices_array[0] = {x: 0, y: 0, z: radius} */
    
    /* for(let i = 1; i < vertices_number / 2; i++) {
        vertices_array[i] = {
            x: 
            y: 
            z: 
        }
    } */
    
    vertices_array[vertices_number - 1] = {x: 0, y: 0, z: -radius}











    
    const [position] = useMemo(() => {
        const position = new Float32Array(5 * 3)
        /* const sizes = new Float32Array(vertices_number * 3) */

        position[0] = 0
        position[1] = radius // HAUTEUR
        position[2] = 0

        position[3] = Math.cos(degreesToRadians(0)) * radius
        position[4] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position[5] = 0

        position[6] = Math.cos(degreesToRadians(72)) * radius
        position[7] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position[8] = 0

        position[9] = Math.cos(degreesToRadians(144)) * radius
        position[10] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position[11] = 0

        position[12] = Math.cos(degreesToRadians(216)) * radius
        position[13] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position[14] = 0


        /* for(let i = 1; i < 6; i++) {

        } */

        /* for (let i = 0; i < count * 3; i++) {
            position[i] = (Math.random() - 0.5) * 10
            sizes[i] = Math.random() < 0.03 ? 15 : 6
        } */

        return [position/* , sizes */]
    }, [])
    
    const [reperes] = useMemo(() => {
        const reperes = new Float32Array(10 * 3)

        reperes[0] = 0
        reperes[1] = 0
        reperes[2] = 0

        reperes[3] = unity
        reperes[4] = unity
        reperes[5] = unity

        reperes[6] = -unity
        reperes[7] = unity
        reperes[8] = unity

        reperes[9] = unity
        reperes[10] = -unity
        reperes[11] = unity

        reperes[12] = unity
        reperes[13] = unity
        reperes[14] = -unity

        reperes[15] = -unity
        reperes[16] = -unity
        reperes[17] = unity

        reperes[18] = -unity
        reperes[19] = unity
        reperes[20] = -unity

        reperes[21] = unity
        reperes[22] = -unity
        reperes[23] = -unity

        reperes[24] = -unity
        reperes[25] = -unity
        reperes[26] = -unity

        return [reperes]
    }, [])

    /* useFrame(() => {
        if (line.current && num < count && particle.current) {
            line.current.setDrawRange(0, 10)
            particle.current.setDrawRange(0, 50)
            num++
        }
    }) */












    /* const count = 500
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
    }) */

    return (
        <>
            {/* <mesh scale={[10, 10, 10]} onClick={console.log('ok')}>
                <icosahedronBufferGeometry attach='geometry' args={[2, 2]} />
                <meshNormalMaterial attach='material' wireframe />
            </mesh> */}
            <group>
                {/* <lineSegments>
                    <bufferGeometry ref={line}>
                    <bufferAttribute
                        attach='attributes-position'
                        count={position.length / 3}
                        array={position}
                        itemSize={3}
                    />
                    </bufferGeometry>
                    <lineBasicMaterial
                        attach='material'
                        color={'#9c88ff'}
                        linewidth={0.3}
                    />
                </lineSegments> */}
                <points>
                    <bufferGeometry ref={particle}>
                        <bufferAttribute
                            attach='attributes-position'
                            count={position.length / 3}
                            array={position}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial size={0.3} color={'white'} />
                </points>


                <points>
                    <bufferGeometry ref={reperesRef}>
                        <bufferAttribute
                            attach='attributes-position'
                            count={reperes.length / 3}
                            array={reperes}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <pointsMaterial size={0.3} color={'red'} />
                </points>
            </group>
        </>
    )
}

export default SceneContent

// https://docs.pmnd.rs/react-three-fiber/API/objects
// https://codesandbox.io/s/m7inl?file=/src/App.js
// http://www.songho.ca/opengl/gl_sphere.html