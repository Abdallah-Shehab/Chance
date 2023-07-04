import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../context/AuthContext";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
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
const Profile = () => {
  let [profile, setProfile] = useState([]);
  let { authTokens } = useContext(AuthContext);
  let { user, logOut } = useContext(AuthContext);
  console.log(user);
  useEffect(() => {
    getProfile();
  }, []);

  let getProfile = async () => {
    let response = await fetch("http://127.0.0.1:8000/api/profile/", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setProfile(data);
    } else if (response.statusText === "Unauthorized") {
      logOut();
    }
  };
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
                    style={{ backgroundColor: "#000", height: "200px" }}
                  >
                    <div
                      className="ms-4 mt-5 d-flex flex-column"
                      style={{ width: "150px" }}
                    >
                      <MDBCardImage
                        src={`http://127.0.0.1:8000/${profile.image}`}
                        alt="Generic placeholder image"
                        className="img-fluid   rounded-3"
                        fluid
                        style={{
                          width: "150px",
                          zIndex: "1",
                          marginBottom: "5px",
                          boxShadow: "0px 0px 20px 2px rgba(255,255,255,0.3)",
                        }}
                      />
                      <MDBBtn
                        outline
                        color="dark"
                        style={{ height: "36px", overflow: "visible" }}
                      >
                        Edit profile
                      </MDBBtn>
                    </div>
                    <div className="ms-3" style={{ marginTop: "130px" }}>
                      <MDBTypography tag="h5">
                        {user.first_name} {user.last_name}
                      </MDBTypography>
                      <MDBCardText>Job Title</MDBCardText>
                    </div>
                  </div>

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
                          Phone Number :
                        </MDBCardText>
                        <MDBCardText className="font-italic mb-1 fs-6">
                          {profile.phone_number}
                        </MDBCardText>
                      </div>
                    </div>

                    <div className="mb-5">
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
                      </div>
                    </div>
                  </MDBCardBody>
                </MDBCard>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          {/* <input type="hidden" key={profile.id} /> */}
          <label></label>

          <label>Bio : </label>
          <p key={profile.id}>{profile.bio}</p>
          <br />

          <label>country : </label>
          <p>{profile.country}</p>
          <br />
          <label>city : </label>
          <p>{profile.city}</p>
          <br />
          <label>phone_number : </label>
          <p>{profile.phone_number}</p>
          <br />
          {/* <label>image : </label> */}

          <img
            src={`http://127.0.0.1:8000/${profile.image}`}
            alt="logo"
            width="10%"
          />
          {/* <p>{profile.image}</p> */}
          <br />
          <label>experiance1 : </label>
          <p>{profile.experiance1}</p>
          <br />
          <label>experiance2 : </label>
          <p>{profile.experiance2}</p>
          <br />
          <label>cv : </label>
          <p>{profile.cv}</p>
          <br />
          <label>githublink : </label>
          <p>{profile.githublink}</p>
          <br />
          <label>linkedinlink : </label>
          <p>{profile.linkedinlink}</p>
          <br />
          <label>nationality : </label>
          <p>{profile.nationality}</p>
          <br />
          <label>birthday : </label>
          <p>{profile.birthday}</p>
          <br />
          <label>gender : </label>
          <p>{profile.gender}</p>
          <br />
          <label>typejop : </label>
          <p>{profile.typejop}</p>
          <br />
          <label>categories : </label>
          <p>{profile.categories}</p>
          <br />
          <label>salary : </label>
          <p>{profile.salary}</p>
          <br />
          <label>experianceyears : </label>
          <p>{profile.experianceyears}</p>
          <br />
          <label>leveleducation : </label>
          <p>{profile.leveleducation}</p>
          <br />
          <label>faculty : </label>
          <p>{profile.faculty}</p>
          <br />
          <label>department : </label>
          <p>{profile.department}</p>
          <br />
          <label>graduationyear : </label>
          <p>{profile.graduationyear}</p>
          <br />
          <label>languages : </label>
          <p>{profile.languages}</p>
          <br />

          {/* <p key={profile.id}>{profile["id"]}</p>
            <label>Bio : </label>
            <p>{profile["bio"]}</p>
            <br />
            <p>{profile["categories"]}</p>
            <p>{profile["country"]}</p>
            <p>{profile["experianceyears"]}</p> */}
        </>
      ))}
    </>

    // <Container fixed>
    //   <CssBaseline />

    //   {profile.map((profile) => (
    //     <>
    //       {/* <input type="hidden" key={profile.id} /> */}
    //       <label></label>

    //       <label>Bio : </label>
    //       <p key={profile.id}>{profile.bio}</p>
    //       <br />

    //       <label>country : </label>
    //       <p>{profile.country}</p>
    //       <br />
    //       <label>city : </label>
    //       <p>{profile.city}</p>
    //       <br />
    //       <label>phone_number : </label>
    //       <p>{profile.phone_number}</p>
    //       <br />
    //       {/* <label>image : </label> */}

    //       <img
    //         src={`http://127.0.0.1:8000/${profile.image}`}
    //         alt="logo"
    //         width="10%"
    //       />
    //       {/* <p>{profile.image}</p> */}
    //       <br />
    //       <label>experiance1 : </label>
    //       <p>{profile.experiance1}</p>
    //       <br />
    //       <label>experiance2 : </label>
    //       <p>{profile.experiance2}</p>
    //       <br />
    //       <label>cv : </label>
    //       <p>{profile.cv}</p>
    //       <br />
    //       <label>githublink : </label>
    //       <p>{profile.githublink}</p>
    //       <br />
    //       <label>linkedinlink : </label>
    //       <p>{profile.linkedinlink}</p>
    //       <br />
    //       <label>nationality : </label>
    //       <p>{profile.nationality}</p>
    //       <br />
    //       <label>birthday : </label>
    //       <p>{profile.birthday}</p>
    //       <br />
    //       <label>gender : </label>
    //       <p>{profile.gender}</p>
    //       <br />
    //       <label>typejop : </label>
    //       <p>{profile.typejop}</p>
    //       <br />
    //       <label>categories : </label>
    //       <p>{profile.categories}</p>
    //       <br />
    //       <label>salary : </label>
    //       <p>{profile.salary}</p>
    //       <br />
    //       <label>experianceyears : </label>
    //       <p>{profile.experianceyears}</p>
    //       <br />
    //       <label>leveleducation : </label>
    //       <p>{profile.leveleducation}</p>
    //       <br />
    //       <label>faculty : </label>
    //       <p>{profile.faculty}</p>
    //       <br />
    //       <label>department : </label>
    //       <p>{profile.department}</p>
    //       <br />
    //       <label>graduationyear : </label>
    //       <p>{profile.graduationyear}</p>
    //       <br />
    //       <label>languages : </label>
    //       <p>{profile.languages}</p>
    //       <br />

    //       {/* <p key={profile.id}>{profile["id"]}</p>
    //       <label>Bio : </label>
    //       <p>{profile["bio"]}</p>
    //       <br />
    //       <p>{profile["categories"]}</p>
    //       <p>{profile["country"]}</p>
    //       <p>{profile["experianceyears"]}</p> */}
    //     </>
    //   ))}

    //   <Button href="/profile/edit" variant="contained">
    //     Edit Profile
    //   </Button>
    // </Container>
  );
};

export default Profile;
