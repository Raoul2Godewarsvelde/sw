import React, { useMemo } from 'react'

import { TextureLoader, LinearFilter } from 'three'
import { useLoader } from '@react-three/fiber'

import { usePhotographyState } from '@contexts/Photography/PhotographyContext'

import {
    Paragraph
} from './Registration/index'

const Content = () => {

  // CONTEXTS

  const { photographyState } = usePhotographyState()

  // IMAGES
  
  const images = useLoader(
    TextureLoader,
    photographyState.images.map(({ image }) => image)
  )
  useMemo(
    () => images.forEach(texture => (texture.minFilter = LinearFilter)), [images]
  )

  const { contentMaxWidth: w, canvasWidth, canvasHeight, mobile } = useBlock()
  
  return (
    <>
      {/* <Block factor={1} offset={0}>
        <Block factor={1.2}>
          <Text color="black" anchorX="center" anchorY="middle">
            hello world!
          </Text>
        </Block>
      </Block> */}
      {states.images.map((props, index) => (
        <Paragraph
          key={index} 
          {...props}
          image={images[index]}
        />
      ))}
    </>
  )
}

export default Content