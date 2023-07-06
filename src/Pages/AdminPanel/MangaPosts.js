// import React from "react";
import React, { useState, useEffect, useContext } from "react";
import Dash from "./DashBoard";
import Button from "@mui/material/Button";

import AuthContext from "../../context/AuthContext";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Chip from "@mui/material/Chip";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { DataGrid } from "@mui/x-data-grid";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Applications from "./Applications";
import UpdateJob from "../Jobs/UpdateJob";
import { Link } from "react-router-dom";
const MangaPosts = () => {
  let { authTokens } = useContext(AuthContext);
  let [jobs, setJobs] = useState([]);
  let [deleteID, setDeleteId] = useState([]);
  let { user, logOut } = useContext(AuthContext);

  let [updata, setUpdata] = useState([]);
  const RefillData = (d) => {
    setUpdata(d);
  };

  useEffect(() => {
    getjobs();
  }, []);

  const getjobs = async () => {
    let response = await fetch(`http://127.0.0.1:8000/jobs/companyposts`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    // console.log(data);
    if (response.status === 200) {
      console.log(data);
      setJobs(data);
    }
  };

  // const getApps = async (e) => {
  //   let response = await fetch(
  //     `http://127.0.0.1:8000/jobs/companyposts/applications/${e.currentTarget.id}`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Authorization: "Bearer " + String(authTokens.access),
  //       },
  //     }
  //   );
  //   let data = await response.json();

  //   // console.log(data);
  //   if (response.status === 200) {
  //     console.log(data);
  //     setApplications(data);
  //     // setJobs(data);
  //   }
  // };

  let deletePost = async (e) => {
    e.preventDefault();
    // setDeleteId();

    let response = await fetch(
      `http://127.0.0.1:8000/jobs/companyposts/edit/${e.currentTarget.id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          //   salary: salary,
        }),
      }
    );
    if (response.status === 204) {
      alert("User Deleted Successfully");
    } else {
      alert("Something went wrong!");
    }

    window.location.reload(false);
  };

  return (
    <>
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        {/* <Dash /> */}

        <Grid container spacing={2} style={{ zIndex: "-100" }}>
          <Grid
            item
            xs={8}
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1>Manage Posts </h1>
            <TableContainer>
              <Table
                sx={{
                  minWidth: 600,
                  marginTop: "20px",
                  marginLeft: "20px",
                  width: "90%",
                  boxShadow: " 0px 10px 15px -3px rgba(0,0,0,0.1)",
                }}
                stickyHeader
                aria-label="sticky table"
              >
                <TableHead>
                  <TableRow style={{ backgroundColor: "#e6e1e1" }}>
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Title</TableCell>
                    <TableCell align="left">Salary&nbsp;(EGP)</TableCell>
                    <TableCell align="left">Description</TableCell>
                    <TableCell align="left">Published_at</TableCell>
                    <TableCell align="left">Modify</TableCell>
                    <TableCell align="left"></TableCell>
                    <TableCell align="left"></TableCell>
                  </TableRow>
                </TableHead>
                {jobs.map(function (j, idx) {
                  return (
                    <>
                      <input type="hidden" key={idx} value={j.id} />

                      <TableBody>
                        <TableRow
                          key={idx}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                        >
                          <TableCell align="left">{j.id}</TableCell>
                          <TableCell component="th" scope="row">
                            {j.title}
                          </TableCell>
                          <TableCell align="left">{j.Salary}</TableCell>

                          <TableCell align="left">{j.Description}</TableCell>
                          <TableCell align="left">{j.Published_at}</TableCell>
                          <TableCell align="left">
                            <Tooltip title="Edit">
                              <Link
                                to={`/dashboard/manageposts/update/${j.id}`}
                                state={{ values: j }}
                              >
                                <IconButton
                                // href={`/dashboard/manageposts/update/${j.id}`}
                                // onClick={() => RefillData(j)}
                                >
                                  {/* <UpdateJob RefillData={updata} /> */}
                                  <EditIcon />
                                </IconButton>
                              </Link>
                            </Tooltip>
                            <Tooltip title="Delete">
                              <IconButton
                                color="error"
                                id={`${j.id}`}
                                onClick={deletePost}
                              >
                                <DeleteIcon />
                              </IconButton>
                            </Tooltip>
                          </TableCell>
                          <TableCell align="left">
                            <Button
                              variant="View"
                              color="error"
                              style={{
                                border: "1px solid #c4bebe",
                                borderRadius: "45%",
                              }}
                              href={`/jobs/${j.id}`}
                            >
                              View
                            </Button>
                          </TableCell>
                          <TableCell>
                            <Applications apps={`${j.id}`} />
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </>
                  );
                })}
              </Table>
            </TableContainer>
            <br />
          </Grid>
          {/* <Grid item xs={4}>
          </Grid> */}
        </Grid>

        {/* <Button onClick={getjobs}>get data</Button> */}
      </Box>
    </>
  );
};

export default MangaPosts;
