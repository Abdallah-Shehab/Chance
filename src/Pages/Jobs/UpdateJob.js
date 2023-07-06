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
import TextField from "@mui/material/TextField";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const UpdateJob = (props) => {
  const location = useLocation();
  let { authTokens, logOut, profileData } = useContext(AuthContext);
  const [salary, setSalary] = React.useState("");
  const [title, setTitle] = React.useState("");
  const params = useParams();
  console.log(params);

  const preValues = location.state;
  const result = Object.values(preValues);
  const [input, setInput] = useState({
    salary: result[0].Salary,
    title: result[0].title,
  });
  const inputHandler = (e) => {
    const inputName = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [inputName]: value });
  };

  // console.log(result);
  console.log(result[0].Salary);
  let updateJob = async (e) => {
    e.preventDefault();

    let response = await fetch(
      `http://127.0.0.1:8000/jobs/companyposts/edit/${params.jobid}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          //   salary: salary,

          title: input.title,
          salary: input.salary,
        }),
      }
    );
    let data = await response.json();
    console.log("yes", data);
    if (response.status === 200) {
      alert("User Updated Successfully");
    } else {
      // <Alert severity="error">{errors}</Alert>;
      alert("Something went wrong!");
    }
  };

  return (
    <div>
      <CssBaseline />
      <Container fluid>
        <form onSubmit={updateJob}>
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
                <TextField
                  id="outlined-basic"
                  // label="salary"
                  name="salary"
                  type="number"
                  variant="outlined"
                  onChange={inputHandler}
                  value={input.salary}
                />
                <TextField
                  id="outlined-basic"
                  // label="salary"
                  name="title"
                  type="text"
                  variant="outlined"
                  onChange={inputHandler}
                  value={input.title}
                />
                {/* <input
                  type="text"
                  name="title"
                  id="outlined-basic"
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                /> */}
                {/* <TextField
                  id="outlined-basic"
                  label="title"
                  name="title"
                  variant="outlined"
                /> */}
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
    </div>
  );
};

export default UpdateJob;
