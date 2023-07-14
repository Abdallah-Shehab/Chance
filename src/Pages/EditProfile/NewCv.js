import React, { useState, ChangeEvent, useEffect, useContext } from "react";
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
const NewCv = () => {
  const location = useLocation();

  let { authTokens, logOut, profileData } = useContext(AuthContext);

  const params = useParams();
  const [file, setFile] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };
  //   const handleUploadClick = () => {
  //     if (!file) {
  //       return;
  //     }

  //     // 👇 Uploading the file using the fetch API to the server
  //     fetch(`http://127.0.0.1:8000/api/profile/edit/${params.pk}`, {
  //       method: "PUT",
  //       body: file,
  //       // 👇 Set headers manually for single file upload
  //       headers: {
  //         "content-type": file.type,
  //         "content-length": `${file.size}`, // 👈 Headers need to be a string
  //       },
  //     })
  //       .then((res) => res.json())
  //       .then((data) => console.log(data))
  //       .catch((err) => console.error(err));
  //   };

  let handleUploadClick = async (e) => {
    e.preventDefault();
    if (!file) {
      return;
    }
    let form_data = new FormData();
    form_data.append("cv", file);

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
          <Form>
            <div className="img">
              <div>
                <input
                  type="file"
                  onChange={handleFileChange}
                  accept="application/pdf,application/vnd.ms-excel"
                />
                <br />
                <br />
                <label for="Cv"></label>
                {"    "}
                <div>{file && `${file.name} - ${file.type}`}</div>
                <Button variant="contained" onClick={handleUploadClick}>
                  {" "}
                  Save
                </Button>
                {/* <button onClick={handleUploadClick}>Upload</button> */}
              </div>{" "}
            </div>

            {/* <Button variant="contained" type="submit">
              {" "}
              Save
            </Button> */}
          </Form>
        </Box>
      </Container>
    </>
  );
};

export default NewCv;
