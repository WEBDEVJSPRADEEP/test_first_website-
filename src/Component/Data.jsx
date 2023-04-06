import React, { useState } from "react";

export default function All() {
  let data1 = [
    {
      id: "1",
      catagory: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "2",
      catagory: "education",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "3",
      catagory: "photography",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "1",
      catagory: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "2",
      catagory: "education",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "3",
      catagory: "photography",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "1",
      catagory: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "2",
      catagory: "education",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "3",
      catagory: "photography",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "1",
      catagory: "Sports",
      image:
        "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "2",
      catagory: "education",
      image:
        "https://images.unsplash.com/photo-1546410531-bb4caa6b424d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
    {
      id: "3",
      catagory: "photography",
      image:
        "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      discription:
        "If you love the game, you know it takes true dedication. These sports quotes will give you the push you need on the days when it doesn't feel easy to compete",
    },
  ];

  const [data, setData] = useState(data1);

  const ShowData = (curVal) => {
    if (curVal != "All") {
      const updatData = data1.filter((item) => {
        return item.catagory === curVal;
      });
      console.log(updatData);
      setData(updatData);
    } else {
      setData(data1);
    }
  };
  return (
    <>
      <button onClick={() => ShowData("All")}>all</button>
      <button onClick={() => ShowData("Sports")}>Sports</button>
      <button onClick={() => ShowData("education")}>Education</button>
      <button onClick={() => ShowData("photography")}>photography</button>

      <div className="container main">
        <div className="row card-data">
          {data.map((item) => {
            return (
              <div className="col-lg-4 col-md-6 col-sm-12  card-d">
                <h2>{item.catagory}</h2>
                <img
                  src={item.image}
                  alt="..."
                  className="image"
                  height={200}
                  width={350}
                />
                <p className="card-text">{item.discription}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
