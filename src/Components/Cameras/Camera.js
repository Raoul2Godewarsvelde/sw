import React, { useEffect, forwardRef } from 'react'

import { useThree } from '@react-three/fiber'
import { PerspectiveCamera, OrbitControls } from '@react-three/drei'

const Camera = forwardRef((props, ref) => {

    // USE THREE

    const set = useThree(state => state.set)

    // USE EFFECT

    useEffect(() => {
      void set({ camera: ref.current })
    })

    const canvas = document.getElementById('scene__canvas')
    let canvasWidth = canvas.offsetWidth
    let canvasHeight = canvas.offsetHeight

    window.addEventListener('resize', () => {
        canvasWidth = canvas.offsetWidth
        canvasHeight = canvas.offsetHeight
        ref.current.aspect = canvasWidth / canvasHeight
        ref.current.fov = 2 * Math.atan((canvasHeight / 2) / props.cameraPositionZ) * (180 / Math.PI)
    })

    return (
        <>
            <PerspectiveCamera
                ref={ref}
                {...props}
                /* aspect={canvasWidth / canvasHeight} */
                /* fov={2 * Math.atan((canvasHeight / 2) / props.cameraPositionZ) * (180 / Math.PI)} */
                onUpdate={self => self.updateProjectionMatrix()}
            />
            <OrbitControls />
        </>
    )
})

export default Camera