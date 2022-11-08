import React from "react";
import { Link } from "react-router-dom";
import Button from "../misc/Button";

const Item = ({ product }) => {
  return (
    <div className="item">
      <img className="item-image" src={product.image} alt={product.name} />
      <section className="item-info">
        <h2>{product.name}</h2>
        <p>{product.price}$</p>
      </section>
      <Link to={`/detail/${product.id}`}>
        <Button texto="Ver Detalle" product={product} color={"brown"} />
      </Link>
    </div>
  );
};

export default Item;
