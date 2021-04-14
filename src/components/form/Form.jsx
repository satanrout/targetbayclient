import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { changedState } from "../../redux/rerenderSlice";
import ErrorMessage from "../error/ErrorMessage";
import "./form.css";

const Form = () => {
  const dispatch = useDispatch();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      const config = {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email }),
      };
      const response = await fetch("http://localhost:5000/adduser", config);
      const data = await response.json();
      await dispatch(changedState());
      data.error ? setErrorMessage(data?.error) : setErrorMessage(null);
      setFirstName("");
      setLastName("");
      setEmail("");
    } catch (error) {
      setErrorMessage(error);
    }
  };

  return (
    <>
      <form className="form">
        <input
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          type="text"
          name="firstname"
        />
        <input
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          placeholder="Last Name"
          type="text"
          name="lastname"
        />
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email Address"
          type="email"
          name="email"
          maxLength="45"
        />
        <button onClick={submitHandler}>Save</button>
      </form>
      {errorMessage ? <ErrorMessage>{errorMessage}</ErrorMessage> : null}
    </>
  );
};

export default Form;
