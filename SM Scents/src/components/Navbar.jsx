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
import logo from '../assets/images/logo.svg'

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
  
};
const scrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
};
const handleToggle = () => {
  // Check if the screen width is below large (e.g., 1024px for large screens)
  if (window.innerWidth < 1024) {
    toggleIcon(setIsOpen4);
    setExpanded(expanded ? false : true);
    
    // Scroll to top for Safari, Chrome, Firefox, IE, and Opera
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
  }
};

  return (
    <div className="m-0">
        <div className="marquees">
    <section
      className="marquee text-sm md:text-sm lg:text-sm tracking-widest font-bold text-black"
    
    >
      <div className="marquee--inner">
        <p >
          FREE Perfume Box & Spray Tester with every order. FREE DELIVERY ON ORDERS ABOVE RS. 3,500.
        </p>
        <p aria-hidden="true">
          FREE Perfume Box & Spray Tester with every order. FREE DELIVERY ON ORDERS ABOVE RS. 3,500.
        </p>
        <p aria-hidden="true">
          FREE Perfume Box & Spray Tester with every order. FREE DELIVERY ON ORDERS ABOVE RS. 3,500.
        </p>
        <p aria-hidden="true">
          FREE Perfume Box & Spray Tester with every order. FREE DELIVERY ON ORDERS ABOVE RS. 3,500.
        </p>
        <p aria-hidden="true">
          FREE Perfume Box & Spray Tester with every order. FREE DELIVERY ON ORDERS ABOVE RS. 3,500.
        </p>
       
      </div>
    </section>
  </div>
      {/* <div className="text-center sm:my-1 md:my-2 lg:my-2.5">
        <p className="text-xs md:text-sm lg:text-sm tracking-widest font-extrabold text-black">
          FREE Perfume Box & Spray Tester with every order. FREE
          DELIVERY ON ORDERS ABOVE RS. 3,500
        </p>
      </div> */}

      <Navbar expand="lg" className="bg-black " expanded={expanded}>
        <Container>
        
          <button
            className="navbar-toggler p-0 m-0"
            type="button"
            onClick={() => setExpanded(expanded ? false : true)} // Toggle state
            aria-controls="basic-navbar-nav"
            aria-expanded={expanded}
              style={{padding: '0', margin: '0px'}}
          >
       
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

          <Navbar.Brand className="mx-auto text-white  w-12 md:w-18 lg:w-16" href="/">
            <img className="text-white" src={logo} alt="Logo" />
          </Navbar.Brand>

          <div className="d-lg-none">
          
            <Link to={"/cart"}>
              <Badge
                count={cartItems.length}
                className={cartItems.length > 0 ? "mr-2 " : "mr-0"}
              >
                <i className="fa-solid fa-cart-shopping  text-white fa-lg cursor-pointer m-2" />
              </Badge>
            </Link>

            <div className="dropdown">
              <i
                onClick={gotoLogin}
                className={`fa-solid fa-user text-white fa-lg  cursor-pointer`}
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
            <Nav className="me-auto ml-0 lg:ml-10 xl:ml-10 items-center">
              <div href="" className="text-white nav-line nav-link" 
                         onClick={handleToggle} 

              >
                <Link to="/" >
                  <div className="" 
                 
                  >Home</div>
                </Link>
              </div>
              <div href="" className="text-white  nav-line nav-link" onClick={handleToggle} >
                <Link to="/mens-perfumes">
                  <div className="">Men's Perfume</div>
                </Link>
              </div>
              <div href="" className="text-white  nav-line nav-link" onClick={handleToggle} >
                <Link to="/womens-perfumes">
                  <div className="">Women's Perfume</div>
                </Link>
              </div>
              <div href="" className="text-white  nav-line nav-link" onClick={handleToggle} >
                <Link to="/perfume-tester-box">
                  <div className="">Tester Box</div>
                </Link>
              </div>
              <div href="" className="text-white  nav-line nav-link" onClick={handleToggle} >
                <Link to="/about-us">
                  <div className="">About Us</div>
                </Link>
              </div>
              <div href="" className="text-white  nav-line nav-link" onClick={handleToggle} >
                <Link to="/contact-us">
                  <div className="">Contact Us</div>
                </Link>
              </div>
              <div className="relative d-lg-none mt-3">
                <input
                  type="search"
                  className=" p-1.5 overflow-hidden  w-56 pr-7 pl-3 rounded-2xl focus:outline-none focus:border-none"
                  placeholder="Search  here..."
                  onChange={(e) => {
                    const value = e.target.value;
                    setSearch(value);
                    setShowDropdown(value.trim().length > 0); // Show dropdown only if search has content
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
              
            </Nav>
          </Navbar.Collapse>

          <div className="d-sm-none d-lg-block sm-icon ms-auto ">
  <div className="flex items-center">
    <div className="relative">
      <input
        type="search"
        className="p-1.5 overflow-hidden w-56 pr-7 pl-3 rounded-2xl focus:outline-none focus:border-none"
        placeholder="Search here..."
        onChange={(e) => {
          const value = e.target.value;
          setSearch(value);
          setShowDropdown(value.trim().length > 0); // Show dropdown only if search has content
        }}
      />
      <button className="absolute top-1 right-1.5">
        <i className="fa-solid fa-magnifying-glass text-black fa-lg cursor-pointer" />
      </button>
      
      {showDropdown && (
        <div className="size-96 z-50 absolute bg-white border mt-1 rounded-xl w-56 max-h-64 overflow-y-auto">
          {showProducts.map((data) => (
            <div
              key={data.id}
              onClick={() => handleProductClick(data)}
              className="my-1 mx-1 py-2 border-b"
            >
              <div className="flex">
                <img
                  className="img p-1 rounded-xl h-20 object-cover"
                  src={data.img}
                  alt={data.title}
                />
                <div className="pl-1.5 content-center">
                  <p className="font-semibold">{data.title}</p>
                  <p className="text-sm seach-category">{data.category}</p>
                  <p className="text-sm">Rs. {data.SalePrice}/-</p>
                </div>
              </div>
            </div>
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
          <i className="fa-solid fa-cart-shopping text-white fa-lg mx-2 text-2xl cursor-pointer" />
        </Link>
      </div>
    </Badge>
    
    <div className="dropdown">
      <i
        onClick={gotoLogin}
        className="fa-solid fa-user text-white fa-lg cursor-pointer text-2xl z-50"
      />
      <div className="dropdown-content">
        {auth.currentUser ? (
          <button
            className="bg-white p-2 px-3 text-lg dropdown-Btn mt-2"
            onClick={HandleSignOut}
          >
            LogOut
          </button>
        ) : (
          <Link to="/login">
            <button className="bg-white p-2 px-3 text-lg dropdown-Btn">
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
