import React from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'

import LotusNenupharDRACO from '@assets/Blender/LotusNenupharDRACO.js'
import PlaneTestDRACO from '@assets/Blender/PlaneTestDRACO.js'

const ContentScene = () => {

    const pointer = new THREE.Vector2();
    const raycaster = new THREE.Raycaster()


    useFrame(({ scene, camera }) => {
        window.addEventListener('pointermove', (e) => {
            pointer.x = (e.clientX / window.innerWidth) * 2 - 1
            pointer.y =  - (e.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(pointer, camera)
            /* console.log('raycaster', raycaster) */
            
            /* console.log('scene', scene) */
            const intersects = raycaster.intersectObjects(scene.children[4].children)
            console.log('intersects', intersects)
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