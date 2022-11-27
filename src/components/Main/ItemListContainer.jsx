import React from "react";
import ItemList from "./ItemList.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { getDocs, query, where } from "firebase/firestore";
import { collectionProds } from "../../services/firebaseConfig.js";

// import { collection, getDocs } from "firebase/firestore";
// import { db } from "../../services/firebaseConfig.js";

const ItemListContainer = () => {
  const [items, setItems] = useState([]); // Permite actualizar el estado items.
  const [loading, setLoading] = useState(true); // Permite actualizar el estado loading.

  // const valor = useParams();
  // console.log(valor);

  const { categoryName } = useParams(); // Permite leer la información posterior a los ':' en la 'Route' del componente actual, lo devuelve como objeto por lo que se aplica destructuring.

  useEffect(() => {
    // MOCKS.JS
    // getProducts(categoryName) //Devuelve únicamente los productos que pertenezcan a la categoría seleccionada.
    //   .then((res) => setItems(res)) // Devuelve los productos si se cumple la promesa
    //   .catch((error) => console.log(error)) // Devuelve un error si la promesa no se cumple
    //   .finally(() => setLoading(false)); // Devuelve el loading a 'false' se cumpla o no la promesa.

    // return setLoading(true); // Siempre se ejecuta primero luego del primer renderizado

    // FIREBASE

    // Para filtrar los productos se utiliza dos métodos de firestore 'query' y 'where' y no el método 'filter'.
    // const q = query(collectionProds, where("category", "==", categoryName));
    const ref = categoryName
      ? query(collectionProds, where("category", "==", categoryName))
      : collectionProds;
    getDocs(ref)
      .then((res) => {
        // 'res' me trae un objeto con mas objetos en lenguaje firestore.
        // console.log(res);
        // Accedemos a la propiedad 'docs' en donde está mi array con los productos de la firestore.
        // console.log(res.docs);
        // Se hace map para pasar los datos a un array.
        const products = res.docs.map((prod) => {
          // console.log(prod);
          // data() me sirve para poder transformar los datos a objetos.
          // console.log(prod.data());
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
    // If de return temprano: ejecuta primero este return si se cumple la condición, evitando que se ejecute el return siguiente.
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
