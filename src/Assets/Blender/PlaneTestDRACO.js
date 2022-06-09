import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

const PlaneTestDRACO = ({ ...props }) => {

    const group = useRef()
    const { nodes, materials } = useGLTF('/assets/blender/PlaneTestDRACO.glb')

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Plane_TEST.geometry} material={materials['default']} />
        </group>
    )
}

useGLTF.preload('/assets/blender/PlaneTestDRACO.glb')

export default PlaneTestDRACO