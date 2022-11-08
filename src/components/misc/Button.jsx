import React from "react";

const Button = ({ texto, product, color }) => {
  const consoles = () => {
    console.log(product.id);
  };
  return (
    <div className={`button ${color}`} onClick={consoles}>
      <p className="button-text">{texto}</p>
    </div>
  );
};

export default Button;
