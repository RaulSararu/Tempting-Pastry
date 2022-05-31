import React from 'react'

// import OurStory from '../OurStory/OurStory'
// import Products from '../Products/Products'
import Video from "../../assets/video/cake.mp4"


import "../Top/top.css"

export default function Top() {
  return (
    <div className='main' id="home">
      <div className='overlay'></div>
      <video src={Video} autoPlay loop muted/>
      
          <div className='content'> 
            <h1 className='title'>Tempting Pastry</h1>
            <p className='moto'>Sweets bring love and love is everything</p>
          </div>
        
 
        {/* <Products/>
        <OurStory/> */}
      

    </div>
  )
}
