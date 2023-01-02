import { addDoc } from "firebase/firestore";
import React, { useState } from "react";
import { collectionProds } from "../../services/firebaseConfig";

const Admin = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const product = {
      name: name,
      category: category,
      image: image,
      price: price,
    };
    addDoc(collectionProds, product)
      .then((res) => console.log(res))
      .catch((e) => console.log("Error:", e));
  };

  const handleName = (e) => setName(e.target.value);
  const handlePrice = (e) => setPrice(parseFloat(e.target.value));
  const handleImage = (e) => setImage(e.target.value);
  const handleCategory = (e) => setCategory(e.target.value);

  return (
    <div className="container">
      <form
        action=""
        onSubmit={handleSubmit}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          width: "35%",
          margin: "20px auto 0 auto",
        }}
      >
        <input
          onChange={handleName}
          type="text"
          placeholder="Nombre del producto"
        />
        <input
          onChange={handlePrice}
          type="number"
          placeholder="Precio del producto"
        />
        <input
          onChange={handleImage}
          type="text"
          placeholder="URL de imagen del producto"
        />
        <input
          onChange={handleCategory}
          type="text"
          placeholder="Categoría del producto"
        />
        <button type="submit" className="button">
          Subir producto
        </button>
      </form>
    </div>
  );
};

export default Admin;
