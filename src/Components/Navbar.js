import React from 'react'
import img1 from '../assets/580b57fcd9996e24bc43c529.png';
import img2 from '../assets/Netflix-avatar.png';
import '../Styles/navbar.scss';
import {useState,useEffect} from 'react';
function Navbar() {

 const [show, setshow] = useState(false);

 const transition=()=>{
    if( window.scrollY>100)
      setshow(true);
     else
     setshow(false);
 }

 useEffect(() => {
     window.addEventListener("scroll",transition);
     return () => {
         window.removeEventListener("scroll",transition)
     }
 }, [])
    return (
        <div className={`navbar ${show && "show"}`}>
            <div >
             <img src={img1} className="navbar-logo"/>
            </div>
            <div >
              <img src={img2} className="navbar-avatar"/>
            </div>
            
        </div>
    )
}

export default Navbar
