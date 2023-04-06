import React, { useEffect, useState } from "react";
import StarRatings from "react-star-ratings";
import { useLocation } from "react-router-dom";

export default function SingleProduct() {
  const [data, setData] = useState({});
  const [loader, setLoader] = useState(true);
  const [count, setCount] = useState(0);
  const { state } = useLocation();

  useEffect(() => {
    const { data } = state || {};
    setData(data);
    setTimeout(() => {
      setLoader(false);
    }, 2000);
  }, [data]);

  function cartPlus() {
    if (count <= 4) {
      setCount(count + 1);
    }
  }
  function cartSusbs() {
    if (count > 0) {
      setCount(count - 1);
    }
  }
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

              <div className="single-data col-lg-8 col-md-6 col-sm-12 col-12 ">
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
                <button className="button" onClick={cartPlus}>
                  +
                </button>{" "}
                {count}
                <button className="button" onClick={cartSusbs}>
                  -
                </button>
                <button className="button">Buy Now</button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
