import React, { useRef } from 'react'

import { useGLTF } from '@react-three/drei'

const LotusNenupharDRACO = ({ ...props }) => {

    const group = useRef()
  
    const { nodes, materials } = useGLTF('/assets/blender/LotusNenupharDRACO.glb')
  
    return (
        <group ref={group} {...props} dispose={null}>
            <mesh geometry={nodes.LotusNenuphar_1.geometry} material={materials.Lotus_Pink_1} />
            <mesh geometry={nodes.LotusNenuphar_2.geometry} material={materials.Lotus_Pink_2} />
            <mesh geometry={nodes.LotusNenuphar_3.geometry} material={materials.Lotus_Pink_3} />
            <mesh geometry={nodes.LotusNenuphar_4.geometry} material={materials.Lotus_Pink_4} />
            <mesh geometry={nodes.LotusNenuphar_5.geometry} material={materials.Lotus_Pink_5} />
            <mesh geometry={nodes.LotusNenuphar_6.geometry} material={materials.Lotus_Light} />
        </group>
    )
}

useGLTF.preload('/assets/blender/LotusNenupharDRACO.glb')

export default LotusNenupharDRACO