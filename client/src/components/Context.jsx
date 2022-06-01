import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();
export default function MyContextProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...item, qty: 1 }]);
    }
  }; // adds items to the cart

  const removeItem = (item) => {
    const exist = cart.find((x) => x.id === item.id);
    if (exist.qty === 1) {
      setCart(cart.filter((x) => x.id !== item.id));
    } else {
      setCart(
        cart.map((x) =>
          x.id === item.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };

  const itemsPrice = cart.reduce((a,c) => a + c.price * c.price, 0)



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
    <MyContext.Provider
      value={{
        userObject,
        currentUser,
        setCurrentUser,
        addToCart,
        cart,
        removeItem,
        itemsPrice
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
