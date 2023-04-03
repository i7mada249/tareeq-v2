import React from 'react'
import './sidebar.css'
import { Link } from 'react-router-dom'
import Article from './Article'

const sidebar = () => {
    return (
        <div className='sidebar'>
            <h3 className='side-txt'>المزيد من المحتوى</h3>
            <div className="side-content">
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
                <Link to="/frontend">
                    <button className="side-btn">Frontend</button>
                </Link>
            </div>
        </div>

    )
}

export default sidebar