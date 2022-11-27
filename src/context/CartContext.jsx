import { createContext, useState } from "react";

export const CartContext = createContext(); //Permite crear el Context para poder usarlo luego

const CartProvider = ({ children }) => {
  //La prop por default es children, se aplica un destructuring a la prop dentro de la misma para acceder a la propiedad 'children'
  const [cart, setCart] = useState([]);

  // Se crea una función para que todos los componentes accedan al mismo estado y no lo actualicen independientemente.
  const addToCart = (item, quantity) => {
    if (isInCart(item.id)) {
      // Agregar cantidad si el producto ya existe
      addQuantity(item, quantity);
    } else {
      // Función para agregar objeto al carrito.
      // Se colocan llaves para mantener el array.
      // Se hace spread de cart para agregar item con cantidad.
      // Se hace el spread de item para agregar la  propiedad quantity con su respectivo valor.
      setCart([...cart, { ...item, quantity }]);
    }
  };

  // Función que me permite saber si un producto existe en el carrito.
  const isInCart = (id) => {
    return cart.some((prod) => prod.id === id);
  };
  // Función para vaciar el carrito.
  const deleteProducts = () => {
    setCart([]);
  };

  const deleteOne = (id) => {
    const deletedProd = cart.filter((prod) => prod.id !== id);
    setCart(deletedProd);
  };

  // Función para agregar producto al carrito en caso de que exista
  const addQuantity = (addedItem, quantity) => {
    // Crear una copia del array de cart para poder modificar una de las propiedades de los productos
    const updatedCart = cart.map((cartItem) => {
      // Condición que indica si el id del producto agregado coincide con el id del producto en carrito.
      if (addedItem.id === cartItem.id) {
        const updatedItem = {
          ...cartItem,
          // Para agregar cantidad sobre la existente.
          // quantity: cartItem.quantity + quantity,

          // Para pisar la cantidad que ya estaba.
          quantity,
        };
        return updatedItem;
      } else {
        return cartItem;
      }
    });
    setCart(updatedCart);
  };

  // Función que indica el total de unidades
  const totalItems = () => {
    let count = 0;
    const copycart = [...cart];
    copycart.forEach((prod) => {
      count += prod.quantity;
    });
    return count;
  };

  // Funcion que indica el precio total del carrito
  const totalPrice = () => {
    let price = 0;
    const copycart = [...cart];
    copycart.forEach((prod) => (price += prod.quantity * prod.price));
    return price;
  };

  // Función que indica la cantidad actual del objeto seleccionado en el carrito de compras.
  const itemQuantity = (id) => {
    const item = cart.find((prod) => prod.id === id);
    // Si el producto no está en el carrito me da undefined, por lo que que colocamos '?' para que evitar que aparezca un error por el undefined.
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
