import React from 'react'
import Navbar from './Navbar'
import '../Styles/Header.scss';
import Banner from './Banner';
function Header() {
    return (
        <div className="header" style={{width:"100%"}}>
            <header >
            <Navbar/>
            <Banner/>
            </header>
            
        </div>
    )
}

export default Header
