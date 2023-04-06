import React, { useState } from "react";
import { FaTwitter, FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
export default function App() {
  const navigate = useNavigate();

  const [mob, setMob] = useState(false);
  const setNavbar = () => setMob(!mob);
  return (
    <>
      <div className="container main-container">
        <div className="container mt-5 navbar">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-sm-4 col-6">
              <h3 className="logo">Portfolio</h3>
            </div>
            <div className="col-lg-8 col-md-8 col-sm-8 col-6">
              <ul className={mob ? "mob-menu" : "menu"}>
                <li>
                  <button>Home</button>
                </li>
                <li>
                  <button>About</button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/Contact");
                    }}
                  >
                    Contact
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => {
                      navigate("/Product");
                    }}
                  >
                    Product
                  </button>
                </li>
              </ul>
              <div className="hemBurger" onClick={setNavbar}>
                {mob ? (
                  <button className="btn">
                    <i className="fa fa-Close"></i> Close
                  </button>
                ) : (
                  <button className="btn">
                    <i className="fa fa-bars"></i> Menu
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        <div style={{ marginTop: mob ? "15vh" : "  " }}></div>
        <div className="container second-container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 left">
              <h3>Hello,</h3>
              <h1>I'Am Web-Developer</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore
                excepturi maxime alias voluptatibus aperiam eligendi delectus.
              </p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 right">
              <div className="back-img">
                <img
                  className="front-img"
                  src="./../Images/hero.jpg"
                  height={310}
                  width={400}
                  alt="pic"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container third-container">
          <div className=" row footer">
            <div className="col-lg-4 col-md-4 col-sm-4 col-4 size ">
              <h4>Find Us Here</h4>
              <div className="icon">
                <i>
                  <FaFacebook />
                </i>
                <i>
                  <FaYoutube />
                </i>
                <i>
                  <FaInstagram />
                </i>
                <i>
                  <FaTwitter />
                </i>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4 size">
              <h4>Contact Us</h4>
              <p>
                +91-9165333662 <br />
                pradeepcarpenter345@gmail.com
              </p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-4 col-4 size">
              <h4>Localization</h4>
              <p>
                Rajgarh,MP <br />
                Village-Latahedi India💕
              </p>
            </div>
          </div>
          <div className="credit">
            @ created by <span>Pradeep Carpenter </span>| all rights are
            reserved !
            <hr />
          </div>
        </div>
      </div>
    </>
  );
}
