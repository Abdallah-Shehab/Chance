import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";

import EditIcon from "@mui/icons-material/Edit";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";

import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBCard,
  MDBCardText,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBTypography,
} from "mdb-react-ui-kit";

import "../assets/css/profilestyle.css";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import CardHoverMenus from "../components/CardHove/CardHoverMenus";
import ActionAlerts from "../components/ActionAlerts";

const Profile = () => {
  const params = useParams();
  let [profile, setProfile] = useState([]);
  let { authTokens } = useContext(AuthContext);
  let { user, logOut, profileData } = useContext(AuthContext);

  useEffect(() => {
    getProfile();
  }, []);
  // Important https://medium.com/@cole_ruche/uploading-images-to-rest-api-backend-in-react-js-b931376b5833
  let getProfile = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/api/profile/${params.pk}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setProfile(data);
    } else if (response.statusText === "Unauthorized") {
      logOut();
    }
  };
  // let [state, setState] = { msg: null };

  // let flashFn = (m) => {
  //   setState({ msg: m });
  //   setTimeout(() => {
  //     setState({ msg: null });
  //   }, 2000);
  // };
  // console.log(user.user_id === profile[0].user);
  return (
    <>
      {profile.map((profile) => (
        <>
          <MDBContainer fluid>
            <MDBRow className="justify-content-center align-items-center h-100">
              <MDBCol sm="9">
                <MDBCard>
                  <div
                    className="rounded-top text-white d-flex flex-row"
                    style={{
                      backgroundColor: "#000",
                      height: "200px",
                      // justifyContent: "flex-end",
                    }}
                  >
                    <div
                      className="ms-4 mt-5 d-flex flex-column"
                      style={{
                        width: "150px",
                        position: "relative",
                        alignItems: "flex-end",
                      }}
                    >
                      <Link
                        to={`/profile/newpic/${user.username}`}
                        state={{ state: profile }}
                        style={{
                          position: "absolute",
                          top: "55%  ",
                          zIndex: "10",
                        }}
                      >
                        <Tooltip title="New Profile Picture">
                          <IconButton
                            color="error"

                            // id={`${j.id}`}
                            // onClick={deletePost}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </Link>

                      {profile.image === null ? (
                        <MDBCardImage
                          src={`http://127.0.0.1:8000/media/profile/download.png`}
                          alt="Generic placeholder image"
                          className="img-fluid   rounded-3"
                          fluid
                          style={{
                            minWidth: "150px",
                            minHeight: "150px",
                            width: "150px",
                            zIndex: "1",
                            marginBottom: "5px",
                            boxShadow: "0px 0px 20px 2px rgba(255,255,255,0.3)",
                          }}
                        />
                      ) : (
                        <MDBCardImage
                          src={`http://127.0.0.1:8000/${profile.image}`}
                          alt="Generic placeholder image"
                          className="img-fluid   rounded-3"
                          fluid
                          style={{
                            minWidth: "150px",
                            minHeight: "130px",
                            width: "150px",

                            zIndex: "1",
                            marginBottom: "5px",
                            boxShadow: "0px 0px 20px 2px rgba(255,255,255,0.3)",
                          }}
                        />
                      )}

                      {user.user_id === profile.user ? (
                        <Link
                          to={`/profile/edit/${user.username}`}
                          state={{ state: profile }}
                        >
                          <MDBBtn
                            outline
                            color="dark"
                            style={{
                              width: "100%",
                              height: "36px",
                              overflow: "visible",
                            }}
                            // href="/profile/edit"
                          >
                            Edit profile
                          </MDBBtn>
                        </Link>
                      ) : null}
                    </div>
                    <div className="ms-3" style={{ marginTop: "130px" }}>
                      <MDBTypography tag="h5">
                        {profile.first_name} {profile.last_name}
                      </MDBTypography>
                      <MDBCardText>{profile.typejob}</MDBCardText>
                    </div>
                  </div>

                  <br />
                  <br />
                  <br />
                  <br />
                  <MDBCardBody className="text-black p-4">
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1 fw-bold">Bio</p>
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <MDBCardText className="font-italic mb-1">
                          {profile.bio}
                        </MDBCardText>
                      </div>
                    </div>
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1 fw-bold">
                        Personal Data
                      </p>
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Country :
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.country}
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          City :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.city}
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Phone Number :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.phone_number}
                        </MDBCardText>
                        <br />

                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Date of Birth :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.birthday}
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Gender :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.gender}
                        </MDBCardText>
                      </div>
                    </div>

                    <div className="mb-5" style={{ position: "relative" }}>
                      <p className="lead fw-normal mb-1 fw-bold">Links</p>
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          GitHub :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          <a href={`${profile.githublink}`}>
                            {profile.githublink}
                          </a>
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Linked IN:{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          <a href={`${profile.linkedinlink}`}>
                            {profile.linkedinlink}
                          </a>
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          CV:{" "}
                        </MDBCardText>

                        <MDBCardText className="font-italic mb-1 fs-6">
                          <a href={`http://127.0.0.1:8000/${profile.cv}`}>
                            {profile.first_name}.cv
                          </a>
                          <Link
                            to={`/profile/newcv/${user.username}`}
                            state={{ state: profile }}
                            style={{
                              position: "absolute",
                              bottom: "5%  ",
                              right: "5%",
                              zIndex: "100",
                            }}
                          >
                            <Tooltip title="Edit Cv">
                              <IconButton
                                color="error"

                                // id={`${j.id}`}
                                // onClick={deletePost}
                              >
                                <EditIcon />
                              </IconButton>
                            </Tooltip>
                          </Link>
                        </MDBCardText>
                      </div>
                    </div>
                    <div className="mb-5">
                      <p className="lead fw-normal mb-1 fw-bold">Education</p>
                      <div
                        className="p-4"
                        style={{ backgroundColor: "#f8f9fa" }}
                      >
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Faculty :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.faculty}
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Educational Level :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.edulevel}
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Department :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.department}
                        </MDBCardText>
                        <br />
                        <MDBCardText className="fw-normal mb-1 fs-5">
                          Graduation Year :{" "}
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.graduationyear}
                        </MDBCardText>
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </>
      ))}
    </>
  );
};

export default Profile;
