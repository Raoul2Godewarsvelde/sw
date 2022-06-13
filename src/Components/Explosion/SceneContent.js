import React from 'react'

const SceneContent = () => {

    return (
        <mesh scale={[10, 10, 10]} onClick={console.log('ok')}>
            <icosahedronBufferGeometry attach='geometry' args={[3, 2]} />
            <meshNormalMaterial attach='material' color='hotpink' />
        </mesh>
    )
}

export default SceneContent