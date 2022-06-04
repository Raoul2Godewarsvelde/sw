import React, { useEffect, useRef, Suspense } from 'react'

import { Canvas, /* Dom */ } from '@react-three/fiber'

import {
    Content,
    Loader
} from './Registration/index'

const Photography = () => {

    const scrollArea = useRef()
    const onScroll = e => (state.top.current = e.target.scrollTop)
    useEffect(() => void onScroll({ target: scrollArea.current }), [])
    return (
        <>
            <Canvas className="canvas" concurrent pixelRatio={1} orthographic camera={{ zoom: state.zoom, position: [0, 0, 500] }}>
            <Suspense fallback={<Dom center className="loading" children="Loading..." />}>
                <Content />
                <Diamonds />
                <Startup />
            </Suspense>
            </Canvas>
            <div className="scrollArea" ref={scrollArea} onScroll={onScroll}>
            {new Array(state.sections).fill().map((_, index) => (
                <div key={index} id={"0" + index} style={{ height: `${(state.pages / state.sections) * 100}vh` }} />
            ))}
            </div>
            <div className="frame">
            <h1 className="frame__title">Scroll, Refraction and Shader Effects</h1>
            <div className="frame__links">
                <a className="frame__link" href="http://tympanus.net/Tutorials/PhysicsMenu/">
                Previous demo
                </a>
                <a className="frame__link" href="https://tympanus.net/codrops/?p=45441">
                Article
                </a>
                <a className="frame__link" href="https://github.com/drcmda/the-substance">
                GitHub
                </a>
            </div>
            <div className="frame__nav">
                <a className="frame__link" href="#00" children="intro" />
                <a className="frame__link" href="#01" children="01" />
                <a className="frame__link" href="#02" children="02" />
                <a className="frame__link" href="#03" children="03" />
                <a className="frame__link" href="#04" children="04" />
                <a className="frame__link" href="#05" children="05" />
                <a className="frame__link" href="#07" children="06" />
            </div>
            </div>
        </>
    )
}

export default Photography