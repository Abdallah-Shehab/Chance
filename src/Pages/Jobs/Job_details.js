import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useLocation, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { useNavigate } from "react-router-dom";
import ActionAlerts from "../../components/ActionAlerts";
const Job_details = () => {
  const params = useParams();
  let [jobDetails, setJobDetails] = useState([]);
  let { authTokens } = useContext(AuthContext);
  let { user, logOut } = useContext(AuthContext);

  let [status, setstatus] = useState(0);

  let [alerts, setAlerts] = useState(" ");
  useEffect(() => {
    getjobs();
  }, []);
  var moment = require("moment");
  const navigate = useNavigate();
  let getjobs = async () => {
    let response = await fetch(`http://127.0.0.1:8000/jobs/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    // console.log(data);
    if (response.status === 200) {
      setJobDetails(data);
    }
  };
  async function ApplyForJob(id) {
    let response = await fetch(
      "http://127.0.0.1:8000/jobs/companyposts/apply",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          //   salary: salary,
          jobid: id,
          // user: user.username,
        }),
      }
    );
    if (response.status === 200) {
      // alert("success");
      setstatus(response.status);
      setTimeout(() => {
        navigate("/myApplications");
      }, 2000);
    } else {
      setstatus(response.status);
      setTimeout(() => {
        navigate("/myApplications");
      }, 2000);
      // alert("warning");

      // alert("something went wrong");
    }
    // window.location.reload(false);
    // let data = await response.json();
    // console.log(data);

    //  else if (response.statusText === "Unauthorized") {
    //   logOut();
    // }
  }
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
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
        <h2 style={{ color: "white" }}>job Details</h2>

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
      <div class="job_details_area">
        <div class="container">
          <div class="row">
            <div class="col-lg-8">
              <div class="job_details_header">
                <div class="single_jobs white-bg d-flex justify-content-between">
                  <div class="jobs_left d-flex align-items-center">
                    <div
                      class="imageofjop"
                      style={{ width: "20%", marginRight: "10px" }}
                    >
                      <img
                        // style="width: 80px; height: 80px; margin-right: 10px; border-radius: 5px;"
                        src={`http://127.0.0.1:8000/${jobDetails.image}`}
                        alt="none "
                        style={{
                          marginTop: "0",
                          width: "100%",
                          height: "90%",
                          borderRadius: "10%",
                        }}
                      />
                    </div>
                    <div class="jobs_conetent">
                      <p
                        class="text-decoration-none"
                        style={{ textDecoration: "none", color: "black" }}
                      >
                        <h4>{jobDetails.title}</h4>
                      </p>
                      {/* 
                      <img
                        src={`http://127.0.0.1:8000/media/profile/download.png`}
                        alt="none "
                        style={{
                          width: "37px",
                          height: "37px",
                          borderRadius: "50%",
                          marginTop: "0",
                          marginRight: "5px",
                        }}
                      /> */}

                      <a
                        href="/accounts/profile/{{jop.owner}}"
                        class="text-decoration-none"
                        style={{ textDecoration: "none", color: "gray" }}
                      >
                        {/* &nbsp;{jobDetails.owner} */}
                        Admin
                      </a>
                      <div class="links_locat d-flex align-items-center">
                        <div class="location">
                          <p>
                            {" "}
                            <i
                              className="fa-sharp fa-solid fa-location-dot"
                              style={{ color: "#a1a3a5", marginRight: "5px" }}
                            ></i>
                            {jobDetails.place}
                          </p>
                        </div>
                        <div class="location">
                          <p>
                            {" "}
                            <i
                              className="fa-solid fa-clock"
                              style={{ color: "#a1a3a5", marginRight: "5px" }}
                            ></i>
                            {jobDetails.Jop_Type}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="jobs_right">
                    <div class="apply_now">
                      {/* {% if jop.owner == user %} */}
                      {user && user.staff ? null : (
                        <>
                          <Button
                            onClick={(e) => {
                              ApplyForJob(`${jobDetails.id}`, e);
                              handleOpen();
                            }}
                            variant="contained"
                          >
                            Apply
                          </Button>
                          <Modal
                            open={open}
                            onClose={handleClose}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                          >
                            {status > 200 ? (
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Already Applied
                                </Typography>
                              </Box>
                            ) : (
                              <Box sx={style}>
                                <Typography
                                  id="modal-modal-title"
                                  variant="h6"
                                  component="h2"
                                >
                                  Successfully Applied , Check Applications and
                                  Wait for Response
                                </Typography>
                              </Box>
                            )}
                          </Modal>
                          {/* <Button
                            variant="contained"
                            onClick={(e) => {
                              ApplyForJob(`${jobDetails.id}`, e);
                            }}
                          >
                            Apply
                          </Button> */}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
              <div class="descript_wrap white-bg">
                <div class="single_wrap">
                  <h4>Job description</h4>
                  <p>{jobDetails.Description}</p>
                </div>
              </div>
            </div>
            <div class="col-lg-4">
              <div class="job_sumary">
                <div class="summery_header">
                  <h3>Job Summery</h3>
                </div>
                <div class="job_content">
                  <ul>
                    <li>
                      Published on:{" "}
                      <span>
                        {" "}
                        {moment(jobDetails.Published_at).format("DD-MMM-YYYY")}
                      </span>
                    </li>
                    <li>
                      Vacancy: <span>{jobDetails.Vacancy}Position</span>
                    </li>
                    <li>
                      Experance: <span>{jobDetails.Experiance} Years</span>
                    </li>
                    <li>
                      Salary: <span>{jobDetails.Salary} $</span>
                    </li>
                    <li>
                      Location: <span>{jobDetails.place}</span>
                    </li>
                    <li>
                      Job Nature: <span> {jobDetails.Jop_Type}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        style={{
          position: "fixed",
          bottom: "2%",
          right: "5%",
        }}
      ></div>
    </>
  );
};

export default Job_details;
