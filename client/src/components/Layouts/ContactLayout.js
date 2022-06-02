import React from "react"; 
import Contact from '../Mail/Mail'

export default function ContactLayout ({children}) {
  return <div>
    <Contact />
  {children}
  </div>
}