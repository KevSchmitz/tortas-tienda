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
    const ref = doc(collectionProds, idProduct);

    getDoc(ref)
      .then((res) => {
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
