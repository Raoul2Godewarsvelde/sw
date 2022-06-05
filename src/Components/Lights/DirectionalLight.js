import React from 'react'

const DirectionalLight = ({ intensity }) => {
    return (
        <directionalLight
            castShadow
            intensity={intensity}
        />
    )
}

export default DirectionalLight