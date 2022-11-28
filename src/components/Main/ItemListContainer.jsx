import React from "react";
import ItemList from "./ItemList.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProds } from "../../services/firebaseConfig.js";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  const { categoryName } = useParams();

  useEffect(() => {
    const ref = categoryName
      ? query(collectionProds, where("category", "==", categoryName))
      : collectionProds;
    getDocs(ref)
      .then((res) => {
        const products = res.docs.map((prod) => {
          return {
            id: prod.id,
            ...prod.data(),
          };
        });
        setItems(products);
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [categoryName]);

  if (loading) {
    return (
      <Skeleton
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px auto 0 auto",
        }}
        height={600}
        width={400}
      />
    );
  }

  return (
    <div className="container item-list-container">
      <ItemList items={items} />
    </div>
  );
};

export default ItemListContainer;
