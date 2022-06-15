import React from 'react'

const SceneContent = () => {

    return (
        <mesh scale={[10, 10, 10]} onClick={console.log('ok')}>
            <icosahedronBufferGeometry attach='geometry' args={[2, 2]} />
            <meshNormalMaterial attach='material' color='hotpink' wireframe />
        </mesh>
    )
}

export default SceneContent