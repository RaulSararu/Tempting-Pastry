import React, { createContext, useEffect, useState } from "react";
import axios from "axios";

export const MyContext = createContext();

const cartLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");

export default function MyContextProvider({ children }) {
  const [cart, setCart] = useState(cartLocalStorage);

  const [postData, setPostData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    apartment: "",
    city: "",
    country: "",
    zipCode: "",
    phone: "",
  });

  const [payment, setPayment] = useState("");

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

  const handleRemove = (item) => {
    const arr = cart.filter((x) => x.id !== item.id);
    setCart(arr);
  };

  const itemsPrice = cart.reduce((a, c) => a + c.price * c.qty, 0);
  const taxPrice = itemsPrice * 0.14;
  const shippingPrice = itemsPrice > 50 ? 0 : 10;
  const totalPrice = itemsPrice + taxPrice + shippingPrice;

  const [currentUser, setCurrentUser] = useState("");
  const [userObject, setUserObject] = useState();

  useEffect(() => {
    const userToken = getCookie("User_Token");
    if (!userToken) return;
    console.log("userToken", userToken);
    const temp = atob(userToken.split(".")[1]);
    console.log("temp", temp);
    const user = JSON.parse(atob(userToken.split(".")[1]));
    console.log("--------------", user);
    setUserObject(user);
    setCurrentUser({
      username: user.username,
      email: user.email,
      id: user._id,
    });
  }, []);

  function getCookie(cName) {
    const name = cName + "=";
    const cDecoded = decodeURIComponent(document.cookie);
    //to be careful
    const cArr = cDecoded.split("; ");
    let res;
    cArr.forEach((val) => {
      if (val.indexOf(name) === 0) res = val.substring(name.length);
    });
    return res;
  }

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  useEffect(() => {
    axios
      .get("http:localhost:5000/getuser", { withCredentials: true })
      .then((res) => {
        console.log(res);
        if (res.data) {
          setUserObject(res.data);
        }
      });
  }, []);

  return (
    <MyContext.Provider
      value={{
        userObject,
        currentUser,
        setCurrentUser,
        addToCart,
        cart,
        removeItem,
        itemsPrice,
        totalPrice,
        shippingPrice,
        handleRemove,
        postData,
        setPostData,
        payment,
        setPayment,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}
