import React, { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import data from "../Pages/ourData.json";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "../assets/css/style.css";
import "../assets/css/bootstrap.min.css";
import "../assets/css/swiper-bundle.min.css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import ProfileCard from "../components/profileCard/ProfileCard";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import TextField from "@mui/material/TextField";
import AuthContext from "../context/AuthContext";

import Footer from "../components/Footer";
import { useState } from "react";
import { useEffect } from "react";
const About = () => {
  var moment = require("moment");

  useEffect(() => {
    getComments();
  }, []);
  let { authTokens, SendComment, user } = useContext(AuthContext);
  let [comments, setComments] = useState([]);
  let getComments = async (e) => {
    let response = await fetch(`http://127.0.0.1:8000/jobs/comments`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    // console.log(data);
    if (response.status === 200) {
      setComments(data);
    }
  };
  console.log(comments);
  return (
    <>
      {/* <!-- ######################### --> */}
      <section className="py-5 bg-light">
        <div className="container px-5 my-5">
          <div className="text-center mb-5">
            <h2 className="fw-bolder text-primary">
              Let's start with the aim of the website
            </h2>
            <p className="text-center text-secondary">
              Let's Clarifies the aim of the application to avilable the
              useability to use the application...
            </p>
          </div>
          <div className="row gx-5 justify-content-center">
            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0 anyhover">
                <div className="card-body p-5">
                  <div
                    className="feature bg-secondary bg-gradient text-light rounded-3 mb-3"
                    style={{ width: "20%", padding: "15px" }}
                  >
                    <i className="fa-solid fa-user-tie"></i>
                  </div>
                  <h2 className="h4 fw-bolder text-primary">Search for jop</h2>
                  <p>
                    <span className="text-success display-block">
                      This is consider with person
                    </span>
                    <br />
                    In this department we consider for the person that not have
                    any jop and he want to find the suitable jop for him and
                    live the good life.
                  </p>
                  <br />

                  <a className="text-decoration-none" href="/jobs">
                    <button className="btn btn-outline-success">
                      Go to see more jops<i className="bi bi-arrow-right"></i>
                    </button>
                  </a>
                </div>
              </div>
            </div>

            <div className="col-lg-6 col-xl-4">
              <div className="card mb-5 mb-xl-0 anyhover">
                <div className="card-body p-5">
                  <div
                    className="feature bg-secondary bg-gradient text-light rounded-3 mb-3"
                    style={{ width: "20%", padding: "15px" }}
                  >
                    <i className="fa-solid fa-user-plus"></i>
                  </div>
                  <h2 className="h4 fw-bolder text-primary">
                    Search for employees
                  </h2>
                  <p>
                    <span className="text-success display-block">
                      This is consider with company
                    </span>
                    <br />
                    In this department we consider for the person that have jop
                    and he want to find the suitable persons to make the jop.
                  </p>{" "}
                  <br />
                  {user && user.staff ? (
                    <a
                      className="text-decoration-none"
                      href="/dashboard/manageposts"
                      s
                    >
                      <button className="btn btn-outline-success">
                        Go to see more jops<i className="bi bi-arrow-right"></i>
                      </button>
                    </a>
                  ) : (
                    <a className="text-decoration-none" href="/jobs" s>
                      <button className="btn btn-outline-success">
                        Go to see more jops<i className="bi bi-arrow-right"></i>
                      </button>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ######################### --> */}
      <br />
      <h2 className="text-center text-primary">Team Members</h2>
      <p className="text-center text-secondary">
        They are the team members for chance application...
      </p>
      <div style={{}}>
        <Swiper
          modules={[Pagination, Navigation]}
          spaceBetween={5}
          slidesPerView={3}
          loop={true}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          //   scrollbar={{ draggable: true }}

          className="mySwiper"
          style={{
            padding: "15px",
            marginTop: "10px",
            marginLeft: "10px",
          }}
        >
          <SwiperSlide
            style={
              {
                //   marginLeft: "20px",
              }
            }
          >
            <ProfileCard data={data[0]} />
          </SwiperSlide>
          <SwiperSlide
            style={
              {
                //   marginLeft: "10%",
              }
            }
          >
            <ProfileCard data={data[1]} />
          </SwiperSlide>{" "}
          <SwiperSlide
            style={
              {
                //   marginLeft: "10%",
              }
            }
          >
            <ProfileCard data={data[2]} />
          </SwiperSlide>
          <SwiperSlide
            style={
              {
                //   marginLeft: "10%",
              }
            }
          >
            <ProfileCard data={data[3]} />
          </SwiperSlide>
          <SwiperSlide
            style={
              {
                //   marginLeft: "10%",
              }
            }
          >
            <ProfileCard data={data[4]} />
          </SwiperSlide>
        </Swiper>
      </div>
      <section class="py-5 border-bottom" id="next">
        <div class="container px-5 my-5">
          <div class="text-center mb-5">
            <h2 class="fw-bolder">Department of review and taking opinions</h2>
            <p class="lead mb-0">
              Please, Leave your comment for your opinions about application and
              if you have some develop as you like...
            </p>
          </div>
          <div class="row gx-5">
            <div class="col-lg-8 mb-5 mb-lg-0">
              <form onSubmit={SendComment}>
                <TextField
                  multiline
                  id="Comment"
                  label="Comment"
                  name="comment"
                  style={{ width: "50%" }}
                />
                <br />
                <br />
                <button type="submit" class="btn btn-outline-success w-60">
                  Publish
                </button>
              </form>
              <br />

              <div class="container">
                {comments.map(function (comment, idx) {
                  return (
                    <>
                      {" "}
                      <div class="row py-2">
                        <div class="col-md-12">
                          <h5 class="thecommentname">
                            <AccountCircleIcon />

                            {"  "}
                            <a
                              href={`profile/${comment.username}`}
                              class="text-decoration-none"
                            >
                              {comment.username}
                            </a>
                            {"    "}
                            <span
                              class="text-secondary thedate"
                              style={{ fontSize: "15px" }}
                            >
                              {moment(comment.date).format("DD-MMM-YYYY")}
                            </span>
                          </h5>

                          <p class="thecomment">{comment.comment}</p>
                        </div>
                      </div>
                    </>
                  );
                })}
              </div>

              {/* <p>No comments yet.</p> */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;
