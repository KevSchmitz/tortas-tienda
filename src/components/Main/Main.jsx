import Cart from "../misc/Cart.jsx";
import ItemListContainer from "./ItemListContainer.jsx";
import ItemDetailContainer from "./ItemDetailContainer.jsx";
import Form from "../misc/Form.jsx";
import { Routes, Route } from "react-router-dom";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryName" element={<ItemListContainer />} />
        <Route path="/detail/:idProduct" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/checkout" element={<Form />}></Route>
      </Routes>
    </main>
  );
};

export default Main;
