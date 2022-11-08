import ItemDetail from "./ItemDetail";
import { products } from "../../js/mocks";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});

  const { idProduct } = useParams();

  useEffect(() => {
    const getProduct = () => {
      return new Promise((res, rej) => {
        const foundProduct = products.find(
          (product) => product.id === +idProduct
        );
        // Hay que parsear el idProduct ya que viene como string
        const ref = idProduct ? foundProduct : products;
        setTimeout(() => {
          res(ref);
        }, 2000);
      });
    };

    getProduct()
      .then((res) => setItem(res))
      .catch((error) => console.log(error));
  }, [idProduct]);

  return (
    <div className="itemDetail-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
