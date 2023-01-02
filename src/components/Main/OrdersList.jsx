import { useEffect, useState } from "react";
import Order from "./Order";
import { collectionOrders } from "../../services/firebaseConfig";
import { getDoc, doc } from "firebase/firestore";
import Skeleton from "react-loading-skeleton";

const OrderList = ({ idOrder }) => {
  const [orders, setOrders] = useState("");
  const [loading, setLoading] = useState(true);

  console.log(orders.id);
  console.log(idOrder);

  useEffect(() => {
    const ref = doc(collectionOrders, idOrder);

    getDoc(ref)
      .then((res) => {
        console.log(res);
        setOrders({
          id: res.id,
          ...res.data(),
        });
      })
      .catch((error) => console.log(error))
      .finally(() => setLoading(false));
  }, [idOrder]);

  if (loading) {
    return (
      <Skeleton
        style={{
          display: "flex",
          alignItems: "center",
          margin: "20px auto 0 auto",
        }}
        height={600}
        width={400}
      />
    );
  }

  return (
    <div className="container">
      <Order orders={orders} />
    </div>
  );
};

export default OrderList;
