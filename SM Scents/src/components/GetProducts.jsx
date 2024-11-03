import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../utils/firebase";
import { Button, Spin, Badge } from "antd";
import { useNavigate } from "react-router";
import ScrollAnimation from "react-animate-on-scroll";
import { BsArrowDownRightCircle, BsArrowUpRightCircle } from "react-icons/bs";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

function GetProducts() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [loader, setLoader] = useState(true);

  const { cartItems, addItemToCart, isItemAdded } = useContext(CartContext);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const prodCollection = collection(db, "products");
      const q = query(prodCollection, orderBy("createdAt", "desc"), limit(5));
      const docs = await getDocs(q);
      const arr = [];
      docs.forEach((product) =>
        arr.push({ ...product.data(), id: product.id })
      );
      setProducts([...arr]);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };

  return (
    <>
      {loader ? (
        <div
          className="flex h-screen
  justify-center items-center"
        >
          <Spin className="w-28 h-28" />{" "}
        </div>
      ) : (
        <div className="container mx-auto">
          <div className="mb-1">
            <div className="flex  justify-center items-center">
              <h1 className="text-4xl font-bold my-12 uppercase">Our Perfumes</h1>
              <Button
                onClick={() => navigate("/products")}
                className="learn-btn ml-4 font-normal transition-all"
              >
                See All
                <BsArrowUpRightCircle className=""></BsArrowUpRightCircle>
              </Button>
            </div>
            <div className="grid grid-cols-2 h-2/3  md:grid-cols-3 lg:grid-cols-5 lg:h-full gap-4">
              {products?.map((data) => (
            <Badge.Ribbon text="Sale" color="red" key={data.id} className="">
                <Link to={`/products/${data.id}`} key={data.id}  className="hover:text-black">
                  <div
                    className="border rounded-2xl overflow-hidden h-full sale-ribbon shadow "
                    key={data?.id}
                  >
                    <div className="">
                      <div className="image-box rounded">
                        <img src={data?.img} className="hover-img rounded" />
                      </div>
                    </div>
                    <div className="p-2 pb-0">
                      <h1 className="text-xl font-semibold line-clamp-1">{data?.title}</h1>
                      <div className="flex justify-between flex-col mb-2">
                        <h1 className="my-1">{data?.category}</h1>
                        <h1 className="text-gray-600 hide-text">{data?.ProductCategory}</h1>
                        <div className="flex gap-2 text-lg">
                        <h1 className="font-bold mt-2 text-gray-600"><del>Rs. {data?.price}</del></h1>
                        
                        <h1 className="font-bold mt-2">Rs. {data?.SalePrice}</h1>

                        </div>
                        {/* <button
                          className="learn-btn lg:px-3 p-2 text-md  rounded transition-all"
                          onClick={() => addItemToCart(data)}
                        >
                          {isItemAdded(data.id)
                            ? `Added (${isItemAdded(data.id).quantity})`
                            : `Add to Cart`}
                        </button> */}
                      </div>
                    </div>
                  </div>
                </Link>
           </Badge.Ribbon>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default GetProducts;
