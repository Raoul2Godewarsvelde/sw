import React from 'react'

const Lights = (props) => {
    return (
        <>
            <ambientLight intensity={1} />
            <directionalLight
                castShadow
                intensity={0.2}
            />
        </>
    )
}

export default Lights