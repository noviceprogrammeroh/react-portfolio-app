import React from 'react'
import Navigation from './Navigation'
import '../styles/Header.css';


export default function Header() {
    return (
        <div id='parent-header-div-id'>
        <div id='header-id' className='header-class'></div>
         <h1 id='h1-header-id' className='h1-header'>Perez</h1>
            <Navigation/>
        </div>

    )
}
