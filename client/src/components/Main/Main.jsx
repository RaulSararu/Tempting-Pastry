import React from 'react'
import FindUs from '../FindUs/FindUs'
import Homepage from '../Homepage/Homepage'
import Modal from '../Modal/Modal'


import OurStory from '../OurStory/OurStory'
import Products from '../Products/Products'

export default function Main() {
  return (
    <div>
        <Homepage/>
        <Products/>
        <OurStory/>
        <FindUs/>
        <Modal/>
 

        </div>
  )
}
