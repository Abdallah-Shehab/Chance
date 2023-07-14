import React from "react";
import Footer from "../components/Footer";
import HomeIcon from "@mui/icons-material/Home";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import Button from "@mui/material/Button";
import "../components/profileCard/ProfileCard.css";
import { useState } from "react";
const Contact = () => {
  let [inputs, setInputs] = useState({
    subject: "",
    email: "",
    message: "",
  });

  const inputHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInputs({ ...inputs, [inputName]: value });
  };
  let sendmessage = async (e) => {
    e.perventDefault();
    console.log(e.target.value);
    let response = await fetch("http://127.0.0.1:8000/contacts/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        // "Content-Type": "multipart/form-data",
        // Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        message: inputs.message,
        subject: inputs.subject,
        email: inputs.email,
      }),
    });
    // let data = await response.json();
    if (response.status === 200) {
      // console.log("yes", data);

      alert("User Updated Successfully");
      // window.location.href = `/profile/${params.pk}`;
    } else {
      alert("Something went wrong!");
    }
  };
  return (
    <>
      <div
        className="p-5 text-center bg-image"
        style={{
          height: "400px",
          zIndex: "-100",
          background: " rgb(2,0,36)",
          background:
            "linear-gradient(150deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 46%, rgba(19,54,61,1) 100%)",
        }}
      >
        {/* <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Contact Us</h1>
            </div>
          </div>
        </div> */}
        <br />
        <h1 style={{ color: "white" }}>Contact Us</h1>
        <div
          className="custom-shape-divider-bottom-1688905785"
          style={{
            position: "absolute",
            bottom: "0",
            left: "0",
            width: "100%",
            overflow: "hidden",
            lineHeight: "0",
            transform: "rotate(180deg)",
          }}
        >
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            style={{
              position: "relative",
              display: "block",
              width: "calc(100% + 1.3px)",
              height: "228px",
            }}
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="shape-fill"
              style={{
                fill: "#ffffff",
              }}
            ></path>
          </svg>
        </div>
      </div>
      <br />
      <br />
      <section class="contact-section section_padding">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <h2 class="contact-title">Get in Touch</h2>
            </div>
            <div class="col-lg-8">
              <form class="form-contact contact_form" onSubmit={sendmessage}>
                <div class="row">
                  <div class="col-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="subject"
                        id="subject"
                        type="text"
                        onChange={inputHandler}
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Subject'"
                        placeholder="Enter Subject"
                      />
                    </div>
                  </div>
                  <div class="col-sm-12">
                    <div class="form-group">
                      <input
                        class="form-control"
                        name="email"
                        id="email"
                        type="email"
                        onChange={inputHandler}
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email address'"
                        placeholder="Enter email address"
                      />
                    </div>
                  </div>
                  <div class="col-12">
                    <div class="form-group">
                      <textarea
                        class="form-control w-100"
                        name="message"
                        id="message"
                        onChange={inputHandler}
                        cols="30"
                        rows="9"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter Message'"
                        placeholder="Enter Message"
                      ></textarea>
                    </div>
                  </div>
                </div>
                <div class="form-group mt-3">
                  <Button variant="outlined" type="submit">
                    Send Message
                  </Button>
                  {/* <button
                    type="submit"
                    class="button button-contactForm btn_4 boxed-btn"
                  >
                    Send Message
                  </button> */}
                </div>
              </form>
            </div>
            <div class="col-lg-4">
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <HomeIcon />
                </span>
                <div class="media-body">
                  <h3>Egypt</h3>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <PhoneAndroidIcon />
                </span>
                <div class="media-body">
                  <h3>+9552318766</h3>
                  <p>Mon to Fri 9am to 6pm</p>
                </div>
              </div>
              <div class="media contact-info">
                <span class="contact-info__icon">
                  <MailOutlineIcon />
                </span>
                <div class="media-body">
                  <h3>ForsaTEam@gmail.com</h3>
                  <p>Send us your query anytime!</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
