import React, {useContext, useEffect} from 'react' 
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

export default function Logout() {

  const {currentUser, setCurrentUser} = useContext(MyContext) 
  const navigate= useNavigate()

  useEffect(() => {
  setCurrentUser("") 
  navigate("/")  
  }, [])

  return (
    <div>Logout</div>
  )
} 
