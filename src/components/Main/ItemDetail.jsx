import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart, itemQuantity } = useContext(CartContext);
  const initialQuantity = itemQuantity(item.id);

  const onAdd = (qty) => {
    setQuantity(qty); //Permite recibir la cantidad desde ItemCount
    addToCart(item, qty);
  };

  return (
    <div className="itemDetail">
      <img className="itemDetail-image" src={item.image} alt={item.name} />
      <div className="itemDetail-info">
        <h2 className="itemDetail-name">{item.name}</h2>
        <p className="itemDetail-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus
          repellat in veritatis.
        </p>
        <h3 className="itemDetail-price">${item.price}</h3>
      </div>

      {quantity !== 0 ? ( //Permite alternar entre el componente ItemCart y Link que lleva al carrito de compras
        <Link to="/cart" className="item-count">
          Ir al carrito
        </Link>
      ) : (
        <ItemCount stock={7} initial={initialQuantity} onAdd={onAdd} />
      )}
    </div>
  );
};

export default ItemDetail;
