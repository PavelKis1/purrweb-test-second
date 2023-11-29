import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo/logo.svg'
import cl from './Navbar.module.css'

function Navbar() {
    return (
        <div className={cl.header}>
            <div className="container">
                <nav className={cl.navbar}>
                    <Link className={cl.logo} to="/"><img src={logo} alt="purrweb" /></Link>
                </nav>
            </div>
        </div>
    )
}

export default Navbar