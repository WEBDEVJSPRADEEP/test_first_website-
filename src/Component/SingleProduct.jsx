import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { Link, useLocation, useNavigate } from "react-router-dom";

export default function SingleProduct() {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  const { state } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const { data } = state || {};
    setData(data);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [data]);

  return (
    <div>
      {loader === true ? (
        <div className="loader">
          <span></span>
        </div>
      ) : (
        <>
          <div className="container single-page">
            <div className="row rows">
              <div className=" col-lg-4 col-md-6 col-sm-12 col-12 single-image">
                <img className="item-image" src={data?.image} alt="" />
              </div>

              <div className="single-data col-lg-8 col-md-6 col-sm-12 col-12  ">
                <h6>{data?.category}</h6>
                <h6>{data?.title}</h6>
                <h5>
                  <b>Price- $ </b>
                  <span> {data?.price}</span>
                </h5>
                <div className="rating">
                  <StarRatings
                    shape="small"
                    rating={data?.rating.rate}
                    starRatedColor={"gold"}
                    starDimension="15px"
                    starSpacing="2"
                  />
                  <h6>{data?.rating.rate}</h6>
                </div>

                <h5>{data?.description}</h5>
                <Link to="/cart" state={{ data: data }}>
                  <button
                    className="button"
                    onClick={() => {
                      navigate("/cart");
                    }}
                  >
                    Add to cart
                  </button>
                </Link>

                <button className="button">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
