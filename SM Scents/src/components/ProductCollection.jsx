import { Link } from "react-router-dom";

export default function ProductCollection() {
  const image1 =
    "https://plus.unsplash.com/premium_photo-1673277281977-3614760f01ec?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <>
      <div className="container mt-24">
        <div className="text-4xl lg:text-4xl md:text-text-4xl mb-4 font-black text-black text-center">
          OUR PRODUCT COLLECTIONS
        </div>
        <div>
          <div className="grid grid-cols-1 h-2/3  md:grid-cols-2 lg:grid-cols-3 lg:h-full gap-x-4   m-0 p-0">
            <Link to="/mens-perfumes">
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
            </Link>
            <Link to="womens-perfumes">
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={image1} alt="" />
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
            <Link to="">
            <div className="f-image1 ">
              <div className="f-large ">
                <img className="f-img1 hover-img" src={image1} alt="" />
                <div className="f1-content ">
                  <div className="last-line">
                    <p className="text-3xl hover:underline">
                      Gift Boxes
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
            </Link>

           
          </div>
        </div>
      </div>
    </>
  );
}
