import React from 'react'

import { Scene } from '@components/RayMarching/Registration/index'

import '@styles/Components/RayMarching/ray_marching.scss'

const RayMarching = () => {

    return (
        <div
            id='rayMarching__wrapper'
        >
            <Scene />
        </div>
    )
}

export default RayMarching