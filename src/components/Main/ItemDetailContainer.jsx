import ItemDetail from "./ItemDetail";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { doc, getDoc } from "firebase/firestore";
import { collectionProds } from "../../services/firebaseConfig";

const ItemDetailContainer = () => {
  const [item, setItem] = useState({});
  const [loading, setLoading] = useState(true);
  const { idProduct } = useParams();

  useEffect(() => {
    // const getProduct = () => {
    //   return new Promise((res, rej) => {
    //     const foundProduct = products.find(
    //       (product) => product.id === +idProduct
    //     );
    //     // Hay que parsear el idProduct ya que viene como string
    //     const ref = idProduct ? foundProduct : products;
    //     setTimeout(() => {
    //       res(ref);
    //     }, 2000);
    //   });
    // };
    // getProduct()
    //   .then((res) => setItem(res))
    //   .catch((error) => console.log(error))
    //   .finally(() => setLoading(false));

    // FIRESTORE

    const ref = doc(collectionProds, idProduct);

    getDoc(ref)
      .then((res) => {
        // console.log(res.data());
        setItem({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idProduct]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <Skeleton height={1077} width={796}></Skeleton>
      </div>
    );
  }

  return (
    <div className="itemDetail-container">
      <ItemDetail item={item} />
    </div>
  );
};

export default ItemDetailContainer;
