import React from 'react'

import { useFrame } from '@react-three/fiber'

import LotusNenupharDRACO from '@assets/Blender/LotusNenupharDRACO.js'
import PlaneTestDRACO from '@assets/Blender/PlaneTestDRACO.js'

const ContentScene = () => {

    useFrame((state, delta) => {
        window.addEventListener('pointermove', (e) => {
            const pointer = {
                x: (e.clientX / window.innerWidth) * 2 - 1,
                y: - (e.clientY / window.innerHeight) * 2 + 1 
            }
            console.log('pointer', pointer)
        })
    })

    return (
        <>
            <LotusNenupharDRACO />
            <PlaneTestDRACO />
        </>
    )
}

export default ContentScene