import React from 'react'

import { Blocks, useBlock } from '@components/Photography/Registration/index'

import { Picture } from '@components/Photography/Registration/index'

const Paragraph = ({ image, offset, factor, aspect }) => {

    const { contentMaxWidth: width, mobile } = useBlock()

    const size = aspect < 1 && !mobile ? 0.65 : 1

    return (
        <Blocks 
            factor={factor}
            offset={offset}
        >
            <group
                position={[0, 0, 0]}
            >
                <Picture
                    map={image}
                    args={[1, 1, 32, 32]}
                    shift={200}
                    size={size}
                    aspect={aspect}
                    scale={[width * size, (width * size) / aspect, 1]}
                    frustumCulled={false}
                />
            </group>
        </Blocks>
    )
  }