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
import { Button } from "@mui/material";

export const Jobs = () => {
  let [jobs, setJobs] = useState([]);
  let { authTokens } = useContext(AuthContext);
  let { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    getjobs();
  }, []);

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
    }
    //  else if (response.statusText === "Unauthorized") {
    //   logOut();
    // }
  };
  // try {
  //   const data = JSON.parse(jobs);
  //   console.log(data);
  // } catch (error) {
  //   console.error(error);

  // }
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
      alert("Applied job successfully");
    } else {
      alert("something went wrong");
    }
    // window.location.reload(false);
    // let data = await response.json();
    // console.log(data);

    //  else if (response.statusText === "Unauthorized") {
    //   logOut();
    // }
  }
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const records = jobs.slice(firstPostIndex, lastPostIndex);
  const npage = Math.ceil(jobs.length / postsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  var date = new Date("{{ djangoDate.isoformat }}");

  return (
    <>
      <div
        className="p-5 text-center bg-image"
        style={{
          backgroundImage: "url('http://127.0.0.1:8000/media/job/pxfuel.jpg')",
          height: "400px",
          zIndex: "-100",
        }}
      >
        <div className="mask" style={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}>
          <div className="d-flex justify-content-center align-items-center h-100">
            <div className="text-white">
              <h1 className="mb-3">Available Jobs</h1>
              <h4 className="mb-3">Subheading</h4>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
      <MDBContainer fluid>
        <div className="d-flex align-items-start bg-light mb-3">
          <MDBCol size="3">
            {" "}
            <h3>Filter</h3>
          </MDBCol>
          <MDBCol size="8">
            {" "}
            <div>
              <h4>Job Listing</h4>
            </div>
            {records.map(function (d, idx) {
              return (
                <>
                  <input type="hidden" key={idx} value={d.id} />

                  <MDBCard
                    className="mb-3"
                    style={{
                      position: "relative",
                    }}
                  >
                    <MDBRow className="g-0 position-relative">
                      <MDBCol md="8">
                        <MDBCardBody>
                          <MDBCardTitle>{d.title}</MDBCardTitle>
                          <MDBCardTitle>
                            <i
                              className="fa-solid fa-user"
                              style={{ color: "#a1a3a5", marginRight: "8px" }}
                            ></i>
                            {d.owner}
                          </MDBCardTitle>
                          <MDBCardText>
                            <i
                              className="fa-solid fa-scroll"
                              style={{ color: "#a1a3a5", marginRight: "8px" }}
                            ></i>
                            {d.Description}
                          </MDBCardText>
                          <br />

                          <MDBCardText style={{ marginRight: "15px" }}>
                            <i
                              className="fa-sharp fa-solid fa-location-dot"
                              style={{ color: "#a1a3a5", marginRight: "5px" }}
                            ></i>
                            {d.place}
                          </MDBCardText>

                          <i
                            className="fa-solid fa-clock"
                            style={{ color: "#a1a3a5", marginRight: "5px" }}
                          ></i>
                          <MDBCardText>{d.Jop_Type}</MDBCardText>
                          <br />
                          <MDBCardText>
                            <small className="text-muted">
                              {d.Published_at}
                              <br />
                              Last updated 3 mins ago
                            </small>
                          </MDBCardText>
                          <br />
                          <br />
                          {/* <MDBBtn
                            className="me-1"
                            color="success"
                            // href={`/jobs/${d.id}`}
                            onClick={ApplyForJob(`${d.id}`)}
                          >
                            <i className="fa fa-heart"> </i> Apply Now
                          </MDBBtn> */}
                          {user && user.superuser ? null : (
                            <>
                              <Button
                                onClick={(e) => ApplyForJob(`${d.id}`, e)}
                              >
                                Apply
                              </Button>
                            </>
                          )}
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
                          }}
                          src={`http://127.0.0.1:8000/${d.image}`}
                          alt="..."
                          fluid
                        />
                      </MDBCol>
                    </MDBRow>
                  </MDBCard>
                </>
              );
            })}
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
