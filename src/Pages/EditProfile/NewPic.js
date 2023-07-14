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
const NewPic = () => {
  const location = useLocation();

  let { authTokens, logOut, profileData } = useContext(AuthContext);
  const preValues = location.state;
  console.log(preValues);
  const result = Object.values(preValues);
  const [input, setInput] = useState({
    image: result[0].image,
  });
  const params = useParams();
  let handleImageChange = (e) => {
    let newData = { ...input };

    newData["image"] = e.target.files[0];
    // newData["image"] ? setInput(newData) : :
    setInput(newData);
  };

  let updateProfile = async (e) => {
    e.preventDefault();

    let form_data = new FormData();
    if (input.image != null) {
      form_data.append("image", input.image);
    } else {
      form_data.append("image", result[0].image);
    }

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

    if (response.status === 200) {
      alert("User Updated Successfully");
      window.location.href = `/profile/${params.pk}`;
    } else {
      alert("Something went wrong!");
    }
  };
  return (
    <>
      <CssBaseline />
      <Container fixed style={{ marginTop: "20px" }}>
        <Box sx={{ bgcolor: "#ffff", height: "100vh", width: "80%" }}>
          <Form onSubmit={updateProfile}>
            <div className="img">
              <img
                src={`http://127.0.0.1:8000/${input.image}`}
                alt=""
                style={{
                  //   maxWidth: "640px",
                  //   maxHeight: "200px",
                  width: "70%",
                  borderRadius: "20px",
                  marginBottom: "5px",
                }}
              />
              <br />
              <br />
              <label for="image">New Pic</label>
              {"    "}
              <input
                type="file"
                id="image"
                accept="image/png, image/jpeg"
                onChange={handleImageChange}
              />
            </div>
            <Button variant="contained" type="submit">
              {" "}
              Save
            </Button>
          </Form>
        </Box>
      </Container>
    </>
  );
};

export default NewPic;
