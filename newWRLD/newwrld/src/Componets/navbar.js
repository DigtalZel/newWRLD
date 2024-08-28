import React from 'react'
import './navbar.css'

const navbar = () => {
  return (
    <div >
        <nav>

           <ul>
            <li><btn className='btn' onClick= {() => scrollToSection ('Home')}>Home</btn></li> 
            <li><btn className='btn' onClick= {() => scrollToSection ('About')}>About</btn></li>
            <li><btn className='btn' onClick= {() => scrollToSection ('Projects')}>Projects</btn></li>
            <li><btn className='btn' onClick= {() => scrollToSection ('Contact')}>contact</btn></li>
            
            </ul>       

        </nav>
    </div>
  )
}

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};


export default navbar
