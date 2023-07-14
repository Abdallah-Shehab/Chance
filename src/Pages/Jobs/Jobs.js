import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import "../../assets/css/bootstrap.min.css";
import {
  MDBCard,
  MDBCardTitle,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBContainer,
} from "mdb-react-ui-kit";
import Pagination from "../../components/Pagination";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTime";
import { Numbers } from "@mui/icons-material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import FilterJobs from "../../components/FilterJobs";
import TextOverflow from "react-text-overflow";
export const Jobs = () => {
  let [jobs, setJobs] = useState([]);
  let { authTokens } = useContext(AuthContext);
  let { user, logOut } = useContext(AuthContext);
  const [userSearchData, setUserSearchData] = useState([]);
  const [jobTybe, setJobTybe] = useState("all");
  const [jobCity, setJobCity] = useState("all");

  useEffect(() => {
    getjobs();
  }, []);
  const handleSearch = () => {
    const newData = jobs
      .filter((x) => x.Jop_Type == (jobTybe == "all" ? x.Jop_Type : jobTybe))
      .filter((x) => x.place == (jobCity == "all" ? x.place : jobCity));
    setUserSearchData(newData);
  };

  let getjobs = async () => {
    let response = await fetch("http://127.0.0.1:8000/jobs/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setJobs(data);
      setUserSearchData(data);
    }
  };

  var moment = require("moment");

  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const records = jobs.slice(firstPostIndex, lastPostIndex);
  const npage = Math.ceil(jobs.length / postsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);
  let [filterTextValue, updateFilterText] = useState("all");
  let filterJobsList = jobs.filter((job) => {
    if (filterTextValue == "Full Time") {
      return job.Jop_Type === "Full Time";
    } else if (filterTextValue == "Part Time") {
      return job.Jop_Type === "Part Time";
    } else {
      return job;
    }
  });

  function onFilterValueSelected(filterValue) {
    updateFilterText(filterValue);
  }

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
        <br />
        <h1 style={{ color: "white" }}>Available Jobs</h1>
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
      <MDBContainer fluid>
        <div className="d-flex align-items-start bg-light mb-3">
          <MDBCol
            size="3"
            style={{
              backgroundColor: "#fff",

              padding: "10px",
              borderRadius: "10px",
              marginBottom: "10px",
              boxShadow: " 0px 0px 22px -12px rgba(66, 68, 90, 1)",
            }}
          >
            <h3>Filter</h3>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Job Type"
                name="Jop_Type"
                value={jobTybe}
                onChange={(e) => setJobTybe(e.target.value)}
                style={{ color: "black" }}
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"Full Time"}>Full Time</MenuItem>
                <MenuItem value={"Part Time"}>Part Time</MenuItem>
              </Select>
            </FormControl>
            <br />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">City</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Job Type"
                name="City"
                value={jobCity}
                onChange={(e) => setJobCity(e.target.value)}
                style={{ color: "black" }}
              >
                <MenuItem value={"all"}>All</MenuItem>
                <MenuItem value={"Cairo"}>Cairo</MenuItem>
                <MenuItem value={"Menofia"}>Menofia</MenuItem>
              </Select>
            </FormControl>
            {/* <FilterJobs
              FilterValueSelected={onFilterValueSelected}
            ></FilterJobs> */}
            <Button onClick={handleSearch}>Search</Button>
          </MDBCol>
          <MDBCol size="8">
            {" "}
            <div
              style={{
                minWidth: 600,
                backgroundColor: "#fff",

                width: "100%",
                padding: "10px",
                borderRadius: "10px",
                marginBottom: "10px",
                boxShadow: " 0px 0px 22px -12px rgba(66, 68, 90, 1)",
              }}
            >
              <h3>Job Listing</h3>
            </div>
            {userSearchData && userSearchData.length > 0
              ? userSearchData.map((item) => (
                  <>
                    {/* <input type="hidden" key={idx} value={d.id} /> */}

                    <MDBCard
                      className="mb-3"
                      style={{
                        position: "relative",
                      }}
                    >
                      <MDBRow className="g-0 position-relative">
                        <MDBCol md="8">
                          <MDBCardBody>
                            <MDBCardTitle h2>{item.title}</MDBCardTitle>

                            <MDBCardTitle>
                              <i
                                className="fa-solid fa-user"
                                style={{ color: "#a1a3a5", marginRight: "8px" }}
                              ></i>
                              <a
                                href={`profile/${item.username}`}
                                style={{
                                  textDecoration: "none",
                                  color: "cyan",
                                }}
                              >
                                {item.username}
                              </a>
                              {/* Admin */}
                            </MDBCardTitle>
                            <MDBCardText style={{ marginRight: "15px" }}>
                              <i
                                className="fa-sharp fa-solid fa-location-dot"
                                style={{ color: "#a1a3a5", marginRight: "5px" }}
                              ></i>
                              {item.place}
                            </MDBCardText>
                            <i
                              className="fa-solid fa-clock"
                              style={{ color: "#a1a3a5", marginRight: "5px" }}
                            ></i>
                            <MDBCardText>{item.Jop_Type}</MDBCardText>
                            <br />
                            <MDBCardText>
                              <i className="fa-solid fa-scroll"></i>
                              <TextOverflow text={item.Description} />
                              {/* {d.Description} */}
                            </MDBCardText>
                            <MDBCardText>
                              <small className="text-muted">
                                {/* {getDateFromString(d.published_at)} */}
                                {/* {{d.Published_at|date:'d M o'}} */}
                                <br />
                                Date Published :
                                {moment(item.Published_at).format(
                                  "DD-MMM-YYYY"
                                )}
                                {/* Last updated 3 mins ago */}
                              </small>
                            </MDBCardText>
                            <br />
                            <br />

                            <Button
                              variant="outlined"
                              href={`/jobs/${item.id}`}
                            >
                              See Details
                            </Button>
                            {"  "}
                          </MDBCardBody>
                        </MDBCol>
                        <MDBCol
                          md="2"
                          style={{
                            width: " 20%",
                            marginTop: "20px",
                            marginLeft: "30px",
                          }}
                        >
                          <MDBCardImage
                            // className="position-absolute top-50 start-100 translate-middle"
                            style={{
                              minWidth: "140px",
                              borderRadius: "30px  !important",
                              marginTop: "0px",
                            }}
                            src={`http://127.0.0.1:8000/${item.image}`}
                            alt="..."
                            fluid
                          />
                        </MDBCol>
                      </MDBRow>
                    </MDBCard>
                  </>
                ))
              : "no data"}
          </MDBCol>
        </div>
      </MDBContainer>
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button href="#" className="page-link" onClick={prePage}>
              prev
            </button>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <button
                href="#"
                className="page-link"
                onClick={() => changepage(n)}
              >
                {n}
              </button>
            </li>
          ))}
          <li>
            <button href="#" className="page-link" onClick={nextPage}>
              next
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  function changepage(id) {
    setCurrentPage(id);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }
};
