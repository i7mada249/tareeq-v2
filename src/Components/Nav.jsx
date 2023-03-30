import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'

const Nav = () => {
    return (
        <div>
            <div className='fixed-navbar'>
                <header>

                    <a href="" className='logo'>
                        <Link to="/">
                            <h3 className='grd-txt'>Tareeq</h3>
                        </Link>
                    </a>

                    <nav>
                        <a href="">About</a>
                        <a href="">What</a>
                        <a href="">The</a>
                        <a href="">Heck</a>
                    </nav>
                </header>
            </div>

        </div>
    )
}

export default Nav