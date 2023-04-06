import React, { useState } from "react";
import "../App.css";

export default function Contact() {
  const [name, setName] = React.useState("");
  const [nameError, setNameError] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [emailError, setEmailError] = React.useState(false);
  const [number, setNumber] = React.useState("");
  const [numberError, setNumberError] = React.useState(false);
  const [message, setMessage] = React.useState("");
  const [messageError, setMessageError] = React.useState(false);

  const handleName = (e) => {
    let item = e.target.value;
    setNameError(false);
    setName(item);
  };
  const handleEmail = (e) => {
    let item = e.target.value;
    setEmailError(false);
    setEmail(item);
  };
  const handleNumber = (e) => {
    let item = e.target.value;
    setNumberError(false);
    setNumber(item);
  };

  const handleMessage = (e) => {
    let item = e.target.value;
    setMessageError(false);
    setMessage(item);
  };
  const formSubmit = (e) => {
    e.preventDefault();
    if (name === "") {
      setNameError(true);
    } else if (email === "") {
      setEmailError(true);
    } else if (number === "") {
      setNumberError(true);
    } else if (message === "") {
      setMessageError(true);
    } else {
      let data = {
        name: name,
        email: email,
        number: number,
        message: message,
      };
      let ls = window.localStorage.getItem("array");
      let todo = ls ? JSON.parse(ls) : [];
      todo.push(data);
      window.localStorage.setItem("array", JSON.stringify(todo));
      alert("sign up successfully");
      setName("");
      setEmail("");
      setNumber("");
      setMessage("");

      //   navigate("/Login");
    }
  };

  return (
    <>
      <div className="container main-form">
        <div className="row pt-5 ">
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form-img">
            <img className="form-img1" src="./../Images/contact.png" alt="" />
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6 col-12 form ">
            <form onClick={formSubmit}>
              <br />

              <h3>Contact Form</h3>
              <input
                type="text"
                value={name}
                onChange={handleName}
                name="name"
                className="input"
                placeholder="Enter name"
              />
              <br />
              {nameError ? <span>Please enter name</span> : null}
              <br />

              <input
                type="email"
                value={email}
                onChange={handleEmail}
                name="email"
                className="input"
                placeholder="Enter email"
              />
              <br />
              {emailError ? <span>Please enter email</span> : null}
              <br />

              <input
                type="number"
                value={number}
                onChange={handleNumber}
                name="number"
                className="input"
                placeholder="Mobile number"
              />
              <br />
              {numberError ? <span>Please enter number</span> : null}
              <br />

              <label for="exampleFormControlTextarea1"></label>
              <textarea
                className="form-control input"
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="type message"
                onChange={handleMessage}
              ></textarea>
              <br />
              {messageError ? <span>please enter your message</span> : null}

              <br />
              <button type="button" className="btn btn-light ">
                Sign-up
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
