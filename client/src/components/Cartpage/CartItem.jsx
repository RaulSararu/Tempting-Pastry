import React, { useContext } from "react";


export default function CartItem() {
  // const { counter, setCounter } = useContext(contextExample);
  return (
    <div className="cart">
      <div className="item">
        <p>Item</p>
      </div>
      <div className="qty">
        <p>QTY</p>
        {/* <div className="box">
          <button onClick={() => setCounter(counter - 1)}>-</button>
          <p>{counter}</p>
          <button onClick={() => setCounter(counter + 1)}>+</button> 
        </div> */}
      </div>  
      <div className="price">
        <p>Price</p>
        {/* <p>{counter * 10} $</p> */} 
      </div>
    </div>
  );
}
