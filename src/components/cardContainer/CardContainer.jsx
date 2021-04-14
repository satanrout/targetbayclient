import React, { useContext, useEffect } from "react";
import "./cardcontainer.css";
import Card from "../card/Card";
import { useSelector } from "react-redux";
import { swapContext } from "../../context/swapContext";

const CardContainer = () => {
  const { changed } = useSelector((state) => state.changed);
  const { swap, setSwap } = useContext(swapContext);

  useEffect(() => {
    fetch("https://targetbayapi.herokuapp.com/", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => response.json())
      .then((data) => setSwap(data))
      .catch((err) => console.log(err));
  }, [setSwap, changed]);
  console.log(swap);
  return (
    <>
      <div className="cardcontainer">
        {swap.map((info, index) => (
          <Card
            firstname={info?.firstName}
            lastname={info?.lastName}
            eMail={info?.email}
            key={info?._id}
            id={info?._id}
            num={index}
          />
        ))}
      </div>
    </>
  );
};

export default CardContainer;
