import React from 'react'

import { Nav } from './Registration/index'

import '@styles/Components/Header/header.scss'

const Header = ({ setMySmallWorldActivated }) => {

    return (
        <header>
            <Nav />        
        </header>
    )
}

export default Header