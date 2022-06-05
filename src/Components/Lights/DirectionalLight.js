import React from 'react'

import * as THREE from 'three'

const DirectionalLight = ({ position, color, intensity }) => {
    return (
        <directionalLight
            castShadow
            position={position}
            color={color}
            intensity={intensity}
        />
    )
}

export default DirectionalLight