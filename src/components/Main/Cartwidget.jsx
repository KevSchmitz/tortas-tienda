import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cartwidget = () => {
  const { totalItems } = useContext(CartContext);
  return (
    <div className="cartwidget">
      <span className="material-symbols-outlined">shopping_cart</span>
      {totalItems() !== 0 && <h4>{totalItems()}</h4>}
    </div>
  );
};
export default Cartwidget;
