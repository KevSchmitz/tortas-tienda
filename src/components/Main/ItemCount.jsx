import { useState } from "react";

const ItemCount = ({ stock, initial = 1, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > 1) {
      setCounter(counter - 1);
    }
  };

  const reset = () => {
    setCounter(1);
  };

  return (
    <div className="item-count">
      <input type="button" value="-" onClick={restar} />
      <p>{counter}</p>
      <input type="button" value="+" onClick={sumar} />
      <input type="button" value="Reset" onClick={reset} />
      <input
        type="button"
        value="Add to Cart"
        onClick={() => {
          onAdd(counter);
        }}
      />
    </div>
  );
};

export default ItemCount;
