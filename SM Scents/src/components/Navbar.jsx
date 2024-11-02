import React, { useContext, useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Badge, Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth, db } from "../utils/firebase";
import { getAuth, signOut } from "firebase/auth";
import { CgShoppingCart } from "react-icons/cg";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { CartContext } from "../context/CartContext";
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { data } from "autoprefixer";

function NavBar() {
  const [expanded, setExpanded] = useState(false); // State to track toggle status
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);

  const toggleIcon = (setState) => {
    setState((prevState) => !prevState);
  };

  const navigate = useNavigate();
  const { user } = useContext(AuthContext);


  const { cartItems } = useContext(CartContext);
  const addProduct = () => {
    if (user.isLogin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };

  const auth = getAuth();
  const HandleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        message.success("Log Out successful.");
      })
      .catch((error) => {
        console.log("signout error", error);
      });
  };

  const gotoLogin = () => {
    navigate("/login");
  };

  const [hover, setHover] = useState();
  const [products, setProducts] = useState([])
  const [search, setSearch] = useState("")
  const [loader, setLoader] = useState(true);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const prodCollection = collection(db, "products");
      const q = query(prodCollection, orderBy("createdAt", "desc"));
      const docs = await getDocs(q);
      const arr = [];
      docs.forEach((product) =>
        arr.push({ ...product.data(), id: product.id })
      );
      setProducts(arr);
      setLoader(false);
    } catch (err) {
      console.log(err);
      setLoader(false);
    }
  };
  const showProducts = products.filter((data) =>
    data.title.toLowerCase().includes(search.toLowerCase())
);
const handleProductClick = (data) => {
  setShowDropdown(false); // Collapse dropdown
  navigate(`/products/${data.id}`); // Navigate to detail page
  console.log(data.id)
};
  return (
    <div className="m-0">
      <div className="text-center sm:my-1 md:my-2 lg:my-2.5">
        <p className="text-xs md:text-sm lg:text-sm tracking-widest font-extrabold text-black">
          FREE Perfume Box & Spray Tester with every order. FREE
          DELIVERY ON ORDERS ABOVE RS. 3,500
        </p>
      </div>

      <Navbar expand="lg" className="bg-black " expanded={expanded}>
        <Container>
          {/* Custom Toggle Button */}
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setExpanded(expanded ? false : true)} // Toggle state
            aria-controls="basic-navbar-nav"
            aria-expanded={expanded}
          >
            {/* <i
            className={`fa-solid fa-bars text-white fa-lg toggle-icon ${expanded ? 'expanded' : ''}`} // Conditionally add 'expanded' class
          /> */}
            <div
              id="nav-icon4"
              className={isOpen4 ? "open" : ""}
              onClick={() => toggleIcon(setIsOpen4)}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>

          <Navbar.Brand className="mx-auto w-12 md:w-18 lg:w-16" href="#home">
            <img src="src/assets/logo.png" alt="Logo" />
          </Navbar.Brand>

          <div className="d-lg-none">
            {/* <i className="fa-solid fa-magnifying-glass text-white fa-lg  cursor-pointer navbar-toggler "
        
            type="button"
            onClick={() => setExpanded(expanded ? false : true)} // Toggle state
            aria-controls="basic-navbar-nav"
            aria-expanded={expanded}
            /> */}
            <Link to={"/cart"}>
              <Badge
                count={cartItems.length}
                className={cartItems.length > 0 ? "mr-2 " : "mr-0"}
              >
                <i className="fa-solid fa-cart-shopping text-white fa-lg cursor-pointer m-2" />
              </Badge>
            </Link>

            <div className="dropdown">
              <i
                onClick={gotoLogin}
                className={`fa-regular fa-user text-white fa-lg  cursor-pointer`}
              />
              <div className="dropdown-content ">
                <Link to="/login">
                  <button className="bg-white p-2 px-3 text-lg  dropdown-Btn ">
                    Login
                  </button>
                </Link>
              </div>
            </div>
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto ms-10 items-center">
              <Nav.Link href="" className="text-white nav-line">
                <Link to="/">
                  <div className="">Home</div>
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
                <Link to="/mens-perfumes">
                  <div className="">Men's Perfume</div>
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
                <Link to="womens-perfumes">
                  <div className="">Women's Perfume</div>
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
                <Link to="/aboutUs">
                  <div className="">About Us</div>
                </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
                <Link to="/contactUs">
                  <div className="">Contact Us</div>
                </Link>
              </Nav.Link>
              <div className="relative d-lg-none">
                <input
                  type="search"
                  className=" p-1.5 overflow-hidden  w-56 pr-7 pl-3 rounded-2xl focus:outline-none focus:border-none"
                  placeholder="Search  here..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowDropdown(true); // Show dropdown when typing
                  }}
                />
                <button className="absolute top-1 right-1.5">
                  <i className="fa-solid fa-magnifying-glass text-black fa-lg cursor-pointer " />
                </button>
                {showDropdown  && (
                <div className="size-96 z-50 absolute bg-white border mt-1 rounded-xl w-56 max-h-64 overflow-y-auto">
                  {showProducts.map((data) => (
                    //  <Link to={`/products/${data.id}`} >
                    <div key={data.id}
                     onClick={() => handleProductClick(data)
                      
                     }
                    className="my-1 mx-1 py-2 border-b ">
                      <div className="flex ">

                      <img
                        className="img p-1   rounded-xl  h-20 object-cover"
                        src={data.img}
                        alt={data.title}
                        />
                      <div className="pl-1.5  content-center">

                      <p className=" font-semibold">{data.title}</p>
                      <p className="text-sm seach-category">{data.category}</p>
                      <p className="text-sm">Rs. {data.price}/-</p>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              )}



              </div>
              {/* <NavDropdown
                className="text-white"
                title={
                  <span className="text-white">
                    Dropdown <i className="fa fa-caret-down" />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="">Gift Box</NavDropdown.Item>
                <NavDropdown.Item href="">
                 Testers
                </NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown> */}
              {/* {auth.currentUser ? (
                <button
                  onClick={HandleSignOut}
                  className="bg-white p-2 px-3 rounded-lg text-black hover:rounded-3xl delay-150 all ease-in-out duration-100"
                >
                  Log Out
                </button>
              ) : (
                <Link to="/login">
                  <button className="bg-white p-2 px-3 rounded-lg text-black hover:rounded-3xl delay-150 all ease-in-out duration-100">
                    Login
                  </button>
                </Link>
              )} */}
            </Nav>
          </Navbar.Collapse>

          <div className="d-sm-none d-lg-block sm-icon ms-auto ">
            <div className="flex items-center">
              <div className="relative ">
                <input
                  type="search"
                  className=" p-1.5 overflow-hidden  w-56 pr-7 pl-3 rounded-2xl focus:outline-none focus:border-none"
                  placeholder="Search  here..."
                  onChange={(e) => {
                    setSearch(e.target.value);
                    setShowDropdown(true); // Show dropdown when typing
                  }}
                />
                <button className="absolute top-1 right-1.5">
                  <i className="fa-solid fa-magnifying-glass text-black fa-lg cursor-pointer " />
                </button>
                {showDropdown  && (
                <div className="size-96 z-50 absolute bg-white border mt-1 rounded-xl w-56 max-h-64 overflow-y-auto">
                  {showProducts.map((data) => (
                    //  <Link to={`/products/${data.id}`} >
                    <div key={data.id}
                     onClick={() => handleProductClick(data)
                      
                     }
                    className="my-1 mx-1 py-2 border-b ">
                      <div className="flex ">

                      <img
                        className="img p-1   rounded-xl  h-20 object-cover"
                        src={data.img}
                        alt={data.title}
                        />
                      <div className="pl-1.5  content-center">

                      <p className=" font-semibold">{data.title}</p>
                      <p className="text-sm seach-category">{data.category}</p>
                      <p className="text-sm">Rs. {data.price}/-</p>
                        </div>
                      </div>
                    </div>
                    // </Link>
                  ))}
                </div>
              )}



              </div>

              <Badge
                count={cartItems.length}
                className={cartItems.length > 0 ? "mr-2" : "mr-0"}
              >
                <div>
                  <Link to={"/cart"}>
                    {/* <ShoppingCartOutlined className="text-white w-full h-full text-3xl m-0"/> */}
                    <i className="fa-solid fa-cart-shopping text-white fa-lg  mx-2 text-2xl  cursor-pointer" />
                  </Link>
                </div>
              </Badge>
              <div className="dropdown">
                <i
                  onClick={gotoLogin}
                  className={`fa-regular fa-user text-white fa-lg  cursor-pointer text-2xl z-50`}
                />
                <div className="dropdown-content ">
                  {auth.currentUser ? (
                    <button
                      className="bg-white p-2 px-3 text-lg  dropdown-Btn mt-2"
                      onClick={HandleSignOut}
                    >
                      LogOut
                    </button>
                  ) : (
                    <Link to="/login">
                      <button className="bg-white p-2 px-3 text-lg  dropdown-Btn ">
                        Login
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
