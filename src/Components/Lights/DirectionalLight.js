import React from 'react'

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