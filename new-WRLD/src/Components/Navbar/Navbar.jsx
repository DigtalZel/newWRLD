import React from 'react'
import './Navbar.css'


const Navbar = () => {


  return (
    <div>
    <nav className = 'container'>
       
        <ul>
            <li><button className='btn' onClick= {() => scrollToSection ('Home')}>Home</button>
          
      

            </li>
            <li><button className='btn' onClick= {() => scrollToSection ('About')}>About</button></li>
            <li><button className='btn' onClick= {() => scrollToSection ('Exp')}>Experience</button></li>
            <li><button className='btn' onClick= {() => scrollToSection ('Contact')}>Contact</button></li>
        </ul>
        

        

       

    </nav></div>
    
  )
}

 const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
  };
export default Navbar