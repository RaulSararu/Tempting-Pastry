import React from 'react'
import FindUs from '../FindUs/FindUs'
import Homepage from '../Homepage/Homepage'
import OurStory from '../OurStory/OurStory'
import Products from '../Products/Products'
import Navbar from '../Navbar/Navbar'
import Video from "/home/user/dci/Tempting-Pastry/client/src/assets/video/cake.mp4"
import "../Main/main.css"

export default function Main() {
  return (
    <div className='main'>
      <div className='overlay'></div>
      <video src={Video} autoPlay loop muted/>
      <Navbar />
          <div className='content'> 
            <h1 className='title'>Tempting Pastry</h1>
            <p className='moto'>Sweets bring love and love is everything</p>
          </div>
        
        <Homepage/>
        <Products/>
        <OurStory/>
        <FindUs/>

    </div>
  )
}
