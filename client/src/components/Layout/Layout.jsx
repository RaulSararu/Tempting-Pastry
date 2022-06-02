import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar1 from '../Navbar/Navbar1'
import ScrollToTop from '../ScrollToTop/ScrollToTop'
import Footer from '../Footer/Footer'

export default function Layout() {
  return (
    <div>
        <ScrollToTop />
        <Navbar1 /> 
        <Outlet/>
        <Footer/>
    </div>
  )
}
