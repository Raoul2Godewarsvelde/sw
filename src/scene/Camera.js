import React, { useEffect } from 'react'

import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

const Camera = React.forwardRef((props, ref) => {
    const set = useThree(state => state.set)
    useEffect(() => {
      void set({ camera: ref.current })
    })
    return (
        <>
            <PerspectiveCamera
                ref={ref}
                {...props}
                orthographic
                aspect={window.innerWidth / window.innerHeight}
                radius={(window.innerWidth + window.innerHeight) / 4}
                /* fov={60} */
                onUpdate={self => self.updateProjectionMatrix()}
            />
            <OrbitControls
                camera={ref.current}
                maxDistance = {25}
                minDistance = {5}
                maxPolarAngle = {Math.PI / 2}
                minPolarAngle = {-Math.PI / 2}
            />
        </>
    )
})

export default Camera