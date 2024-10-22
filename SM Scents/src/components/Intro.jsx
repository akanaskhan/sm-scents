import React from "react";
import { Button } from "antd";


function Intro() {
  const image1 =
    "https://plus.unsplash.com/premium_photo-1673277281977-3614760f01ec?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="mt-10  sm:mt-20 lg:mt-28 mb-10  sm:mb-20 lg:mb-28">
      <div className="main ">
        <div className="container ">
          <div className="row main-content items-center">
            <div className="left-main   col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-lg-4 py-xl-5 py-xxl-5">
              {/* <div>
                <p className="upper-line">
                  Welcome to 
                </p>
              </div> */}
              <div className="main-heading">
                <p>SM Scents</p>
              </div>
              <div>
                <p className="upper-line font-semibold">
                Essence Unveiled Let Your Scent Speak
                </p>
              </div>
              <div className="col-xxl-9">
                <p className="para">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Doloremque quasi modi quia illo fuga architecto praesentium
                  labore delectus vel nobis? Corporis fugit optio harum libero
                  animi labore dolorem officiis nobis.
                </p>
              </div>
              <div className="mt-3 my-4">
                <a className="a" href="">
                  <button className="btn  learn-btn">Learn More..</button>
              
                </a>
              </div>
            </div>
            <div className="right-main img-div col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <img className="main-img" src={image1} alt="" />
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}

export default Intro;
