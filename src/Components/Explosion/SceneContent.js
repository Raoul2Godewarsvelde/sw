import React, { useRef, useMemo } from 'react'

import * as THREE from 'three'

import degreesToRadians from '@functions/DegreesToRadians'

const SceneContent = () => {

    const unity = 2
    const radius = 1 * unity

















    const vertices_number = 12

    const linesRef = useRef()
    const pointsRef = useRef()
    const particle = useRef()
    const reperesRef = useRef()

    const [vertices, indices] = useMemo(() => {
        const vertices = new Float32Array(6 * 3)

        vertices[0] = 0
        vertices[1] = radius // HAUTEUR
        vertices[2] = 0

        for(let i = 1; i < 6; i++) {
            for(let j = 0; j < 3; j++) {
                const index = (i * 3) + j
                if(j === 0) vertices[index] = Math.cos(degreesToRadians((i - 1) * 72)) * radius
                if(j === 1) vertices[index] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
                if(j === 2) vertices[index] = Math.sin(degreesToRadians((i - 1) * 72)) * radius
            }
        }

        /* for(let i = 6; i < 12; i++) {
            for(let j = 0; j < 3; j++) {
                const index = (i * 3) + j
                if(j === 0) vertices[index] = Math.cos(degreesToRadians(((index - 3) * 72) + 31)) * radius
                if(j === 1) vertices[index] = -Math.sin(degreesToRadians(30)) * radius // HAUTEUR
                if(j === 2) vertices[index] = Math.sin(degreesToRadians(((index - 5) * 72) + 31)) * radius
            }
        }

        vertices[33] = 0
        vertices[34] = -radius // HAUTEUR
        vertices[35] = 0 */

        const indicesArr = []

        indicesArr.push(0, 1, 2)
        indicesArr.push(0, 2, 3)
        indicesArr.push(0, 3, 4)
        indicesArr.push(0, 4, 5)
        indicesArr.push(0, 5, 1)
    
        const indices =  new Uint32Array(indicesArr)

        return [vertices, indices]
    }, [])

    const [points] = useMemo(() => {
        const points = new Float32Array(6 * 3)

        points[0] = 0
        points[1] = radius // HAUTEUR
        points[2] = 0

        for(let i = 1; i < 6; i++) {
            for(let j = 0; j < 3; j++) {
                const index = (i * 3) + j
                if(j === 0) points[index] = Math.cos(degreesToRadians(i - 1) * 72) * radius
                if(j === 1) points[index] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
                if(j === 2) points[index] = Math.sin(degreesToRadians((i - 1) * 72)) * radius
            }
        }

        /* for(let i = 6; i < 12; i++) {
            for(let j = 0; j < 3; j++) {
                const index = (i * 3) + j
                if(j === 0) vertices[index] = Math.cos(degreesToRadians(((index - 3) * 72) + 31)) * radius
                if(j === 1) vertices[index] = -Math.sin(degreesToRadians(30)) * radius // HAUTEUR
                if(j === 2) vertices[index] = Math.sin(degreesToRadians(((index - 5) * 72) + 31)) * radius
            }
        }

        vertices[33] = 0
        vertices[34] = -radius // HAUTEUR
        vertices[35] = 0 */

        return [points]
    }, [])
    
    /* const indices = useMemo(() => {
      }, []) */

    const [position2] = useMemo(() => {
        const position2 = new Float32Array(24 * 3)

        position2[0] = 0
        position2[1] = radius // HAUTEUR
        position2[2] = 0

        position2[3] = Math.cos(degreesToRadians(0)) * radius
        position2[4] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[5] = Math.sin(degreesToRadians(0)) * radius

        position2[6] = 0
        position2[7] = radius // HAUTEUR
        position2[8] = 0

        position2[9] = Math.cos(degreesToRadians(72)) * radius
        position2[10] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[11] = Math.sin(degreesToRadians(72)) * radius

        position2[12] = 0
        position2[13] = radius // HAUTEUR
        position2[14] = 0

        position2[15] = Math.cos(degreesToRadians(144)) * radius
        position2[16] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[17] = Math.sin(degreesToRadians(144)) * radius

        position2[18] = 0
        position2[19] = radius // HAUTEUR
        position2[20] = 0

        position2[21] = Math.cos(degreesToRadians(216)) * radius
        position2[22] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[23] = Math.sin(degreesToRadians(216)) * radius

        position2[24] = 0
        position2[25] = radius // HAUTEUR
        position2[26] = 0

        position2[27] = Math.cos(degreesToRadians(288)) * radius
        position2[28] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[29] = Math.sin(degreesToRadians(288)) * radius


        position2[30] = Math.cos(degreesToRadians(0)) * radius
        position2[31] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[32] = Math.sin(degreesToRadians(0)) * radius

        position2[33] = Math.cos(degreesToRadians(72)) * radius
        position2[34] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[35] = Math.sin(degreesToRadians(72)) * radius


        position2[36] = Math.cos(degreesToRadians(72)) * radius
        position2[37] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[38] = Math.sin(degreesToRadians(72)) * radius

        position2[39] = Math.cos(degreesToRadians(144)) * radius
        position2[40] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[41] = Math.sin(degreesToRadians(144)) * radius


        position2[42] = Math.cos(degreesToRadians(144)) * radius
        position2[43] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[44] = Math.sin(degreesToRadians(144)) * radius

        position2[45] = Math.cos(degreesToRadians(216)) * radius
        position2[46] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[47] = Math.sin(degreesToRadians(216)) * radius


        position2[48] = Math.cos(degreesToRadians(216)) * radius
        position2[49] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[50] = Math.sin(degreesToRadians(216)) * radius

        position2[51] = Math.cos(degreesToRadians(288)) * radius
        position2[52] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[53] = Math.sin(degreesToRadians(288)) * radius


        position2[54] = Math.cos(degreesToRadians(288)) * radius
        position2[55] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[56] = Math.sin(degreesToRadians(288)) * radius
        
        position2[57] = Math.cos(degreesToRadians(360)) * radius
        position2[58] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[59] = Math.sin(degreesToRadians(360)) * radius




        position2[60] = Math.cos(degreesToRadians(0)) * radius
        position2[61] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[62] = Math.sin(degreesToRadians(0)) * radius

        position2[63] = Math.cos(degreesToRadians(31)) * radius
        position2[64] = -Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[65] = Math.sin(degreesToRadians(31)) * radius


        position2[66] = Math.cos(degreesToRadians(31)) * radius
        position2[67] = -Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[68] = Math.sin(degreesToRadians(31)) * radius

        position2[69] = Math.cos(degreesToRadians(72)) * radius
        position2[70] = Math.sin(degreesToRadians(30)) * radius // HAUTEUR
        position2[71] = Math.sin(degreesToRadians(72)) * radius

        return [position2]
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

    return (
        <>
            <mesh scale={[10, 10, 10]} onClick={console.log('ok')}>
                <icosahedronBufferGeometry attach='geometry' args={[2, 2]} />
                <meshNormalMaterial attach='material' wireframe />
            </mesh>

            <group>
                {/* <lineSegments>
                    <bufferGeometry ref={linesRef}>
                        <bufferAttribute
                            attach='attributes-position'
                            count={position2.length / 3}
                            array={position2}
                            itemSize={3}
                            drawrangle={(0, 0)}
                        />
                    </bufferGeometry>
                    <lineBasicMaterial
                        attach='material'
                        color={'#9c88ff'}
                        linewidth={0.3}
                    />
                </lineSegments> */}

                <mesh>
                    <bufferGeometry ref={particle}>
                        <bufferAttribute
                            attach='index'
                            count={indices.length}
                            array={indices}
                            itemSize={1}
                        />
                        <bufferAttribute
                            attach='attributes-position'
                            count={vertices.length / 3}
                            array={vertices}
                            itemSize={3}
                        />
                    </bufferGeometry>
                    <meshBasicMaterial attach='material' color={'yellow'} side={THREE.DoubleSide} />
                </mesh>

                <points>
                    <bufferGeometry ref={pointsRef}>
                        <bufferAttribute
                            attach='attributes-position'
                            count={points.length / 3}
                            array={points}
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