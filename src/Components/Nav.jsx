import React from 'react'
import { Link } from 'react-router-dom'
import { HashLink } from 'react-router-hash-link'
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
                        <HashLink to="/" className='hash-link'>
                            إبدأ الان
                        </HashLink>
                        <a href="">عن طريق</a>
                        <a href="">للتواصل</a>
                    </nav>
                </header>
            </div>

        </div>
    )
}

export default Nav