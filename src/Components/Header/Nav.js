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
            </ul>
        </nav>
    )
}

export default Nav