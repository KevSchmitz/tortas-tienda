import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const Cart = () => {
  const { cart, deleteOne, totalPrice, deleteProducts } =
    useContext(CartContext);
  return (
    <div
      className="container"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {cart.length === 0 ? (
        <h2>
          No hay productos en el carrito, regresar al <Link to="/">inicio</Link>
        </h2>
      ) : (
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          {cart.map((prod) => (
            <div
              style={{
                display: "flex",
                gap: "20px",
                flexDirection: "column",
                width: "250px",
                border: "1px solid var(--black)",
                borderRadius: "20px",
              }}
              key={prod.id}
            >
              <img
                src={prod.image}
                alt={prod.name}
                style={{
                  height: "250px",
                  borderRadius: "20px 20px 0 0",
                }}
              />
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "10px",
                  padding: "15px",
                }}
              >
                <h2>{prod.name}</h2>
                <h3>Cantidad: {prod.quantity}</h3>
                <h3>Precio: ${prod.quantity * prod.price}</h3>
                <button
                  onClick={() => {
                    deleteOne(prod.id);
                  }}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      <h3>Total a pagar: ${totalPrice()} </h3>
      <input
        type="button"
        value="Vaciar Carrito"
        style={{ width: "150px" }}
        onClick={() => deleteProducts()}
      />
      <Link to="/checkout">
        <div className="button">Realizar Compra</div>
      </Link>
    </div>
  );
};

export default Cart;
