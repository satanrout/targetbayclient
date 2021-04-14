import React from "react";
import "./errormessage.css";

const ErrorMessage = ({ children }) => {
  return <div className="error">{children}</div>;
};

export default ErrorMessage;
