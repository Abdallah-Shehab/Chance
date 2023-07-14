import React, { useState, useEffect, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import AuthContext from "../context/AuthContext";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DeleteIcon from "@mui/icons-material/Delete";

import CheckIcon from "@mui/icons-material/Check";
import ActionAlerts from "../components/ActionAlerts";

const UserApplications = () => {
  let { authTokens } = useContext(AuthContext);
  let { user, logOut } = useContext(AuthContext);
  let [alert, setAlert] = useState("none");
  let [applications, setApplications] = useState([]);
  var moment = require("moment");

  useEffect(() => {
    getUserApplications();
  }, []);

  let getUserApplications = async () => {
    let response = await fetch(
      `http://127.0.0.1:8000/jobs/companyposts/userapplications`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();
    console.log(data);
    if (response.status === 200) {
      setApplications(data);
    }
    //  else if (response.statusText === "Unauthorized") {
    //   logOut();
    // }
  };
  let deletePost = async (e) => {
    e.preventDefault();
    // setDeleteId();

    let response = await fetch(
      `http://127.0.0.1:8000/jobs/companyposts/deleteapp/${e.currentTarget.id}`,
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
      <ActionAlerts alert={"Application Deleted"} />;
      // alert("User Deleted Successfully");
    } else {
      <ActionAlerts alert={"Something went wrong!"} />;

      // alert("Something went wrong!");
    }

    window.location.reload(false);
  };
  return (
    <div>
      <TableContainer>
        <div
          style={{
            minWidth: 600,
            backgroundColor: "#fff",

            width: "90%",
            padding: "10px",
            borderRadius: "10px",
            marginBottom: "10px",
            marginLeft: "20px",
            marginTop: "20px",
            boxShadow: " 0px 0px 22px -12px rgba(66, 68, 90, 1)",
          }}
        >
          <h3>Applications</h3>
        </div>

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
            <TableRow
              style={{
                backgroundColor: "#e6e1e1",
              }}
            >
              {/* <TableCell>ID</TableCell> */}
              <TableCell align="left">Job Owner</TableCell>

              <TableCell align="left">Jop Title</TableCell>
              <TableCell align="left">created at</TableCell>
              <TableCell align="left">status</TableCell>
              <TableCell align="left">Modify</TableCell>
              <TableCell align="left"></TableCell>
            </TableRow>
          </TableHead>
          {applications.map(function (a, idx) {
            return (
              <>
                <input type="hidden" key={idx} value={a.id} />

                <TableBody>
                  <TableRow
                    key={idx}
                    sx={{
                      "&:last-child td, &:last-child th": { border: 0 },
                    }}
                  >
                    {/* <TableCell align="left">{a.id}</TableCell> */}
                    <TableCell align="left"> {a.job_owner}</TableCell>

                    <TableCell component="th" scope="row">
                      {a.job_title}
                    </TableCell>
                    <TableCell align="left">
                      {moment(a.creted_at).format("DD-MMM-YYYY")}{" "}
                    </TableCell>
                    <TableCell align="left">
                      {a.status}
                      {/* <CheckIcon /> */}
                    </TableCell>

                    <TableCell align="left">
                      <Tooltip title="Delete">
                        <IconButton
                          color="error"
                          id={`${a.id}`}
                          onClick={deletePost}
                        >
                          <DeleteIcon />
                        </IconButton>
                      </Tooltip>{" "}
                    </TableCell>
                    <TableCell align="left">
                      <Button
                        variant="View"
                        color="error"
                        style={{
                          border: "1px solid #c4bebe",
                          borderRadius: "45%",
                        }}
                        href={`/jobs/${a.jop}`}
                      >
                        View
                      </Button>
                    </TableCell>
                    <TableCell align="left"> </TableCell>
                  </TableRow>
                </TableBody>
              </>
            );
          })}
        </Table>
      </TableContainer>
    </div>
  );
};

export default UserApplications;
