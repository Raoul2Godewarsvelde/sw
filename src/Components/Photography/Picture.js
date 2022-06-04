import React, { forwardRef, useRef } from 'react'
import { useFrame } from 'react-three-fiber'

import lerp from 'lerp'

import { PictureMaterial } from '@assets/Materials/Registration/index'

import {
    useBlock
} from './Registration/index'

const Picture = forwardRef(({ color = 'white', shift = 1, opacity = 1, args, map, ...props }, ref) => {

  const material = useRef()

  const { viewportHeight, offsetFactor } = useBlock()
  
  let last = states.top.current

  useFrame(() => {
    const { pages, top } = states

    material.current.scale = lerp(material.current.scale, offsetFactor - top.current / ((pages - 1) * viewportHeight), 0.1)
    material.current.shift = lerp(material.current.shift, (top.current - last) / shift, 0.1)
    
    last = top.current
  })
  
  return (
        <mesh
            ref={ref}
            {...props}
        >
            <planeBufferGeometry
                attach='geometry'
                args={args}
            />
            <PictureMaterial
                ref={material}
                attach='material'
                color={color}
                map={map}
                transparent
                opacity={opacity}
            />
        </mesh>
    )
})

export default Picture
