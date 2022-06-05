import React, { useEffect, useRef, Suspense } from 'react'

import { Canvas, /* Dom */ } from '@react-three/fiber'

import { usePhotographyState } from '@contexts/Photography/PhotographyContext'

import {
    Content,
    Loader
} from './Registration/index'

const Photography = () => {

    // CONTEXTS

    const { photographyState, setValuesPhotographyState } = usePhotographyState()

    // REFS

    const scrollAreaRef = useRef()

    // ON SCROLL

    const onScroll = e => {
        photographyState.top.current = e.target.scrollTop
        setValuesPhotographyState(photographyState)
    }

    // USE EFFECT

    useEffect(() => {
        onScroll({ target: scrollAreaRef.current })
    })

    // RETURN

    return (
        <>
            <Canvas
            concurrent
            pixelRatio={1}
            orthographic
            camera={{ 
                zoom: photographyState.zoom,
                position: [0, 0, 500]
            }}
            >
            <Suspense 
                /* fallback={<Dom center className='loading' children='Loading...' />} */
                fallback={null}
            >
                <Loader />
                <Content />
            </Suspense>
            </Canvas>
    
            <div
                className='scrollArea'
                ref={scrollAreaRef}
                onScroll={onScroll}
            >
                {new Array(photographyState.sections).fill().map((_, index) => (
                    <div
                        key={index}
                        id={'0' + index}
                        style={{ height: `${(scrollAreaRef.pages / scrollAreaRef.sections) * 100}vh` }}
                    />
                ))}
            </div>
    
            <div className='frame'>
                <div className='frame__logo'>
                    <svg width='130' height='40' viewBox='0 0 130 40' fill='none' xmlns='http://www.w3.org/2000/svg'>
                        <g clipPath='url(#clip0)'>
                            <path d='M7.04418 23.3479H15.667L8.63071 -0.00842285H0L7.04418 23.3479ZM21.664 23.3479H30.263L23.2466 -0.00842285H14.6198L21.664 23.3479ZM29.2357 -0.00842285H38.0409L33.9318 15.2548L29.2357 -0.00842285Z' fill='white'/>
                            <path d='M41.5752 -0.00793457V23.3405H49.8529V-0.00793457H41.5752ZM54.0215 -0.00793457V16.9197C56.2155 16.9166 58.3188 16.0482 59.8698 14.5052C61.4209 12.9621 62.2931 10.8703 62.2952 8.68858V8.0457C62.2952 3.50222 58.5986 -0.00793457 54.0215 -0.00793457Z' fill='white'/>
                            <path d='M81.3056 -0.00793457H72.7067L79.7231 23.3405H88.3498L81.3056 -0.00793457ZM95.9255 -0.00793457H87.3225L94.3389 23.3405H102.97L95.9255 -0.00793457ZM73.7141 23.3405H64.9287L69.0378 8.07726L73.7141 23.3405Z' fill='white'/>
                            <path d='M115.059 0H106.781V23.3485H115.059V0Z' fill='white'/>
                            <path d='M119.727 0H129.996V10.1873L119.727 0Z' fill='white'/>
                            <path d='M118.875 5.89624L124.657 11.6742L118.875 17.4521V5.89624Z' fill='#F22830'/>
                            <path d='M119.727 23.3485L129.996 13.1611V23.3485H119.727Z' fill='white'/>
                            <path d='M27.788 33.9105C28.2855 33.8778 28.7833 33.97 29.2357 34.1787V33.9105C28.721 33.8102 28.1974 33.7613 27.6729 33.7646C25.1266 33.7646 23.7979 34.9478 23.7979 36.8803C23.7979 38.8129 25.1266 40.004 27.6729 40.004C28.1977 40.008 28.7214 39.9578 29.2357 39.8541V37.2432H27.2287V37.4009H28.1092V39.7673C28.1098 39.7822 28.1073 39.7969 28.1019 39.8108C28.0966 39.8246 28.0885 39.8373 28.0781 39.848C28.0678 39.8586 28.0554 39.8671 28.0416 39.8729C28.0279 39.8787 28.0131 39.8817 27.9982 39.8817H27.788C26.2768 39.8817 25.0909 39.0929 25.0909 36.8882C25.0909 34.6835 26.2768 33.9105 27.788 33.9105Z' fill='white'/>
                            <path d='M46.1525 37.0932V37.0656C47.2154 36.8487 47.9056 36.2492 47.9056 35.5117C47.9056 34.3837 46.799 33.8552 45.4108 33.8552H43.2095V39.9369H44.328V37.1761H44.7246C44.7858 37.1741 44.8467 37.1862 44.9025 37.2115C44.9582 37.2368 45.0073 37.2746 45.0459 37.322L47.3225 39.9171H48.683L46.1525 37.0932ZM44.8595 37.0144H44.328V34.1786C44.328 34.0366 44.3716 33.9933 44.5303 33.9933H44.9745C45.97 33.9933 46.6562 34.3167 46.6562 35.5393C46.6562 36.6712 45.855 37.0144 44.8595 37.0144Z' fill='white'/>
                            <path d='M65.1983 33.7606C63.0763 33.7606 61.8745 34.9438 61.8745 36.8764C61.8745 38.8089 63.0644 40 65.1983 40C67.3322 40 68.5221 38.8168 68.5221 36.8764C68.5221 34.9359 67.3282 33.7606 65.1983 33.7606ZM65.1983 39.8699C64.056 39.8699 63.1636 39.0811 63.1636 36.8764C63.1636 34.6717 64.056 33.9105 65.1983 33.9105C66.3406 33.9105 67.241 34.6993 67.241 36.8961C67.241 39.0929 66.3406 39.8699 65.1983 39.8699Z' fill='white'/>
                            <path d='M87.2155 33.8395V37.7835C87.2155 39.0338 86.5888 39.7555 85.4267 39.7555C84.2646 39.7555 83.6101 39.1245 83.6101 37.9531V33.8395H82.4956V38.1503C82.4956 39.1836 83.0985 40 85.0697 40C86.7792 40 87.4178 39.0693 87.4178 37.7796V33.8356L87.2155 33.8395Z' fill='white'/>
                            <path d='M103.569 33.8395H101.387V39.9211H102.502V37.5547H103.418C104.921 37.5547 106.167 36.8685 106.167 35.6774C106.167 34.3837 105.06 33.8395 103.569 33.8395ZM103.236 37.3891H102.502V34.1629C102.502 34.0209 102.545 33.9775 102.704 33.9775H103.243C104.195 33.9775 104.945 34.439 104.945 35.6695C104.945 37.0065 104.064 37.4048 103.236 37.4048V37.3891Z' fill='white'/>
                        </g>
                        <defs>
                            <clipPath id='clip0'>
                                <rect width='130' height='40' fill='white'/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                
                <div className='frame__nav'>
                    <a className='frame__link' href='#01' children='01' />
                    <a className='frame__link' href='#02' children='02' />
                    <a className='frame__link' href='#03' children='03' />
                    <a className='frame__link' href='#04' children='04' />
                    <a className='frame__link' href='#05' children='05' />
                    <a className='frame__link' href='#07' children='06' />
                </div>
            </div>
        </>
    )
}

export default Photography