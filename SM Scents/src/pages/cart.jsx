import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Button, Image } from "antd";
import { MinusOutlined, PlusOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

function Cart() {
  const { cartItems, removeItemFromCart, addItemToCart, lessQuantityFromCart } =
    useContext(CartContext);

  const totalAmount = cartItems.reduce(
    (total, obj) => total + obj.quantity * obj.SalePrice,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, obj) => total + obj.quantity,
    0
  );

  return (
    <div className="container mx-auto my-5">
      <div className="text-center">
        <h1 className="font-medium text-3xl underline">Your Cart</h1>
      </div>

      <div className="flex flex-wrap gap-3 lg:gap-5 my-5 ">
        <div className="flex-grow flex flex-col rounded border p-4 justify-center items-center hover:scale-105 transition-all">
          <h1>Total Quantity</h1>
          <h1 className="font-semibold font-mono mt-3 text-3xl">
            {totalQuantity}
          </h1>
        </div>
        <div className="flex-grow flex flex-col rounded border p-4 justify-center items-center hover:scale-105 transition-all">
          <h1>Total Amount</h1>
          <h1 className="font-semibold font-mono mt-3 text-3xl">
            Rs {Math.round(totalAmount)}/-
          </h1>
        </div>

        <Link
          to="/checkout"
          className="flex-grow flex flex-col rounded  border p-4 justify-center items-center scale-100 hover:scale-105 transition-all"
        >
          <div className="text-center">
            <h1>Checkout</h1>
            <h1>to proceed</h1>
          </div>
        </Link>
      </div>

      {cartItems.map((data, index) => (
        <div
          key={data.id || `cart-item-${index}`} // Use index as a fallback
          className="flex items-center border my-2 p-3 rounded"
        >
          <div className= "max-w-full h-fit lg:w-3/6">

          <Image className="rounded h-96 " src={data.img}  />
          </div>

          <div className="flex flex-col pl-5">
            <h1 className="font-medium text-lg mb-1">
              {data.title} {`(${data.category})`}
            </h1>
            <p className="font-normal hide-text w-full lg:w-2/4  mb-2">{data.desc}</p>
            <h1 className=" font-bold mb-2">Price : {data.SalePrice}/-</h1>
            <h1 className="font-normal  mb-2">Quantity:</h1>
            <div className="flex gap-3 items-center">
              <Button
                onClick={() => addItemToCart(data)}
                icon={<PlusOutlined />}
                className="border border-black text-black"
              ></Button>

              <h1 className="text-lg">{data.quantity}</h1>
              <Button
                danger
                className="border border-black text-black"
                icon={<MinusOutlined />}
                onClick={() => lessQuantityFromCart(data.id)}
                disabled={data.quantity === 1}
              ></Button>
            </div>

            <Button
              onClick={() => removeItemFromCart(data.id)}
              danger
              className="w-32 my-3"
            >
              Remove item{" "}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Cart;
