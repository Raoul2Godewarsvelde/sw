import React, { useRef } from 'react'

import * as THREE from 'three'
import { useFrame } from '@react-three/fiber'
import { Sampler } from '@react-three/drei'
import { Depth, LayerMaterial } from 'lamina'

import LotusNenupharDRACO from '@assets/Blender/LotusNenupharDRACO.js'
import PlaneTestDRACO from '@assets/Blender/PlaneTestDRACO.js'

const ContentScene = ({ children, strands = 60000, ...props }) => {

    /* const pointer = new THREE.Vector2() */
    const pointer = {x: 0.0, y: 0.0}
    const raycaster = new THREE.Raycaster()

    const meshRef = useRef(null)
    const geomRef = useRef()
    const flowerRef = useRef()
    const windLayer = useRef(null)

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

            windLayer.current.time += 0.005
        })
    })

    return (
        <>
            {React.cloneElement(children, { ref: geomRef })}
            <instancedMesh ref={meshRef} args={[undefined, undefined, strands]} {...props}>
                <coneGeometry args={[0.05, 1.0, 2, 20, false, 0, Math.PI]} />
                <LayerMaterial side={THREE.DoubleSide} lighting="physical" envMapIntensity={1}>
                <Depth colorA="#221600" colorB="#ade266" near={0.14} far={1.52} mapping={'world'} />
                <windLayer
                    args={[{ mode: 'multiply' }]}
                    colorA={'#ffffff'}
                    colorB={'#acf5ce'}
                    noiseScale={10}
                    noiseStrength={5}
                    length={1.2}
                    sway={0.5}
                    ref={windLayer}
                />
                </LayerMaterial>
            </instancedMesh>
            <group>
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
                mesh={<PlaneTestDRACO />}
                instances={flowerRef}
                weight="density"
                />
            </group>
        </>
    )
}

export default ContentScene