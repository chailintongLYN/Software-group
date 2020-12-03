import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

const Header = () => {
    return (
        <header>
            <nav>
                <NavLink activeClassName='active' exact to='/'>React</NavLink>
                <NavLink activeClassName='active' to='/doc'>文档</NavLink>
                <NavLink activeClassName='active' to='/tuto'>教程</NavLink>
                <NavLink activeClassName='active' to='/blog'>博客</NavLink>
                <NavLink activeClassName='active' to='/comm'>社区</NavLink>
            </nav>
        </header>
    )
}

export default Header