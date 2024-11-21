import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState, useContext } from "react";
import { db,auth } from "../utils/firebase";
import { Spin } from "antd";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

function UserOrders() {
  const [orders, setOrders] = useState([]);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    fetchUserOrders();
  }, []);

  // Function to fetch orders for the current user
  const fetchUserOrders = async () => {
    try {
      const user = auth?.currentUser?.uid;
      console.log(user)
      if (user) {
        const ordersCollection = collection(db, "orders");
        const q = query(ordersCollection, where("OrderBy", "==", user));
        const docs = await getDocs(q);
        const arr = docs.docs.map((order) => ({
          ...order.data(),
          id: order.id,
        }));
        setOrders(arr);
      }
      setLoader(false);
    } catch (err) {
      console.error("Error fetching orders:", err);
      setLoader(false);
    }
  };

//   const ttt = orders.map((order, index) => (
   
//     console.log(order)
// ))
//   console.log("ttt", ttt)
  const renderOrders = (orders) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8">
      {orders.map((order, index) => (
        <div className="border rounded-md p-4 shadow" key={order.id}>
          <Link to={`/orders/${order.id}`}>
            <h1 className="text-xl font-semibold">Order ID: {order.id}</h1>
          </Link>
          <p><strong>Status:</strong> {order.status}</p>
          <p><strong>Date:</strong> {dayjs(order.createdAt).fromNow()}</p>
          <p><strong>Address:</strong> {order.Address}</p>
          <p><strong>Phone:</strong>  {order["Phone Number"]}</p>
          <p><strong>Total Price:</strong> Rs. {order.TotalAmount || "N/A"}</p>
          {/* <p><strong>aa</strong>: {console.log(index)}</p> */}
          
        </div>
      ))}
    </div>
  );

  return (
    <div className="container mx-auto">
      {loader ? (
        <div className="flex h-screen justify-center items-center">
          <Spin className="w-28 h-28" />
        </div>
      ) : (
        <div>
          <div className="flex justify-center my-6 lg:my-10 text-center items-center">
            <h1 className="text-3xl lg:text-4xl font-black underline">Your Orders</h1>
          </div>
          {orders.length ? (
            renderOrders(orders)
          ) : (
            <div className="text-xl text-center my-96">
              <p>No orders found.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default UserOrders;
