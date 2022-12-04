import Cart from "../misc/Cart.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer.jsx";
import Form from "../misc/Form.jsx";
import { Routes, Route } from "react-router-dom";
import Orders from "./Orders.jsx";

const Main = () => {
  return (
    <main>
      {/* Se envuelve a todos los componentes/elementos para acceder a sus rutas */}
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Form />}></Route>
        <Route path="/orders" element={<Orders />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
