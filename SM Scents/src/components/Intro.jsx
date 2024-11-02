import React from "react";
import { Button } from "antd";
import intro  from '../assets/images/intro.jpg'
import {Link} from 'react-router-dom'
 

function Intro() {
  const image1 =
    "https://plus.unsplash.com/premium_photo-1673277281977-3614760f01ec?q=80&w=1742&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <div className="mt-10  sm:mt-20 lg:mt-28 mb-10  sm:mb-20 lg:mb-28">
      <div className="main ">
        <div className="container ">
          <div className="row main-content items-center">
            <div className="left-main   col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6  py-lg-4 py-xl-5 py-xxl-5">
              <div className="main-heading">
                <p>SM Scents</p>
              </div>
              <div>
                <p className=" font-semibold my-2">
                  Essence Unveiled Let Your Scent Speak
                </p>
              </div>
              <div className="col-xxl-9">
                <p className="para">
                  SM Scents is dedicated to creating unique, high-quality
                  fragrances that resonate with individuality and elegance. Each
                  scent is crafted with premium ingredients, offering a
                  harmonious blend of fresh, floral, woody, and oriental notes
                  to suit every personality. Explore our collection to find a
                  fragrance that speaks to your soul and leaves a lasting
                  impression.
                </p>
              </div>
              <div className="mt-3 my-4">
                <Link to="/aboutUs">
                  <button className="btn  learn-btn transition-all">
                    Learn More..
                  </button>
                </Link>
              
              </div>
            </div>
            <div className="right-main img-div col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
              <img className="main-img" src={intro} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro;
