import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
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
const defaultTheme = createTheme();
const Add_Jop = () => {
  let { authTokens } = useContext(AuthContext);
  let { New_job, user, logOut } = useContext(AuthContext);

  //  useEffect(() => {
  //   getProfile();
  // }, []);
  console.log(user);
  return (
    <ThemeProvider theme={defaultTheme}>
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
            Post a Job
          </Typography>
          <Box component="form" noValidate onSubmit={New_job} sx={{ mt: 3 }}>
            <input type="hidden" name="id" value={`${user.user_id}`} />
            <p>{user.user_id}</p>
            {/* <input type="text" name="title" /> */}
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  autoComplete="given-name"
                  name="title"
                  required
                  fullWidth
                  id="title"
                  label="Job Title"
                  autoFocus
                />
              </Grid>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">City</InputLabel>
                  <Select
                    labelId="demo-simple-select-autowidth-label"
                    id="demo-simple-select-autowidth"
                    autoWidth
                    label="City"
                    name="city"
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
                  >
                    <MenuItem value="Full Time">Full Time</MenuItem>
                    <MenuItem value="Part Time">Part Time</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={7}>
                <TextField
                  required
                  fullWidth
                  id="Experience"
                  label="Experience"
                  name="experience"
                />
              </Grid>
              {/* <Grid item xs={7}>
                <input type="file" name="img" />
                <TextField
                  required
                  fullWidth
                  id="slug"
                  label="slug"
                  name="slug"
                />

                <TextField
                  required
                  fullWidth
                  id="Vacancy"
                  label="Vacancy"
                  name="Vacancy"
                />
              </Grid>*/}

              <Grid item xs={7}>
                <FormControl fullWidth>
                  <InputLabel htmlFor="outlined-adornment-amount">
                    Salary
                  </InputLabel>
                  <OutlinedInput
                    id="outlined-adornment-amount"
                    startAdornment={
                      <InputAdornment position="start">$</InputAdornment>
                    }
                    label="Salary"
                    name="salary"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="Description"
                  label="Description"
                  name="description"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Add_Jop;
