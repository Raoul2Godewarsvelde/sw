import React, { useRef, useMemo } from 'react'

const Square = () => {

    const square_vertices_number = 4
    const square_edges_number = 8

    const square_width = 10
    const square_depth = 5

    const pointsRef = useRef()
    const linesRef = useRef()

    const [square_vertices_position, square_edges_position] = useMemo(() => {

        const square_vertices_position = new Float32Array(square_vertices_number * 3)
        const square_edges_position = new Float32Array(square_edges_number * 3)

        for(let i = 0; i < square_vertices_number; i++) {
            for(let j = 0; j < 3; j++) {
                if(j === 0) square_vertices_position[(i * 3) + j] = (i < 2) ? square_width / 2 : -square_width / 2
                if(j === 1) square_vertices_position[(i * 3) + j] = 0 // HAUTEUR
                if(j === 2) square_vertices_position[(i * 3) + j] = (i < 1 || i > 2) ? square_depth / 2 : -square_depth / 2
            }
        }

        for(let i = 0; i < square_edges_number; i++) {
            for(let j = 0; j < 3; j++) {
                if(j === 0) square_edges_position[(i * 3) + j] = (i < 1 || i > 4) ? square_width / 2 : -square_width / 2
                if(j === 1) square_edges_position[(i * 3) + j] = 0 // HAUTEUR
                if(j === 2) square_edges_position[(i * 3) + j] = (i < 3 || i > 6) ? square_depth / 2 : -square_depth / 2
            }
        }

        return [square_vertices_position, square_edges_position]
    }, [])

    return (
        <group>
            <points>
                <bufferGeometry ref={pointsRef}>
                    <bufferAttribute
                        attach='attributes-position'
                        count={square_vertices_position.length / 3}
                        array={square_vertices_position}
                        itemSize={3}
                    />
                </bufferGeometry>
                <pointsMaterial size={0.3} color={'#ffa726'} />
            </points>   
            <lineSegments>
                <bufferGeometry ref={linesRef}>
                    <bufferAttribute
                        attach='attributes-position'
                        count={square_edges_position.length / 3}
                        array={square_edges_position}
                        itemSize={3}
                        drawrangle={(0, 0)}
                    />
                </bufferGeometry>
                <lineBasicMaterial
                    attach='material'
                    color={'#ffa726'}
                    linewidth={0.3}
                />
            </lineSegments>
        </group>
    )
}

export default Square