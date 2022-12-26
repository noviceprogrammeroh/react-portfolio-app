/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable react/jsx-no-undef */
import React from 'react';
import '../styles/Navbar.css';
import {Link, useMatch, useResolvedPath} from 'react-router-dom'






function Navigation(props) {

  return (
    <div id="nav-id" className='container-fluid'>
      {/* <h1 className='h1-nav'>Perez</h1> */}
      
       <ul className='ul'>
        <CustomLink className="a-navbar" to="/">Home</CustomLink>
        <CustomLink  className="a-navbar" to="/portfolio">Portfolio</CustomLink>
        <CustomLink className="a-navbar" to="/about">About Me</CustomLink>
        <CustomLink className="a-navbar" to="/contact">Contact</CustomLink>
        <CustomLink  className="a-navbar"to="/resume">Resume</CustomLink>
      </ul>
    </div>
  );
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li id='li'  className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
}

export default Navigation;
