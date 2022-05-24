import React, {useContext, useEffect} from 'react' 
import { useNavigate } from 'react-router-dom';
import { myContext } from '../Context'; 
export default function Logout() {

  const {currentUser, setCurrentUser} =useContext(myContext) 
  const navigate= useNavigate()

  useEffect(() => {
  setCurrentUser("") 
  navigate("/")  
  }, [])

  return (
    <div>Logout</div>
  )
} 
