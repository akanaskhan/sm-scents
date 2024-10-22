import React, { useContext, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Button, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { auth } from "../utils/firebase";
import { getAuth, signOut } from "firebase/auth";


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

  console.log("user=>", user);

  const addProduct = () => {
    if (user.isLogin) {
      navigate("/");
    } else {
      navigate("/login");
    }
  };


const auth = getAuth();
const HandleSignOut = ()=>{

  signOut(auth).then(() => {
    message.success("Sign-out successful.")
  }).catch((error) => {
    console.log("signout error", error)
  });
}

const gotoLogin =()=>{
  navigate('/login')
}
  return (
    <div className="m-0">
      <div className="text-center sm:my-1 md:my-2 lg:my-2.5">
        <p className="text-xs md:text-sm lg:text-sm tracking-widest font-extrabold text-black">
          FREE Perfume Box, Gift Bag & Spray Tester with every order. FREE
          DELIVERY ON ORDERS ABOVE RS.4,000.
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

          <Navbar.Brand className="mx-auto" href="#home">
            <img src="/src/assets/logo.png" alt="Logo" />
          </Navbar.Brand>

          <div className="d-lg-none">
            <i className="fa-solid fa-magnifying-glass text-white fa-lg m-3 cursor-pointer " />
            <i className="fa-solid fa-cart-shopping text-white fa-lg cursor-pointer" />
          </div>

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto items-center">
              <Nav.Link href="" className="text-white nav-line">
              <Link to="/.">
                <div className="">Home</div>
              </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
                <div className="">Men's Perfume</div>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
                <div className="">Women's Perfume</div>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
              <Link to = "/aboutUs">
                <div className="">About Us</div>
              </Link>
              </Nav.Link>
              <Nav.Link href="" className="text-white  nav-line">
              <Link to = "/contactUs">
                <div className="">Contact Us</div>
              </Link>
              </Nav.Link>
              <NavDropdown
                className="text-white"
                title={
                  <span className="text-white">
                    Dropdown <i className="fa fa-caret-down" />
                  </span>
                }
                id="basic-nav-dropdown"
              >
                <NavDropdown.Item href="">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
              {auth.currentUser? (
              <button onClick={HandleSignOut} className="bg-white p-2 px-3 rounded-lg text-black hover:rounded-3xl delay-150 all ease-in-out duration-100">Log Out</button>

              ) :
              <Link to="/login">
              <button className="bg-white p-2 px-3 rounded-lg text-black hover:rounded-3xl delay-150 all ease-in-out duration-100">Login</button>
              </Link>
            }
              
            </Nav>
          </Navbar.Collapse>

          <div className="d-sm-none d-lg-block sm-icon">
            <i className="fa-solid fa-magnifying-glass text-white fa-lg cursor-pointer " />
            <i className="fa-solid fa-cart-shopping text-white fa-lg  m-2  cursor-pointer" />
            <i onClick={gotoLogin} className="fa-regular fa-user text-white fa-lg  cursor-pointer" />
          </div>
        </Container>
      </Navbar>
    </div>
  );
}

export default NavBar;
