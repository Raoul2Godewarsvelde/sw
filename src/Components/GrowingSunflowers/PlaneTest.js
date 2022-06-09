import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

const PlaneTest = ({ ...props }) => {

    const group = useRef()
    
    const { nodes, materials } = useGLTF('/assets/blender/Plane_TEST_DRACO.gltf')
    
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Plane_TEST.geometry} material={materials['default']} />
        </group>
    )
}

export default PlaneTest