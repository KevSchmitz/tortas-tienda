import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext.jsx";
import { db } from "../../services/firebaseConfig";

const Form = () => {
  const { cart, totalPrice, deleteProducts } = useContext(CartContext);

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [email2, setEmail2] = useState("");
  const [cellphone, setCellphone] = useState("");
  const [orderId, setOrderId] = useState("");

  const sendData = (e) => {
    e.preventDefault();

    const order = {
      buyer: {
        nombre: name,
        apellido: lastName,
        telefono: cellphone,
        correo: email2,
      },
      items: cart,
      total: totalPrice(),
      date: serverTimestamp(),
    };

    const orderCollection = collection(db, "orders");

    addDoc(orderCollection, order)
      .then((res) => {
        setOrderId(res.id);
        deleteProducts();
      })
      .catch((error) => console.log(error));
  };

  const handleName = (e) => setName(e.target.value);
  const handleLastName = (e) => setLastName(e.target.value);
  const handleEmail = (e) => setEmail(e.target.value);
  const handleEmail2 = (e) => setEmail2(e.target.value);
  const handleCellphone = (e) => setCellphone(e.target.value);

  if (orderId) {
    return (
      <div>
        <h3>
          Gracias por su compra, el código de su orden de compra es {orderId}
        </h3>
        <h4>Recuerde anotar su orden de compra.</h4>
      </div>
    );
  }

  return (
    <form
      action=""
      onSubmit={sendData}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        marginTop: "20px",
      }}
    >
      <input
        type="text"
        placeholder="Nombre"
        name=""
        onChange={handleName}
        value={name}
      />
      <input
        type="text"
        placeholder="Apellido"
        name=""
        onChange={handleLastName}
        value={lastName}
      />
      <input
        type="number"
        placeholder="Número teléfono"
        name=""
        onChange={handleCellphone}
        value={cellphone}
      />
      <input
        type="email"
        placeholder="Correo"
        name=""
        onChange={handleEmail}
        value={email}
      />
      <input
        type="email"
        placeholder="Repita su correo"
        name=""
        onChange={handleEmail2}
        value={email2}
      />

      <button disabled={email !== email2 || email === ""}>Enviar</button>
    </form>
  );
};

export default Form;
