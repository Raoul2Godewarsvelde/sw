import React from 'react'

import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <nav>
            <ul>
                <li>
                    <Link
                        onClick={() => console.log('callback after route change')}
                        to='/'>
                            Home
                    </Link>
                </li>
                <li>
                    <Link
                        to='/photography'>
                            Photography
                    </Link>
                </li>
                <li>
                    <Link
                        to='/ray_marching'>
                            Ray marching
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav