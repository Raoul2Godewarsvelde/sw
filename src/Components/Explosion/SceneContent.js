import React, { useMemo, useCallback } from 'react'

import * as THREE from 'three'

const SceneContent = () => {
     
    const vertices = useMemo(() => new Float32Array([-1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0]), [])
    
    /* const update = useCallback(self => {
        self.needsUpdate = true
        self.parent.computeBoundingSphere()
    }, []) */

    return (
        <>
            <mesh scale={[10, 10, 10]} onClick={console.log('ok')}>
                <icosahedronBufferGeometry attach='geometry' args={[2, 2]} />
                <meshNormalMaterial attach='material' wireframe />
            </mesh>
            <mesh position={[0, 0 , 0]}>
                <bufferGeometry attach='geometry' onUpdate={self => self.computeVertexNormals()}>
                    <bufferAttribute
                        attachObject={["attributes", "position"]}
                        array={vertices}
                        itemSize={3}
                        /* onUpdate={update} */
                    />
                </bufferGeometry>
                <meshNormalMaterial />
            </mesh>
        </>
    )
}

export default SceneContent