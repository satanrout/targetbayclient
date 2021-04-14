import React, { useContext, useState } from "react";
import { useDispatch } from "react-redux";
import { swapContext } from "../../context/swapContext";
import { deleteUsers } from "../../redux/deleteSlice";
import { changedState } from "../../redux/rerenderSlice";
import "./card.css";

const Card = ({ firstname, lastname, eMail, id, num }) => {
  const dispatch = useDispatch();
  const { setSwap, swap } = useContext(swapContext);

  const [edit, setEdit] = useState(false);
  const [firstName, setFirstName] = useState(firstname);
  const [lastName, setLastName] = useState(lastname);
  const [email, setEmail] = useState(eMail);
  const [swapNumber, setSwapNumber] = useState("");
  // const [selectValue, setSelectValue] = useState(0);

  // const { users } = useSelector((state) => state.user);
  // console.log(
  //   ([users[num], users[selectValue]] = [users[selectValue], users[num]])
  // );
  // console.log(num, selectValue);
  // const swap = [...users];

  const deleteHandler = () => {
    dispatch(deleteUsers(id)).then(() => dispatch(changedState()));
  };

  const handleEnter = (e) => {
    if (e.key === "Enter") {
      fetch(`http://localhost:5000/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName, lastName, email }),
      })
        .then((response) => response.json())
        .then((data) => console.log(data))
        .then(() => dispatch(changedState()))
        .catch((err) => console.log(err));
      setEdit(!edit);
    } else {
      return null;
    }
  };

  const handleswapNumber = (e) => {
    if (e.key === "Enter") {
      [swap[num], swap[swapNumber]] = [swap[swapNumber], swap[num]];
      setSwap([...swap]);
    }
  };

  // const selectHandle = (e) => {
  //   setSelectValue(e.target.value);
  //   console.log(swap[num], "swapnum", swap[selectValue], "swapselectvalue");
  //   console.log(
  //     ([swap[num], swap[selectValue]] = [swap[selectValue], swap[num]])
  //   );
  // };

  return (
    <div className="card">
      <div className="top">
        <div className="id">#{num + 1}</div>
        <div className="swapNumber">
          <input
            onKeyPress={handleswapNumber}
            onChange={(e) => setSwapNumber(e.target.value - 1)}
            placeholder="swap"
            min="1"
            max={swap.length}
            type="number"
          />
        </div>

        <div className="actions">
          <span onClick={() => setEdit(!edit)} className="material-icons">
            edit
          </span>
          <span onClick={deleteHandler} className="material-icons">
            delete
          </span>
        </div>
      </div>
      <div className="bottom">
        {edit ? (
          <>
            <input
              onKeyPress={handleEnter}
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              type="text"
            />
            <input
              onKeyPress={handleEnter}
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              type="text"
            />
            <input
              onKeyPress={handleEnter}
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              type="email"
            />
          </>
        ) : (
          <>
            <div className="text-content">First Name: Mr.{firstname}</div>
            <div className="text-content">Last Name: {lastname}</div>
            <div className="text-content">Email: {eMail}</div>
          </>
        )}
      </div>
    </div>
  );
};

export default Card;
