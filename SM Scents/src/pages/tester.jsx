import { useContext } from "react";
import tester1 from "../assets/images/tester1.jpg";
import tester2 from "../assets/images/tester2.jpg";
import { Carousel } from "antd";
import { CartContext } from "../context/CartContext";

export function Tester() {
    const { addItemToCart, lessQuantityFromCart, isItemAdded, buyNow } =
    useContext(CartContext);

    const testerBox = {
    title: "Tester Box",
    price: "1200",
    img: tester1
    }
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Carousel effect="fade" autoplay className="">
              <div>
                <img src={tester1} />
              </div>
              <div>
                <img src={tester2} />
              </div>
              <div>
                <img src={tester1} />
              </div>
              <div>
                <img src={tester2} />
              </div>
            </Carousel>
          </div>

          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 sm:w-full flex flex-col md:items-start md:text-left items-center text-center">
            <div className="relative border-b-2 border-gray-100 mb-4">

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Tester Box | Samples Box | 5 x 10ml Perfume Testers
              <br className="hidden lg:inline-block" />
            </h1>
            <p className="mb-8 leading-relaxed ">
              Discover the artistry of fragrance with the SM Scents Tester Box.
              This set includes five 10ml samples of our signature scents, each
              crafted to deliver a unique sensory experience. Perfect for
              exploring new fragrances or as a thoughtful gift, this box lets
              you find a scent that truly resonates with you. Experience the
              world of SM Scents, one spritz at a time.
            </p>
         <div className="flex gap-2 mb-3 justify-center">

             <del className="text-gray-600 mr-3"> <p className="title-font font-medium text-2xl text-gray-700">
                Rs. 1500
              </p></del>
              <p className="title-font font-medium text-2xl text-gray-900">
                Rs. 1250
              </p>
            </div>
                        </div>
           
            <div className="flex flex-col justify-center items-center w-full gap-3">
              <button className=" text-white w-full lg:w-2/4 learn-btn transition-all   border-0 py-2 px-6 focus:outline-none  rounded text-lg">
                Add to Cart
              </button>
              <button 
              className="w-full  lg:w-2/4 learn-btn transition-all  border-0 py-2 px-6 focus:outline-none  rounded text-lg"
              onClick={() => buyNow(testerBox)}
              >
              
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
