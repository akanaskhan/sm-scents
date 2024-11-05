import { Link } from "react-router-dom";
import mensPerfume from "../assets/images/Bad boy.jpg";
import womensPerfume from "../assets/images/women.jpg";
import tester2 from "../assets/images/tester2.jpg";



export default function ProductCollection() {
  const scrollToTop = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  };
  return (
    <>
      <div className="container mt-24">
        <div className="text-4xl lg:text-4xl md:text-text-4xl mb-4 font-black text-black text-center">
          OUR PRODUCT COLLECTIONS
        </div>
        <div>
          <div className="grid grid-cols-1 h-2/3  md:grid-cols-2 lg:grid-cols-3 lg:h-full gap-x-4   m-0 p-0">
            <Link to="/mens-perfumes" onClick={scrollToTop}>
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={mensPerfume} alt="mens Perfume" />
                <div className="f1-content ">
                  <div className="last-line">
                    <p className="text-3xl hover:underline">
                      Men's Perfume
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <Link to="/womens-perfumes" onClick={scrollToTop}>
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={womensPerfume} alt="womens Perfume" />
                <div className="f1-content ">
                  <div className="last-line">
                    <p className="text-3xl hover:underline">
                      Women's Perfume
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <Link to="/perfume-tester-box" onClick={scrollToTop}>
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={tester2} alt="tester box" />
                <div className="f1-content ">
                  <div className="last-line">
                    <p className="text-3xl hover:underline">
                    Tester Box
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            {/* <Link to="">
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={image1} alt="" />
                <div className="f1-content ">
                  <div className="last-line">
                    <p className="text-3xl hover:underline">
                     Tester Box
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <Link to="">
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={image1} alt="" />
                <div className="f1-content ">
                  <div className="last-line">
                    <p className="text-3xl hover:underline">
                      Perfume Bundles
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link>
            <Link to="">
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={image1} alt="" />
                <div className="f1-content ">
                  <div className="last-line">
                    <p className="text-3xl hover:underline">
                      Men's Perfume
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </Link> */}

           
          </div>
        </div>
      </div>
    </>
  );
}
