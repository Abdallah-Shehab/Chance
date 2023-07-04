import React, { useState, useEffect, useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";
import CssBaseline from "@mui/material/CssBaseline";
import AuthContext from "../../context/AuthContext";
import Box from "@mui/material/Box";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import "./test.css";
import { useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import languageArray from "./languageArray.json";
import departments from "./Departments.json";
import languages from "./languages.json";

const EditProfile = () => {
  let { authTokens, logOut, profileData } = useContext(AuthContext);
  const [country, setCountry] = React.useState("");
  const [nationality, setNationality] = React.useState("");

  let updateProfile = async (e) => {
    e.preventDefault();

    let response = await fetch("http://127.0.0.1:8000/api/profile/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        // firstname: e.target.firstname.value,
        // lastname: e.target.lastname.value,
        country: country,
        // bio: e.target.bio.value,
        nationality: nationality,

        // phone_number: e.target.phone_number.value,
        // birthday: e.target.birthday.value,
        // gender: e.target.gender.value,
        // city: e.target.city.value,

        // email: e.target.email.value,
        // password: e.target.password.value,
        // password2: e.target.password2.value,
      }),
    });
    let data = await response.json();
    console.log("yes", data);
    if (response.status === 200) {
      // setErrors(data.error);
      alert("User Updated Successfully");

      // setAuthTokens(data);
      // setUser(jwt_decode(data.access));
      // localStorage.setItem("authTokens", JSON.stringify(data));
      // navigate("/login");
    } else {
      // <Alert severity="error">{errors}</Alert>;
      alert("Something went wrong!");
    }
    // if (response.status === 200) {
    //   // setProfile(data);
    // } else if (response.statusText === "Unauthorized") {
    //   // logOut();
    // }
  };
  console.log(country);

  const handleChangeCountry = (event) => {
    setCountry(event.target.value);
  };

  const handleChangeNationality = (event) => {
    setNationality(event.target.value);
  };

  console.log(country);

  let [faculty, setFaculty] = useState("");
  let [depart, setDepart] = useState("");
  let HandleFaculty = (e) => {
    setFaculty(e.target.value);
    if (faculty != "select your Faculty") {
    }
  };
  let HandleDepart = (e) => {
    setDepart(e.target.value);
    if (depart != "select department") {
    }
  };
  return (
    <>
      <CssBaseline />
      <Container fluid>
        <form onSubmit={updateProfile}>
          <Box noValidate sx={{ mt: 1 }}>
            <Row className="bg-light text-center">
              <div className="fw-bolder fs-2 mt-3">General Info</div>
              <div>Tell companies more about yourself.</div>
              <Form
                style={{
                  width: "50%",
                  margin: "4px auto",
                  border: " .5px solid gray",
                }}
                className="text-start mt-4 p-4"
              >
                <span className="fw-bold fs-5 ms-5 mb-5">Personal Info</span>
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                  <Form.Label className="me-2 pt-2">Your Name</Form.Label>
                  {/* <InputGroup className="w-75">
                    <Form.Control aria-label="First name" required="required" />
                    <Form.Control aria-label="Last name" required="required" />
                  </InputGroup> */}
                </Form.Group>
                {/* <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                  <Form.Label className="me-2 pt-2">Birth Year </Form.Label>
                  <Form.Control
                    className="w-75"
                    type="number"
                    id="tentacles"
                    name="birthday"
                    min="1980"
                    max="2002"
                    required
                  />
                </Form.Group> */}
                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                  <Form.Label className="me-2 pt-2">Nationality </Form.Label>
                  <Form.Select
                    className="w-75"
                    aria-label="Default select example"
                    required
                    name="nationality"
                    onChange={handleChangeNationality}
                  >
                    <option value="select your Nationality">
                      select your Nationality
                    </option>
                    <option value="Egyptian">Egyptian</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                {/* <FormControl>
                  <FormLabel id="demo-radio-buttons-group-label">
                    Gender
                  </FormLabel>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="female"
                    name="gender"
                  >
                    <FormControlLabel
                      value="female"
                      control={<Radio />}
                      label="Female"
                    />
                    <FormControlLabel
                      value="male"
                      control={<Radio />}
                      label="Male"
                    />
                  </RadioGroup>
                </FormControl> */}
                <br />
                <span className="fw-bold fs-5 ms-5 mb-5">Your Location</span>

                <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                  <Form.Label className="me-2 pt-2">Country </Form.Label>

                  <Form.Select
                    className="w-75"
                    aria-label="Default select example"
                    required
                    name="country"
                    onChange={handleChangeCountry}
                  >
                    {/* <option disabled>select your Country</option> */}
                    <option value="Egypt">Egypt</option>
                    <option value="other">Other</option>
                  </Form.Select>
                </Form.Group>

                {/* <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                  <Form.Label className="me-2 pt-2">City </Form.Label>
                  <Form.Select
                    className="w-75"
                    aria-label="Default select example"
                    required
                    name="city"
                  >
                    <option value="select your City" selected>
                      select your City
                    </option>
                    <option value="Cairo">Cairo</option>
                    <option value="Alexandria">Alexandria</option>
                    <option value="Shubra El-Kheima">Shubra El-Kheima</option>
                    <option value="Giza">Giza</option>
                    <option value="Port Said">Port Said</option>
                    <option value="Suez">Suez</option>
                    <option value="Luxor">Luxor</option>
                    <option value="al-Mansura">al-Mansura</option>
                    <option value="El-Mahalla El-Kubra">
                      El-Mahalla El-Kubra
                    </option>
                    <option value="Asyut">Asyut</option>
                    <option value="Ismailia">Ismailia</option>
                    <option value="Fayyum">Fayyum</option>
                    <option value="Zagazig">Zagazig</option>
                    <option value="Aswan">Aswan</option>
                    <option value="Damietta">Damietta</option>
                    <option value="Damanhur">Damanhur</option>
                    <option value="Minoufia">Minoufia</option>
                    <option value="Kafr el-Sheikh">Kafr el-Sheikh</option>
                    <option value="Banha">Banha</option>
                    <option value="6th of October City">
                      6th of October City
                    </option>
                    <option value="Hurghada">Hurghada</option>
                    <option value="Sohag">Sohag</option>
                    <option value="Qena">Qena</option>
                    <option value="Beni Suef">Beni Suef</option>
                    <option value="al-Minya">al-Minya</option>
                    <option value="Marsa Matruh">Marsa Matruh</option>
                    <option value="Beheira">Beheira</option>
                  </Form.Select>
                </Form.Group> */}

                <span className="fw-bold fs-5 ms-5 mb-5">Contact Info</span>
                {/* <Form.Group className="d-flex flex-row justify-content-end me-5 ms-5 mb-3">
                  <Form.Label className="me-2 pt-2">Phone Number</Form.Label>
                  <Form.Control
                    className="w-75"
                    type="text"
                    id="tentacles"
                    name="phone_number"
                    required
                  />
                </Form.Group> */}
              </Form>
            </Row>
            <Col md={{ offset: 5 }}>
              <input
                style={{ background: "#ffc107", border: " 1px solid" }}
                className="w-25"
                type="submit"
              />
            </Col>
          </Box>
        </form>
      </Container>
    </>
  );
};

export default EditProfile;
