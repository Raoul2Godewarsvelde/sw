import React from 'react'

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