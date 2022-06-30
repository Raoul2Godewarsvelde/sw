import React, { useRef, useMemo } from 'react'

const SceneContent = () => {

    return (
        <>
            <mesh scale={[1, 1, 1]}>
                <boxBufferGeometry attach='geometry' args={[1, 1]} />
                <meshNormalMaterial attach='material' />
            </mesh>
        </>
    )
}

export default SceneContent

// https://docs.pmnd.rs/react-three-fiber/API/objects
// https://codesandbox.io/s/m7inl?file=/src/App.js
// http://www.songho.ca/opengl/gl_sphere.html