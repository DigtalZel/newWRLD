import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (

    <nav className = 'container'>
       
        <ul>
            <li><button className='btn'>Home</button></li>
            <li><button className='btn'>About</button></li>
            <li><button className='btn'>Experience</button></li>
            <li><button className='btn'>Contact</button></li>
        </ul>
        
        

    </nav>
    
  )
}

export default Navbar