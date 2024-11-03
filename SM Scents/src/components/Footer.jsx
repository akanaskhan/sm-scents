import { Link } from "react-router-dom";
import logo from '../assets/images/logo.png'


export default function Footer() {
  return (
    <footer className="footer mb-0 -z-10">
      <div className="container ">
        <div>

            <img
              className="w-16"
              src={logo}
              alt="SM Scents Logo"
            />
        </div>
        <div className="row">
          <div className="f-col1 f-col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
            <p className="f-heading">SM Scents</p>
            <p className="text-sm">
              SM Scents is dedicated to creating unique, high-quality fragrances
              that resonate with individuality and elegance. Each scent is
              crafted with premium ingredients, offering a harmonious blend of
              fresh, floral, woody, and oriental notes to suit every
              personality. Explore our collection to find a fragrance that
              speaks to your soul and leaves a lasting impression.
            </p>
            <hr className="text-white my-3 d-lg-none border-3" />
          </div>
          <div className="f-col2  col-12 col-sm-6 col-md-6 col-lg-6 col-xl-2 col-xxl-3">
            <ul className="f-list text-center">
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center ">
                {/* <a
                  className="nav-link active text-white  "
                  aria-current="page"
                  href=""
                > */}
                <Link to="/home" className="nav-link text-white">
                  <div className="nav-line">Home</div>
                   </Link>
                {/* </a> */}
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
                  <Link to="/mens-perfumes" className="nav-link text-white">
                  <div className="nav-line">Men's Perfume</div>
                   </Link>
               
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
                <Link to="/womens-perfumes" className="nav-link text-white">
                  <div className="nav-line">Women's Perfume</div>
                   </Link>
                
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            
                <Link to="/aboutUs" className="nav-link text-white">
                  <div className="nav-line">About Us</div>
                   </Link>
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
              
                <Link to="/contactUs" className="nav-link text-white">
                  <div className="nav-line">Contact Us</div>
                   </Link>
              </li>
            </ul>
            <hr className="text-white my-3 d-lg-none border-3" />
          </div>

          <div className="f-col3  col-12 col-sm-6 col-md-6 col-lg-8 col-xl-2 col-xxl-3">
            <ul className="f-list ">
              {/* <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
                <form action="">
                  <div className="bg-white pr-2 nav-link  rounded-2xl flex flex-row">
                    <input
                      type="text"
                      className=" px-0.5 pl-3 overflow-hidden   pr-7 rounded-2xl focus:outline-none focus:border-none"
                      placeholder="Type to Search..."
                    />
                    <button className=" text-black pl-1 bg-slate-100 rounded-2xl">
                      Email
                    </button>
                  </div>
                </form>
              </li> */}
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
               
                <Link to="/perfume-tester-box" className="nav-link text-white">
                  <div className="nav-line">Tester Box</div>
                   </Link>
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
               
                <Link to="/" className="nav-link text-white">
                  <div className="nav-line">Return and Exchange Policy</div>
                   </Link>
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
              <Link to="/" className="nav-link text-white">
                  <div className="nav-line"></div>
                   </Link>
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
               
                <Link to="/" className="nav-link text-white">
                  <div className="nav-line">Privacy Policy</div>
                   </Link>
              </li>
              <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
              
                <Link to="/" className="nav-link text-white">
                  <div className="nav-line">Term's and Conditions</div>
                   </Link>
              </li>
            </ul>
            <hr className="text-white my-3 d-lg-none border-3" />
          </div>
          <div className="f-col4 text-center items-center col-12  col-sm-6 col-md-6 col-lg-6 col-xl-4 col-xxl-2">
            <p className="follow">Follow Us</p>
            <div className="items-center">
              <div className="flex justify-center">
                <div className="s-icons m-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">
                  <a className="" href="https://www.facebook.com/officialsmscents" target="_blank">
                    <i
                      className="fa-brands fa-facebook-f s-btn px-2.5 text-xl"
                      style={{ color: "#316FF6" }}
                    />
                  </a>
                </div>
                <div className="s-icons m-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">
                  <a className="" href="https://www.instagram.com/officialsmscents" target="_blank">
                    <i className="fa-brands fa-instagram instagram s-btn text-xl"  />
                  </a>
                </div>

                <div className="s-icons m-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">
                  <a className="" href="https://api.whatsapp.com/send/?phone=923021953486" target="_blank">
                    <i
                      className="fa-brands fa-whatsapp  s-btn text-xl "
                      style={{
                        color: "white",
                        backgroundColor: "rgb(37 211 102)",
                      }}
                    />
                  </a>
                </div>
                <div className="s-icons m-1 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">
                  <a className="" href="https://www.tiktok.com/@officialsmscents" target="_blank">
                    <i className="fa-brands fa-tiktok  s-btn text-xl" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="text-white">
            <hr className="my-3 border-3" />
          </div>
          <div className="text-center">
            <p className="text-white">
              &copy; Copyright 2024-SM Scents. All Rights Reserved
            </p>
            <a
              className="decoration-white "
              href="https://www.linkedin.com/in/muhammad-anas-khan786/"
              target="_blank"
            >
              <p className="text-white decoration-white">
                Developed By{" "}
                <span className=" hover:underline"> Anas Khan</span>
              </p>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
