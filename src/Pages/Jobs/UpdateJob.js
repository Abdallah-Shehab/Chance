import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";

import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import OutlinedInput from "@mui/material/OutlinedInput";

import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";

const defaultTheme = createTheme();
const UpdateJob = (props) => {
  const location = useLocation();
  let { authTokens, logOut, profileData } = useContext(AuthContext);
  const [salary, setSalary] = React.useState("");
  const [title, setTitle] = React.useState("");
  const params = useParams();
  console.log(params);

  const preValues = location.state;
  const result = Object.values(preValues);
  console.log(result);
  const [input, setInput] = useState({
    salary: result[0].Salary,
    title: result[0].title,
    Experiance: result[0].Experiance,
    place: result[0].place,
    Jop_Type: result[0].Jop_Type,
    Description: result[0].Description,
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
      <ThemeProvider theme={defaultTheme}>
        <CssBaseline />
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={2}
            direction="row"
            style={{ zIndex: "-100" }}
          >
            <Grid
              item
              xs={10}
              justifyContent="flex-start"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 8,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                    <i className="fa-solid fa-laptop"></i>
                  </Avatar>
                  <Typography component="h1" variant="h5">
                    Update Job
                  </Typography>
                  <Box
                    component="form"
                    noValidate
                    onSubmit={updateJob}
                    sx={{ mt: 3 }}
                  >
                    {/* <input type="hidden" name="id" value={`${user.user_id}`} /> */}
                    {/* <p>{user.user_id}</p> */}
                    {/* <input type="text" name="title" /> */}
                    <Grid container spacing={1}>
                      <Grid item xs={13}>
                        <TextField
                          autoComplete="given-name"
                          name="title"
                          required
                          fullWidth
                          id="title"
                          label="Job Title"
                          value={input.title}
                          onChange={inputHandler}
                        />
                      </Grid>
                      <Grid item xs={5}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            City
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            autoWidth
                            label="City"
                            name="place"
                            value={input.place}
                            onChange={inputHandler}
                          >
                            <MenuItem value="Menofia">Menofia</MenuItem>
                            <MenuItem value="Cairo">Cairo</MenuItem>
                            <MenuItem value="Giza">Giza</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={7}>
                        <FormControl fullWidth>
                          <InputLabel id="demo-simple-select-label">
                            Job Type
                          </InputLabel>
                          <Select
                            labelId="demo-simple-select-autowidth-label"
                            id="demo-simple-select-autowidth"
                            autoWidth
                            label="Job Type"
                            name="Jop_Type"
                            value={input.Jop_Type}
                            onChange={inputHandler}
                          >
                            <MenuItem value="Full Time">Full Time</MenuItem>
                            <MenuItem value="Part Time">Part Time</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={7}>
                        <TextField
                          autoComplete="given-name"
                          name="experience"
                          required
                          fullWidth
                          id="title"
                          label="Experiance"
                          value={input.Experiance}
                          onChange={inputHandler}
                        />
                      </Grid>

                      <Grid item xs={7}>
                        <FormControl fullWidth>
                          <InputLabel htmlFor="outlined-adornment-amount">
                            Salary
                          </InputLabel>
                          <OutlinedInput
                            id="outlined-adornment-amount"
                            startAdornment={
                              <InputAdornment position="start">
                                $
                              </InputAdornment>
                            }
                            label="Salary"
                            name="salary"
                            value={input.salary}
                            onChange={inputHandler}
                          />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <TextField
                          required
                          fullWidth
                          multiline
                          id="Description"
                          label="Description"
                          name="description"
                          value={input.Description}
                        />
                      </Grid>
                    </Grid>
                    <Button
                      type="submit"
                      fullWidth
                      variant="contained"
                      sx={{ mt: 3, mb: 2 }}
                    >
                      ADD
                    </Button>
                  </Box>
                </Box>
              </Container>
            </Grid>
            <Grid item xs={2}></Grid>
          </Grid>
        </Box>
      </ThemeProvider>
      {/* <CssBaseline />
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
      </Container> */}
    </div>
  );
};

export default UpdateJob;
