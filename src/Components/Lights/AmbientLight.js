import React from 'react'

import * as THREE from 'three'

const AmbientLight = ({ position, color, intensity }) => {

    return (
        <ambientLight
            position={position}
            color={color}
            intensity={intensity}
        />
    )
}

export default AmbientLight