import React, { createRef, useRef, useState, useEffect } from 'react'

import { Block } from '@components/Photography/Registration/index'

import BLOCKS_DATAS from '@json/Components/Photography/BlocksDatas'

const blocksNumber = Object.keys(BLOCKS_DATAS).length

const Carousel = () => {

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