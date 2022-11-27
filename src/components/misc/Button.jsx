import React from "react";

const Button = ({ texto, color }) => {
  return (
    <div className={`button ${color}`}>
      <div className="button-text">{texto}</div>
    </div>
  );
};

export default Button;
