import React, { useState } from "react";
import OurStory from "../OurStory/OurStory";

export default function Main() {
  const [cartItems, setCartItems] = useState([]);

  const onAdd = () => {};

  const onRemove = () => {};
  return (
    <div>
      <OurStory />
    </div>
  );
}
