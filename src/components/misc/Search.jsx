import React, { useState } from "react";
import OrderList from "../Main/OrdersList";

const Search = () => {
  const [idOrder, setIdOrder] = useState("");
  const [searchedOrder, setSearchedOrder] = useState("");

  const searchOrder = (e) => {
    e.preventDefault();
  };

  const handleidOrder = (e) => {
    e.target.value.length === 20 && setIdOrder(e.target.value);
  };

  if (idOrder) {
    return <OrderList idOrder={idOrder} />;
  }

  return (
    <div
      className="container"
      style={{
        marginTop: "20px",
        display: "flex",
        gap: "20px",
        alignItems: "center",
      }}
    >
      <p>Indique el número de orden de compra:</p>
      <form action="" onSubmit={searchOrder}>
        <input
          type="text"
          placeholder="Busque su compra"
          onChange={handleidOrder}
        />
      </form>
    </div>
  );
};

export default Search;
