import { useContext, useState } from "react";
import "./App.css";
import "./Loader.css";
import "./Icon.js";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import AboutUs from "./pages/about Us.jsx";
import ContactUs from "./pages/contactUs.jsx";
import SignUp from "./pages/auth/signup.jsx";
import LogIn from "./pages/auth/login.jsx";
import AddProduct from "./pages/addProduct.jsx";
import Admin from "./pages/admin.jsx";
import AllProducts from "./pages/products.jsx";
import ProductDetail from "./pages/productDetail.jsx";
import Cart from "./pages/cart.jsx";
import NotFound from "./pages/notfound.jsx"; // A new NotFound page
import { AuthContext } from "./context/AuthContext.jsx";
import { CartContext } from "./context/CartContext.jsx";
import { auth } from "./utils/firebase.js";
import CheckOut from "./pages/CheckOut.jsx";
import { message } from "antd";
import AllOrders from "./pages/orders.jsx";
import MalePerfumes from "./pages/MalePerfumes.jsx";
import WomensPerfumes from "./pages/WomensPerfumes.jsx";
import WhatsApp from "./components/WhatsApp.jsx";
import DeliveredOrders from "./pages/deliveredOrders.jsx";
import DeletedOrders from "./pages/DeletedOrders.jsx";
import PrivacyPolicy from "./pages/privacyPolicy.jsx";
import { Tester } from "./pages/tester.jsx";
import TermsAndConditions from "./pages/TermsAndConditons.jsx";
import RefundExchangePolicy from "./pages/RefundAndExchangePolicy.jsx";
import ContactFeedbacks from "./pages/ContactFeedbacks.jsx";
import UserOrders from "./pages/UserOrders.jsx";

function AppRouter() {
  const { user } = useContext(AuthContext);
  const { cartItems } = useContext(CartContext);


  const handleCheckout = () => {
    if (user?.isLogin) {
      return <CheckOut />;
    } else {
      // message.info("Please login to continue");
      return  <Navigate to="/login" />;
    }
  };



  return (
    <BrowserRouter>
      <Navbar />
        <WhatsApp/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/perfume-tester-box" element={<Tester />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Login" element={<LogIn />} />
        <Route
          path="/AddProduct"
          element={
            auth.currentUser?.uid === import.meta.env.VITE_USER_UID ||
            auth.currentUser?.uid === import.meta.env.VITE_USER2_UID ? (
              <AddProduct />
            ) : (
              <Navigate to="/notfound" />
            )
          }
        />
        
        <Route path="/Products" element={<AllProducts />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="products/:id" element={<ProductDetail />} />

        
        <Route
          path="/admin"
          element={
            auth.currentUser?.uid === import.meta.env.VITE_USER_UID ||
            auth.currentUser?.uid === import.meta.env.VITE_USER2_UID ? (
              <Admin />
            ) : (
              <Navigate to="/notfound" />
            )
          }
        />
        <Route path="/delivered-orders" element=
        {
          auth.currentUser?.uid === import.meta.env.VITE_USER_UID ||
          auth.currentUser?.uid === import.meta.env.VITE_USER2_UID ? (
            <DeliveredOrders />
          ) : (
            <Navigate to="/notfound" />
          )
        }/>

        <Route path="/deleted-orders" element=
   
        {
          auth.currentUser?.uid === import.meta.env.VITE_USER_UID ||
          auth.currentUser?.uid === import.meta.env.VITE_USER2_UID ? (
            <DeletedOrders />
          ) : (
            <Navigate to="/notfound" />
          )
        }
        />
        <Route path="/feedbacks" element=
   
        {
          auth.currentUser?.uid === import.meta.env.VITE_USER_UID ||
          auth.currentUser?.uid === import.meta.env.VITE_USER2_UID ? (
            <ContactFeedbacks />
          ) : (
            <Navigate to="/notfound" />
          )
        }
        />
        <Route path="/user-orders" element={<UserOrders />} />
        <Route path="/mens-perfumes" element={<MalePerfumes />} />
        <Route path="/womens-perfumes" element={<WomensPerfumes />} />
        <Route path="/checkout" element={handleCheckout()} />
        <Route path="/orders" element=
       
        {
          auth.currentUser?.uid === import.meta.env.VITE_USER_UID ||
          auth.currentUser?.uid === import.meta.env.VITE_USER2_UID ? (
            <AllOrders />
          ) : (
            <Navigate to="/notfound" />
          )
        }
        />
        {/* <Route path="/myusers" element=
      
        {
          auth.currentUser?.uid === import.meta.env.VITE_USER_UID ||
          auth.currentUser?.uid === import.meta.env.VITE_USER2_UID ? (
            <MyUsers />
          ) : (
            <Navigate to="/notfound" />
          )
        }
        /> */}

        {/* Not Found Route */}
        <Route path="/notfound" element={<NotFound />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
        <Route path="/refund-and-exchange-policy" element={<RefundExchangePolicy/>} />
        <Route path="*" element={<Navigate to="/notfound" />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default AppRouter;
