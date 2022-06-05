import React, { createRef, useRef, useState, useEffect } from 'react'

import { Block } from '@components/Photography/Registration/index'

import BLOCKS_DATAS from '@json/Components/Photography/BlocksDatas'
import { useFrame } from '@react-three/fiber'

const blocksNumber = Object.keys(BLOCKS_DATAS).length

const Carousel = () => {

    let scrollCarouselSpeed = 0
    let scrollCarouselPosition = 0
    let scrollCarouselDivided = 0
    let scrollCarouselRounded = 0

    const blocksWidth = 105
    const blocksHeight = 300
    const stepLength = blocksWidth * -1.2
    
    let currentBlocksNumber = blocksNumber

    // GET ELEMENTs

    const canvas = document.getElementById('scene__canvas')

    // CONSTS

    const canvas_width = canvas.offsetWidth
    const canvas_height = canvas.offsetHeight
    const block_width = 400
    const block_height = 300
    const step_length = block_width * -1.2

    // REFS

    const carouselRef = useRef()
    const [blocksRef, setBlocksRef] = useState([])

    // USE EFFECT

    useEffect(() => {
        setBlocksRef((blocksRef) => Array(blocksNumber).fill().map((index) => blocksRef[index] || createRef()))
    }, [])

    const setCarouselPosition = (currentBlocksNumber, stepLength, scrollCarouselPosition, scrollCarouselRounded) => {

        if (scrollCarouselRounded < 0.5) {
            scrollCarouselRounded = 0
            const scrollCarouselDiff = scrollCarouselRounded - (scrollCarouselPosition / Math.abs(stepLength))
            return scrollCarouselPosition += Math.sign(scrollCarouselDiff) * Math.pow(Math.abs(scrollCarouselDiff), 0.7) * 0.08 * Math.abs(stepLength)
    
        } else if (scrollCarouselRounded > currentBlocksNumber - 1.5) {
            scrollCarouselRounded = 5
            const scrollCarouselDiff = scrollCarouselRounded - (scrollCarouselPosition / Math.abs(stepLength))
            return scrollCarouselPosition += Math.sign(scrollCarouselDiff) * Math.pow(Math.abs(scrollCarouselDiff), 0.7) * 0.08 * Math.abs(stepLength)
    
        } else {
            const scrollCarouselDiff = scrollCarouselRounded - (scrollCarouselPosition / Math.abs(stepLength))
            return scrollCarouselPosition += Math.sign(scrollCarouselDiff) * Math.pow(Math.abs(scrollCarouselDiff), 0.7) * 0.025 * Math.abs(stepLength)
        }
    }

    window.addEventListener('wheel', (e) => {
        scrollCarouselSpeed += e.deltaY * 0.03
        console.log('ok')
    })

    useFrame(() => {
        scrollCarouselPosition += scrollCarouselSpeed
        scrollCarouselSpeed *= 0.8
        scrollCarouselDivided = scrollCarouselPosition / Math.abs(stepLength)
        scrollCarouselRounded = Math.round(scrollCarouselDivided)
        scrollCarouselPosition = setCarouselPosition(currentBlocksNumber, stepLength, scrollCarouselPosition, scrollCarouselRounded)

        carouselRef.current.position.x = scrollCarouselPosition
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
                />
            ))}
        </group>
    )
}

export default Carousel