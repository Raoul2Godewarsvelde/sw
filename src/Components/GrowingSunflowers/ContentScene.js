import React, { useRef } from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Sampler } from '@react-three/drei'

import LotusNenupharDRACO from '@assets/Blender/LotusNenupharDRACO.js'
import PlaneTestDRACO from '@assets/Blender/PlaneTestDRACO.js'

const ContentScene = ({ children }) => {

    const pointer = new THREE.Vector2()
    const raycaster = new THREE.Raycaster()

    const meshRef = useRef(null)
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
            {/* {React.cloneElement(children, { ref: geomRef })} */}
            <LotusNenupharDRACO />
            <Sampler
                weight={'normal'}
                mesh={geomRef}
                /* transform={transformPoint} */
            >
                {/* {React.cloneElement(children, { ref: geomRef })}
                <instancedMesh args={[null, null, 10]}>
                    <LotusNenupharDRACO id={1} />
                </instancedMesh> */}
                <mesh>
                    <PlaneTestDRACO />
                </mesh>
            </Sampler>
        </>
    )
}

export default ContentScene