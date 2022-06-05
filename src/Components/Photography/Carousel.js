import React, { createRef, useRef, useState, useEffect, useMemo } from 'react'

import * as THREE from 'three'
import { useFrame, useLoader } from '@react-three/fiber'

import { Block } from '@components/Photography/Registration/index'

import BLOCKS_DATAS from '@json/Components/Photography/BlocksDatas'

const blocks_number = Object.keys(BLOCKS_DATAS).length

const Carousel = () => {

    // GET ELEMENTs

    const canvas = document.getElementById('scene__canvas')

    // CONSTS

    const canvas_width = canvas.offsetWidth
    const canvas_height = canvas.offsetHeight
    const block_width = 400
    const block_height = 300
    const step_length = block_width * -1.2

    let position_carousel = 0
    let scroll_speed = 0
    let scroll_divided = 0
    let scroll_rounded = 0

    // REFS

    const carouselRef = useRef()

    // STATES

    const [blocksRef, setBlocksRef] = useState([])

    // IMAGES

    const images = useLoader(
        THREE.TextureLoader,
        BLOCKS_DATAS.map(({ image }) => image)
    )
    useMemo(() => images.forEach((texture) => (texture.minFilter = THREE.LinearFilter)), [images])

    // USE EFFECT

    useEffect(() => {
        setBlocksRef((blocksRef) => Array(blocks_number).fill().map((index) => blocksRef[index] || createRef()))
    }, [])

    const setCarouselPosition = (blocks_number, step_length, position_carousel, scroll_rounded) => {

        if (scroll_rounded < 0) {
            scroll_rounded = 0
            const scroll_diff = scroll_rounded - (position_carousel / Math.abs(step_length))
            return position_carousel += Math.sign(scroll_diff) * Math.pow(Math.abs(scroll_diff), 0.7) * 0.08 * Math.abs(step_length)
    
        } else if (scroll_rounded > blocks_number - 1) {
            scroll_rounded = 5
            const scroll_diff = scroll_rounded - (position_carousel / Math.abs(step_length))
            return position_carousel += Math.sign(scroll_diff) * Math.pow(Math.abs(scroll_diff), 0.7) * 0.08 * Math.abs(step_length)
    
        } else {
            const scroll_diff = scroll_rounded - (position_carousel / Math.abs(step_length))
            return position_carousel += Math.sign(scroll_diff) * Math.pow(Math.abs(scroll_diff), 0.7) * 0.015 * Math.abs(step_length)
        }
    }

    window.addEventListener('wheel', (e) => {
        scroll_speed += e.deltaY * 0.03
        /* console.log('scroll_speed', scroll_speed) */
    })

    useFrame(() => {
        position_carousel += scroll_speed
        console.log('position_carousel', position_carousel)
        scroll_speed *= 0.8
        scroll_divided = position_carousel / Math.abs(step_length)
        scroll_rounded = Math.round(scroll_divided)
        position_carousel = setCarouselPosition(blocks_number, step_length, position_carousel, scroll_rounded)

        carouselRef.current.position.x = position_carousel
    })
    
    return (
        <group
            ref={carouselRef}
        >
            {blocksRef.map((block, index) => (
                <Block
                    key={index}
                    index={index}
                    ref={blocksRef[index]}
                    canvasWidth={canvas_width}
                    canvasHeight={canvas_height}
                    blockWidth={block_width}
                    blockHeight={block_height}
                    stepLength={step_length}
                    uTexture={images[index]}
                />
            ))}
        </group>
    )
}

export default Carousel