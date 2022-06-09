import React, { useRef } from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Sampler } from '@react-three/drei'

import LotusNenupharDRACO from '@assets/Blender/LotusNenupharDRACO.js'
import PlaneTestDRACO from '@assets/Blender/PlaneTestDRACO.js'

const ContentScene = () => {

    const pointer = new THREE.Vector2()
    const raycaster = new THREE.Raycaster()

    const geomRef = useRef()
    const flowerRef = useRef()

    const AddLotusNenuphar = () => {

    }

    useFrame(({ scene, camera }) => {
        window.addEventListener('pointermove', (e) => {
            pointer.x = (e.clientX / window.innerWidth) * 2 - 1
            pointer.y =  - (e.clientY / window.innerHeight) * 2 + 1

            raycaster.setFromCamera(pointer, camera)
            
            const intersects = raycaster.intersectObjects(scene.children[4].children)

            if(intersects.length > 0 ){
                AddLotusNenuphar()
            }
        })
    })

    return (
        <>
            <Sampler
                transform={({ position, normal, dummy: object }) => {
                    object.scale.setScalar(Math.random() * 0.0075)
                    object.position.copy(position)
                    object.lookAt(normal.add(position))
                    object.rotation.y += Math.random() - 0.5 * (Math.PI * 0.5)
                    object.rotation.x += Math.random() - 0.5 * (Math.PI * 0.5)
                    object.rotation.z += Math.random() - 0.5 * (Math.PI * 0.5)
                    object.updateMatrix()
                    return object
                }}
                mesh={geomRef}
                instances={flowerRef}
                weight='density'
            />
            <LotusNenupharDRACO ref={flowerRef} />
            <PlaneTestDRACO />
        </>
    )
}

export default ContentScene