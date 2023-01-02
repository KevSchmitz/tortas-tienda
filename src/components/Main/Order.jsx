import React from "react";

const Order = ({ orders }) => {
  const { items } = orders;

  return (
    <div>
      <div
        className="container"
        style={{ display: "flex", gap: "20px", margin: "20px" }}
      >
        {items.map((item) => (
          <div
            style={{
              display: "flex",
              gap: "20px",
              flexDirection: "column",
              width: "250px",
              border: "1px solid var(--black)",
              borderRadius: "20px",
            }}
            key={item.id}
          >
            <img
              src={item.image}
              alt={item.name}
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
              <h2>{item.name}</h2>
              <h3>Cantidad: {item.quantity}</h3>
              <h3>Precio: ${item.quantity * item.price}</h3>
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex" }}>
        <div className="button">Volver al seguimiento de compra</div>
      </div>
    </div>
  );
};

export default Order;
