import React from 'react'
import './main.css'
import wrld from '../../src/assets/wrld.JPG'



const main = () => {
  return (
    <body>


      <div id = 'Home' className='bg'>
        
        
        <div className='title-wel'>          
        
              Welcome To newWRLD

        </div>
        
        <div className='by'>

          <h2>
            A portfolio by Denzel Herron
          </h2>
          
          
        </div> 


        <div className='photo'>

          <img src={wrld} alt=''></img>

        </div>  


        <div className='explore'>
          
          <ul>
            
          <btn className='btn' onClick= {() => scrollToSection ('About')}>Let's Explore</btn>
            
          </ul>
          
        </div>

        <div>
          
        
        
        </div>
            
      </div>

    
    </body>
  )
}

const scrollToSection = (sectionId) => {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
};

export default main
