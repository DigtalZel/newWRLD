import React from 'react'
import './hero.css'
import chi from '../../assets/chi.jpg'


const Hero = () => {
  return (
    <div id = 'Home' className = 'target-section'>

    <div className = 'hero container'>
        <div  className='hero-text'>
          <h1>Welcome to the newWRLD.</h1>

          <p>
            Portfolio By Denzel Herron
          </p>

           

          </div>


     <div className='headshots'>
      
          <img src = {chi} alt = "" />

        </div>

        </div>
       
         
    </div>

   
    
  )
}

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

export default Hero