import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link } from "react-router-dom";

export default function Product() {
  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products", {
        method: "GET",
        body: null,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (data) {
          console.log(data);
          setData(data);
        })
        .catch((error) => {
          console.log(JSON.stringify(error), "error");
          alert("something went wrong");
        })
        .finally(() => {
          setLoader(false);
        });
    }, 1000);
  }, []);

  return (
    <>
      {loader === true ? (
        <div className="loader">
          <span>ggggggg</span>
        </div>
      ) : (
        <>
          <div className="container-fluid">
            <div className="row">
              <div className="main-div">
                <div className=" col-lg-12 col-md-12 col-sm-12 col-12 card-data">
                  {data.map((item) => {
                    return (
                      <>
                        <div className="card-d">
                          {
                            <Link to="/SingleProduct" state={{ data: item }}>
                              <img
                                className="itemImage"
                                src={item.image}
                                alt=""
                                height={160}
                                width={190}
                              />
                            </Link>
                          }
                          <br />
                          <h6>{item.category}</h6>
                          <h6>{item.title}</h6>
                          <h5>
                            <b>Price- $ </b>
                            {item.price}
                          </h5>
                          <div className="rating">
                            <StarRatings
                              shape="small"
                              rating={item.rating.rate}
                              starRatedColor={"gold"}
                              starDimension="15px"
                              starSpacing="2"
                              // changeRating={(rate) => {
                              //   console.log("rate change rate ", rate);
                              // }}
                            />
                          </div>
                          <h6>{item.rating.rate}</h6>
                          {
                            <Link to="/SingleProduct" state={{ data: item }}>
                              <button className="button">Add to cart</button>
                            </Link>
                          }
                          <button className="button">Buy Now</button>
                        </div>
                      </>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
