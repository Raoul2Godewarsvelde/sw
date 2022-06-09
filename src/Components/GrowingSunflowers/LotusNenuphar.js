import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

const LotusNenuphar = ({ ...props }) => {

    const group = useRef()

    const { nodes, materials } = useGLTF('/assets/blender/Lotus_Nenuphar_DRACO.gltf')

    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.Circle032.geometry} material={materials.Lotus_Pink_1} />
            <mesh geometry={nodes.Circle032_1.geometry} material={materials.Lotus_Pink_2} />
            <mesh geometry={nodes.Circle032_2.geometry} material={materials.Lotus_Pink_3} />
            <mesh geometry={nodes.Circle032_3.geometry} material={materials.Lotus_Pink_4} />
            <mesh geometry={nodes.Circle032_4.geometry} material={materials.Lotus_Pink_5} />
            <mesh geometry={nodes.Circle032_5.geometry} material={materials.Lotus_Light} />
        </group>
    )
}

export default LotusNenuphar