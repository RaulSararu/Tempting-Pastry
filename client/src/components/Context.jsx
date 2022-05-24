import { createContext } from "react";
import { useState } from "react";

export const contextExample = createContext();

export default function ContextProvider({ children }) {
  const [counter, setCounter] = useState(0);

  return (
    <contextExample.Provider value={{ counter, setCounter }}>
      {children}
    </contextExample.Provider>
  );
}
