import React from "react";
import ItemList from "./ItemList.jsx";
import { getProducts } from "../../js/mocks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  // const valor = useParams();
  // console.log(valor.categoryName);
  const { categoryName } = useParams();

  useEffect(() => {
    getProducts(categoryName)
      .then((res) => setItems(res))
      .catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div className="container item-list-container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
