import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import ByRoll from '../Containers/Main/ByRole'

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
                        <Link to="/Learn">
                            إبدأ الان
                        </Link>
                        <Link to="/About">
                            عن طريق
                        </Link>
                        <Link to="/About">
                            للتواصل
                        </Link>
                    </nav>
                </header>
            </div>

        </div>
    )
}

export default Nav