import React from 'react'
import Products from '../Products/Products'
// import Video from "../../assets/video/cake.mp4"
import "./main.css"
import OurStory from '../OurStory/OurStory'
import Modal from '../Modal/Modal'

export default function Main() {
  return (
    <div className='main'>
      {/* <div className='overlay'></div>
      <video src={Video} autoPlay loop muted/>
      
          <div className='content'> 
            <h1 className='title'>Tempting Pastry</h1>
            <p className='moto'>Sweets bring love and love is everything</p>
          </div>
         */}
 
        <Products/>
        {/* <OurStory/> */}
        <Modal/>
  
        
       

       
      

 
     
    </div>
  )
}
