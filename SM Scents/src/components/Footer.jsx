
export default function Footer(){


    return(
        <footer className="footer">
  <div className="container">
    <div className="row">
      <div className="f-col1 f-col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-4 col-xxl-4">
        <img src="/src/assets/logo.png" alt="SM Scents Logo" />
        <p className="f-heading">SM Scents</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          quis, repudiandae nam quasi deserunt earum facere! Exercitationem,
          sapiente. Itaque, dignissimos?
        </p>
        <hr className="text-white my-3 d-lg-none border-3" />

      </div>
      <div className="f-col2  col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
        <ul className="f-list text-center">
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center ">
            <a
              className="nav-link active text-white  "
              aria-current="page"
              href="#"
            >
             <div className="nav-line">Home</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link nav-link text-white " href="#">
            <div className="nav-line">Men's Perfume</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link  text-white " href="#">
            <div className="nav-line"> Women's Perfume</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link  text-white " href="#">
              <div className="nav-line">About Us</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link  text-white " href="#">
              <div className="nav-line">Contact Us</div>
            </a>
          </li>
        </ul>
        <hr className="text-white my-3 d-lg-none border-3" />
      </div>
      
      <div className="f-col3  col-12 col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
        <ul className="f-list ">
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
          {/* text-left  */}
            <a className="nav-link   text-white " href="#">
              <div className="nav-line">Jewellery</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link  text-white " href="#">
              <div className="nav-line">Return and Exchange Policy</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link  text-white " href="#">
            <div className="nav-line">Jewellery</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link  text-white " href="#">
            <div className="nav-line">Jewellery</div>
            </a>
          </li>
          <li className="footer-item flex justify-start md:justify-center lg:justify-center xl:justify-center">
            <a className="nav-link  text-white " href="#">
             <div className="nav-line"> Term's and Conditions</div>
            </a>
          </li>
        </ul>
        <hr className="text-white my-3 d-lg-none border-3" />

      </div>
      <div className="f-col4 text-center items-center col-12  col-sm-6 col-md-6 col-lg-2 col-xl-2 col-xxl-2">
        <p className="follow">Follow Us</p>
        <div className="items-center">
          <div className="flex justify-center">
            <div className="s-icons m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">
              <a className="" href="#">
                <i
                  className="fa-brands fa-facebook-f s-btn "
                  style={{ color: "#316FF6" }}
                />
              </a>
            </div>
            <div className="s-icons m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">
              <a className="" href="#">
                <i className="fa-brands fa-instagram instagram s-btn" />
              </a>
            </div>
            {/* <div className="s-icons m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300">
              <a className="" href="#">
                <i
                  className="fa-brands fa-x-twitter x s-btn "
                  style={{ color: "#000" }}
                />
              </a>
            </div> */}
            <div className="s-icons m-2 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-150">
              <a className="" href="#">
                <i
                  className="fa-brands fa-youtube s-btn yt-btn "
                  style={{ color: "red" }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="text-white">
      <hr className="my-3 border-3" />
      </div>
      <div className="text-center">
        <p className="text-white">&copy; Copyright 2024-SM Scents. All Rights Reserved</p>
        <p className="text-white">Developed By <a className="decoration-white hover:underline" href="">Anas Khan</a></p>
      </div>
    </div>
  </div>
</footer>

    )
}