import React from "react";
import ItemCount from "./ItemCount";

const ItemDetail = ({ item }) => {
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
      <ItemCount
        stock={7}
        initial={1}
        onAdd={() => {
          console.log("Adding to cart");
        }}
      />
    </div>
  );
};

export default ItemDetail;
