import React, { useMemo } from 'react'

import { TextureLoader, LinearFilter } from 'three'
import { useLoader } from '@react-three/fiber'

import {
    Paragraph
} from './Registration/index'

const Content = () => {

    const images_datas = [
        {
          offset: 1,
          factor: 1,
          header: '',
          image: '/assets/img/bitmap/VerbalShoota.jpg',
          aspect: 1
        },
        {
          offset: 2,
          factor: 1,
          header: '',
          image: '/assets/img/bitmap/VerbalShoota.jpg',
          aspect: 1
        },
        {
          offset: 3,
          factor: 1,
          header: '',
          image: '/assets/img/bitmap/VerbalShoota.jpg',
          aspect: 1
        },
        {
          offset: 4,
          factor: 1,
          header: '',
          image: '/assets/img/bitmap/VerbalShoota.jpg',
          aspect: 1
        },
        {
          offset: 5,
          factor: 1,
          header: '',
          image: '/assets/img/bitmap/VerbalShoota.jpg',
          aspect: 1
        },
        { 
          offset: 6,
          factor: 1,
          header: '',
          image: '/assets/img/bitmap/VerbalShoota.jpg',
          aspect: 1
        }
    ]

    const images = useLoader(
        TextureLoader,
        images_datas.map(({ image }) => image)
    )

    useMemo(() => images.forEach(texture => (texture.minFilter = LinearFilter)), [images])

    return (
        <>
            {images_datas.map((props, index) => (
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