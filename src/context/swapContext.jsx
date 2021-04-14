import React, { useState, createContext } from "react";
// import { useSelector } from "react-redux";

export const swapContext = createContext();

export const SwapProvider = (props) => {
  // const { users } = useSelector((state) => state.user);
  const [swap, setSwap] = useState([]);
  return (
    <swapContext.Provider value={{ swap, setSwap }}>
      {props.children}
    </swapContext.Provider>
  );
};
