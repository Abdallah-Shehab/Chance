// import React from "react";
import React, { useState, useEffect, useContext } from "react";

import Button from "@mui/material/Button";

import AuthContext from "../../context/AuthContext";

import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import TextOverflow from "react-text-overflow";

import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import DoneIcon from "@mui/icons-material/Done";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";

import Applications from "./Applications";

import { Link } from "react-router-dom";
import Dash from "../AdminPanel/DashBoard";

const MangaPosts = () => {
  var moment = require("moment");

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
      <br />
      <CssBaseline />
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2} direction="row" style={{ zIndex: "-100" }}>
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
            <TableContainer>
              <div
                style={{
                  minWidth: 600,
                  backgroundColor: "#fff",

                  width: "30%",
                  padding: "10px",
                  borderRadius: "10px",
                  marginLeft: "20px",
                  boxShadow: "inset 0px 0px 22px -12px rgba(66, 68, 90, 1)",
                }}
              >
                <h1>Manage Jobs </h1>
              </div>
              <Table
                sx={{
                  minWidth: 600,
                  marginTop: "20px",
                  marginLeft: "20px",
                  width: "98%",
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
                    <TableCell
                      align="left"
                      style={{
                        // width: "20%",
                        maxWidth: "50px",
                        whiteSpace: "wrap",
                        overflow: "hidden !important",
                        textOverflow: "clip !important",
                      }}
                    >
                      Description
                    </TableCell>
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
                          <TableCell align="left"> 1</TableCell>
                          <TableCell component="th" scope="row">
                            {j.title}
                          </TableCell>
                          <TableCell align="left">{j.Salary}</TableCell>

                          <TableCell align="left">
                            <TextOverflow text={j.Description} />
                          </TableCell>
                          <TableCell align="left">
                            {moment(j.Published_at).format("DD-MMM-YYYY")}{" "}
                          </TableCell>
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
          <Grid item xs={2}>
            <Dash />
          </Grid>
        </Grid>

        {/* <Button onClick={getjobs}>get data</Button> */}
      </Box>
    </>
  );
};

export default MangaPosts;
