// import logo from './logo.svg';
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header.jsx";
import Main from "./components/Main/Main.jsx";
import { BrowserRouter } from "react-router-dom";
import CartProvider from "./context/CartContext";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Main />
      </CartProvider>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
