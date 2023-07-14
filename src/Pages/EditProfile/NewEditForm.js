import React, { useState, useEffect, useContext } from "react";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
import Container from "@mui/material/Container";
import CssBaseline from "@mui/material/CssBaseline";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

import AuthContext from "../../context/AuthContext";
const NewEditForm = () => {
  const location = useLocation();

  let { authTokens, logOut, profileData } = useContext(AuthContext);
  const preValues = location.state;
  console.log(preValues);
  const result = Object.values(preValues);

  let cities = [
    "Cairo",
    "Alexandria",
    "Shubra El-Kheima",
    "Giza",
    "Port Said",
    "Suez",
    "Luxor",
    "al-Mansura",
    "6th of October City",
  ];
  const [input, setInput] = useState({
    country: result[0].country,
    nationality: result[0].nationality,
    phone_number: result[0].phone_number,
    birthday: result[0].birthday,
    bio: result[0].bio,
    city: result[0].city,
    image: result[0].image,
    first_name: result[0].first_name,
    last_name: result[0].last_name,
    graduationyear: result[0].graduationyear,
    edulevel: result[0].edulevel,
    faculty: result[0].faculty,
    typejob: result[0].typejob,
    linkedinlink: result[0].linkedinlink,
    githublink: result[0].githublink,
  });
  const inputHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [inputName]: value });
  };
  const params = useParams();

  //   console.log(input.image.name);
  // let form_data = new FormData();
  // form_data.append("image", input.image, input.image.name);

  let updateProfile = async (e) => {
    e.preventDefault();

    let form_data = new FormData();

    form_data.append("first_name", input.first_name);
    form_data.append("last_name", input.last_name);
    form_data.append("country", input.country);
    form_data.append("nationality", input.nationality);
    form_data.append("phone_number", input.phone_number);
    form_data.append("birthday", input.birthday);
    form_data.append("bio", input.bio);
    form_data.append("city", input.city);
    form_data.append("graduationyear", input.graduationyear);
    form_data.append("edulevel", input.edulevel);
    form_data.append("faculty", input.faculty);
    form_data.append("typejob", input.typejob);
    form_data.append("githublink", input.githublink);
    form_data.append("linkedinlink", input.linkedinlink);

    let response = await fetch(
      `http://127.0.0.1:8000/api/profile/edit/${params.pk}`,
      {
        method: "PUT",
        headers: {
          // Accept: "application/json",
          // "Content-Type": "multipart/form-data",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: form_data,
      }
    );
    // let data = await response.json();
    if (response.status === 200) {
      // console.log("yes", data);

      // setErrors(data.error);
      alert("User Updated Successfully");
      window.location.href = `/profile/${params.pk}`;
    } else {
      // <Alert severity="error">{errors}</Alert>;
      alert("Something went wrong!");
    }
  };
  console.log(input);

  return (
    <>
      <CssBaseline />
      <Container fixed style={{ marginTop: "20px" }}>
        <Box sx={{ bgcolor: "#ffff", height: "100vh", width: "80%" }}>
          <Form onSubmit={updateProfile}>
            <FormGroup>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div className="inputs">
                  <Label style={{ color: "#1976d2" }} for="exampleEmail">
                    First Name
                  </Label>
                  <Input
                    type="text"
                    name="first_name"
                    onChange={inputHandler}
                    value={input.first_name}
                  />
                  <br />
                  <Label style={{ color: "#1976d2" }} for="exampleEmail">
                    Last Name
                  </Label>
                  <Input
                    type="text"
                    name="last_name"
                    onChange={inputHandler}
                    value={input.last_name}
                  />
                  <br />

                  <Label for="exampleEmail" style={{ color: "#1976d2" }}>
                    Job Title
                  </Label>
                  <Input
                    type="text"
                    name="typejob"
                    onChange={inputHandler}
                    value={input.typejob}
                  />
                </div>
                {/* <div className="img">
                  <img
                    src={`http://127.0.0.1:8000/${input.image}`}
                    alt=""
                    style={{
                      maxWidth: "200px",
                      maxHeight: "200px",
                      borderRadius: "20px",
                      marginBottom: "5px",
                    }}
                  />
                  <br />

                  <input
                    type="file"
                    id="image"
                    accept="image/png, image/jpeg"
                    onChange={handleImageChange}
                  />
                </div> */}
              </div>

              <FormGroup
                style={{ display: "inline", width: "10%" }}
              ></FormGroup>
            </FormGroup>
            <FormGroup></FormGroup>

            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleEmail">
                Bio
              </Label>
              <Input
                type="text"
                name="bio"
                onChange={inputHandler}
                value={input.bio}
                placeholder="Tell us about your self :)"
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="examplePassword">
                Phone Number
              </Label>
              <Input
                type="text"
                name="phone_number"
                value={input.phone_number}
                placeholder="*Please enter a valid phone number*"
                onChange={inputHandler}
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleSelect">
                Country
              </Label>
              <Input
                type="select"
                name="country"
                id="exampleSelect"
                onChange={inputHandler}
                value={input.country}
              >
                <option value="Egypt">Egypt</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleSelect">
                City
              </Label>
              <Input
                type="select"
                name="city"
                onChange={inputHandler}
                value={input.city}
              >
                <option value="Cairo">Cairo</option>
                <option value="Menuofia">Menuofia</option>
                <option value="Alexandria">Alexandria</option>
                <option value="Giza">Giza</option>
                <option value="Luxor">Luxor</option>
                <option value="al-Mansura">al-Mansura</option>
                <option value="Port Said">Port Said</option>
                <option value="6th of October City">6th of October City</option>
                <option value="Shubra El-Kheima">Shubra El-Kheima</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleSelect">
                Nationality
              </Label>
              <Input
                type="select"
                name="nationality"
                id="exampleSelect"
                onChange={inputHandler}
                value={input.nationality}
              >
                <option value="Egyptian">Egyptian</option>
                <option value="Other">Other</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleSelect">
                Faculty
              </Label>
              <Input
                type="select"
                name="faculty"
                id="exampleSelect"
                onChange={inputHandler}
                value={input.Faculty}
              >
                <option value="Faculty of Computer & Information">
                  Faculty of Computer & Information
                </option>
                <option value="Faculty of Computers & Data Science">
                  Faculty of Computers & Data Science
                </option>
                <option value="Faculty of Computers & Artificial Intelligence">
                  Faculty of Computers & Artificial Intelligence
                </option>
                <option value="Faculty of Artificial Intelligence">
                  Faculty of Artificial Intelligence
                </option>
                <option value="Faculty of Engineering">
                  Faculty of Engineering
                </option>
                <option value="Faculty of Electronic Engineering">
                  Faculty of Electronic Engineering
                </option>
                <option value="Faculty of Science">Faculty of Science</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleSelect">
                Educational level
              </Label>
              <Input
                type="select"
                name="edulevel"
                id="exampleSelect"
                onChange={inputHandler}
                value={input.edulevel}
              >
                <option value="Bachelor's Student">Bachelor's Student</option>
                <option value="Bachelor's Degree">Bachelor's Degree</option>
                <option value="Master's Degree">Master's Degree</option>
                <option value="PHD Degree">PHD Degree</option>
              </Input>
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleEmail">
                Graduation Year
              </Label>
              <Input
                type="text"
                name="graduationyear"
                onChange={inputHandler}
                value={input.graduationyear}
                placeholder="If you are still studying, put your expected year of graduation"
              />
            </FormGroup>
            <FormGroup>
              <Label style={{ color: "#1976d2" }} for="exampleEmail">
                Important Links
              </Label>
              <br />
              <Label for="exampleEmail" style={{ display: "inline-block" }}>
                GitHub :
              </Label>
              <Input
                type="text"
                name="githublink"
                onChange={inputHandler}
                value={input.githublink}
                placeholder="Put your GitHub link"
                style={{ display: "inline-block", width: "50%" }}
              />
              <br />
              <Label for="exampleEmail" style={{ display: "inline-block" }}>
                linked In :
              </Label>
              <Input
                type="text"
                name="linkedinlink"
                onChange={inputHandler}
                value={input.linkedinlink}
                placeholder="Put your GitHub link"
                style={{ display: "inline-block", width: "50%" }}
              />
            </FormGroup>
            <FormGroup>
              <Label for="exampleSelect" style={{ color: "#1976d2" }}>
                Date of Birth
              </Label>
              <br />
              {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker name="birthday" onChange={inputHandler} />
              </LocalizationProvider> */}
              <input
                type="Date"
                name="birthday"
                value={input.birthday}
                onChange={inputHandler}
                style={{
                  outline: "none ",
                  width: "15%",
                  height: "4%",
                  border: "1px solid #dddddd",
                  borderRadius: "5px",
                  padding: "5px",
                }}
              />
            </FormGroup>

            {/* <input type="submit" variant="contained" value="Submit" /> */}
            <Button type="submit" variant="contained">
              Submit
            </Button>
          </Form>
        </Box>
      </Container>
    </>
  );
};

export default NewEditForm;
