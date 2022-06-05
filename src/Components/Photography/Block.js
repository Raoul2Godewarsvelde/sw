import React, { forwardRef, useState } from 'react'

import * as THREE from 'three'

import { useSpring } from '@react-spring/core'
import { a } from '@react-spring/three'

const Block = forwardRef(({ index, canvasWidth, canvasHeight, blockWidth, blockHeight, stepLength}, ref) => {
    
    const [active, setActive] = useState(0)

    const { spring } = useSpring({
        spring: active,
        config: {
            mass: 1.0,
            tension: 220,
            friction: 26,
            precision: 0.01
        }
    })

    const windowRatio = canvasWidth / canvasHeight

    const ratio_scale_y = 1.8
    const ratio_scale_x = ratio_scale_y * (windowRatio / 1.7)

    const active_scale_x = canvasWidth / (blockWidth * ratio_scale_x)
    const active_scale_y = canvasHeight / (blockHeight * ratio_scale_y)

    const position_z = spring.to([0, 0], [1, 1.001])

    const scale_x = spring.to([0, 1], [1, active_scale_x])
    const scale_y = spring.to([0, 1], [1, active_scale_y])

    return (
        <>
            <a.mesh
                ref={ref}
                key={index}
                position-x={index * stepLength}
                position-z={position_z}
                scale-x={scale_x}
                scale-y={scale_y}
                onClick={() => {
                    if(active === 0) {
                        setActive(Number(!active))
                    } else {
                        setActive(0)
                    }
                }}
            >
                <planeGeometry
                    attach='geometry'
                    args={[blockWidth, blockHeight, 1, 1]}
                />
                <meshStandardMaterial color={'hotpink'} />
                {/* <blockMaterial
                    attach='material'
                    uTexture={uTexture}
                    side={THREE.DoubleSide}
                    transparent
                /> */}
            </a.mesh>
        </>
    )
})

export default Block