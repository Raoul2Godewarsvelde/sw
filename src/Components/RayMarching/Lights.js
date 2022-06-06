import React from 'react'

import * as THREE from 'three'

import { AmbientLight, DirectionalLight } from '@components/Lights/Registration/index'

const Lights = () => {

    return (
        <>
            <AmbientLight
                position={[10, 10, 10]}
                color={new THREE.Color(0xffffff)}
                intensity={0.5}
            />
            <DirectionalLight
                position={[5, 5, 5]}
                color={new THREE.Color(0xffffff)}
                intensity={0.2}
            />
        </>
    )
}

export default Lights