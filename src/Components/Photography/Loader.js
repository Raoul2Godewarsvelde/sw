import React, { useRef } from 'react'

import { useFrame } from 'react-three-fiber'

import lerp from 'lerp'

import { Picture } from '@components/Photography/Registration/index'

const Loader = () => {

    const loader = useRef()

    useFrame(() => (
        loader.current.material.opacity = lerp(loader.current.material.opacity, 0, 0.025)
    ))

    return (
        <Picture
            ref={loader} 
            color='#000000' 
            position={[0, 0, 200]}
            scale={[100, 100, 1]}
        />
    )
}

export default Loader