import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();
export default function MyContextProvider({ children }) {
    const [cart,setCart] = useState([])

    const addToCart = item => {
        
        console.log('add to cart',item);
        
        setCart([...cart, item])} // adds items to the cart

    
  const [currentUser, setCurrentUser] = useState("");
  const [userObject, setUserObject] = useState();

//   useEffect(() => {
//     axios.get("/getuser", { withCredentials: true }).then((res) => {
//       console.log(res);
//       if (res.data) {
//         setUserObject(res.data);
//       }
//     });
//   }, []);

  return (
    <MyContext.Provider value={{ userObject, currentUser, setCurrentUser,addToCart,cart }}>
      {children}
    </MyContext.Provider>
  );
}
