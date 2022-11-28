import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      addQuantity(item, quantity);
    } else {
      setCart([...cart, { ...item, quantity }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };

  const deleteProducts = () => {
    setCart([]);
  };

  const deleteOne = (id) => {
    const deletedProd = cart.filter((prod) => prod.id !== id);
    setCart(deletedProd);
  };

  const addQuantity = (addedItem, quantity) => {
    const updatedCart = cart.map((cartItem) => {
      if (addedItem.id === cartItem.id) {
        const updatedItem = {
          ...cartItem,

          quantity,
        };
        return updatedItem;
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
  };

  const totalItems = () => {
    let count = 0;
    const copycart = [...cart];
    copycart.forEach((prod) => {
      count += prod.quantity;
    });
    return count;
  };

  const totalPrice = () => {
    let price = 0;
    const copycart = [...cart];
    copycart.forEach((prod) => (price += prod.quantity * prod.price));
    return price;
  };

  const itemQuantity = (id) => {
    const item = cart.find((prod) => prod.id === id);

    return item?.quantity;
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        deleteOne,
        totalItems,
        totalPrice,
        deleteProducts,
        itemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
export default CartProvider;
