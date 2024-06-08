import React from 'react'
import './hero.css'
import arrow from '../../assets/arrow_pointer.png'

const Hero = () => {
  return (
    <div className = 'hero container'>
        <div className='hero-text'>
          <h1>Welcome! This is my Portfolio.</h1>

          <p>
            This is a website built by me using react and vite combined. A highly
            motivated front-end and mobile app developer.
          </p>

           <button className='btn'>Explore More <img src = {arrow} alt = "" /></button>

        </div>
       
        
    </div>
  )
}

export default Hero