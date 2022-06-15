import React, {useContext, useEffect} from 'react' 
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../Context';

export default function Logout() {

  const {currentUser, setCurrentUser} = useContext(MyContext) 
  const navigate= useNavigate()

  useEffect(() => {
  deleteCookies()   
  setCurrentUser("") 
  navigate("/")  
  }, [])

  function deleteCookies() {
    var allCookies = document.cookie.split(';');
    
    // The "expire" attribute of every cookie is 
    // Set to "Thu, 01 Jan 1970 00:00:00 GMT"
    for (var i = 0; i < allCookies.length; i++)
        document.cookie = allCookies[i] + "=;expires="
        + new Date(0).toUTCString(); 

}

  return (
    <div>Logout</div>
  )
} 

//============

// const logout = () => {
//   axios.get("http:localhost:5000/auth/logout", {
//       withCredentials: true
//   }).then((res) => {
//       if (res.data === "done") {
//           window.location.href = "/";
//       }
//   });
// };  