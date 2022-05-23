import React, { useState } from 'react'
import Cartpage from '../Cartpage/Cartpage'
import OurStory from '../OurStory/OurStory'






// import FindUs from '../FindUs/FindUs'
// import Homepage from '../Homepage/Homepage'
// import Modal from '../Modal/Modal'

// import Products from '../Products/Products'

export default function Main() {
  const [cartItems, setCartItems] = useState([])

  const onAdd = () => {}

  const onRemove = ()=> {}
  return (
    <div>
        {/* <Homepage/>
        <Products/> */}
        <OurStory/>
        
  
       


    

        {/* <FindUs/> */}
        {/* <Modal cartItems={cartItems}/> */}
        {/* <Cartpage/> */}
   

        </div>
  )
}
