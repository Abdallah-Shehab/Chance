import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import CheckIcon from "@mui/icons-material/Check";
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Applications = ({ apps }) => {
  let { authTokens } = useContext(AuthContext);

  const [open, setOpen] = React.useState(false);
  let [appStatus, setAppStatus] = useState("");
  let [applications, setapplications] = useState([]);

  var moment = require("moment");
  const handleChange = (event) => {
    event.preventDefault();
    setAppStatus(event.target.value);
  };

  async function savechanges(e, id) {
    e.preventDefault();
    let response = await fetch(
      "http://127.0.0.1:8000/jobs/companyposts/applications/savechanges",
      {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
        body: JSON.stringify({
          made_by: id,
          status: appStatus,
        }),
      }
    );
    // let data = await response.json();
    if (response.status === 200) {
      alert("updated");
      window.location.reload(false);
    } else {
      alert("Something went wrong!");
    }
  }

  const handleClickOpen = async (e) => {
    setOpen(true);

    let response = await fetch(
      `http://127.0.0.1:8000/jobs/companyposts/applications/${e.currentTarget.id}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + String(authTokens.access),
        },
      }
    );
    let data = await response.json();

    if (response.status === 200) {
      setapplications(data);
    }
  };
  console.log(applications);
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CssBaseline />
      <Container fixed>
        <div>
          <Button
            variant="outlined"
            id={apps}
            onClick={handleClickOpen}
            style={{
              border: "1px solid #c4bebe",
              color: "black",
              borderRadius: "42%",
            }}
          >
            Applications
          </Button>
          <Dialog
            open={open}
            fullScreen
            TransitionComponent={Transition}
            keepMounted
            onClose={handleClose}
            aria-describedby="alert-dialog-slide-description"
          >
            <DialogTitle>Applications</DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-slide-description">
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
                      <TableRow
                        style={{
                          backgroundColor: "#e6e1e1",
                        }}
                      >
                        {/* <TableCell>ID</TableCell> */}
                        <TableCell align="left">Name</TableCell>
                        <TableCell align="left">Jop Title</TableCell>

                        <TableCell align="left">created at</TableCell>
                        <TableCell align="left">Statuse</TableCell>
                        <TableCell align="left"> </TableCell>
                        <TableCell align="left"> </TableCell>
                        <TableCell align="left">Acton </TableCell>
                      </TableRow>
                    </TableHead>
                    {applications.map(function (a, idx) {
                      return (
                        <>
                          <TableCell align="left">{a.made_by}</TableCell>
                          <TableCell align="left">{a.job_title}</TableCell>
                          <TableCell align="left">
                            {moment(a.created_at).format("DD-MMM-YYYY")}
                          </TableCell>

                          <TableCell align="left"> {a.status}</TableCell>
                          <TableCell align="left"></TableCell>
                          <TableCell align="left">
                            <Button
                              variant="View"
                              color="error"
                              style={{
                                border: "1px solid #c4bebe",
                                borderRadius: "45%",
                              }}
                              href={`/profile/${a.made_by}`}
                            >
                              View
                            </Button>
                          </TableCell>
                          <TableCell>
                            <FormControl
                              sx={{ minWidth: 120 }}
                              style={{ marginTop: "-10px" }}
                            >
                              <InputLabel id="demo-simple-select-label">
                                Status
                              </InputLabel>
                              <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Status"
                                onChange={handleChange}
                              >
                                <MenuItem value="Approved">Approved</MenuItem>
                                <MenuItem value="Rejected">Rejected</MenuItem>
                              </Select>
                            </FormControl>
                          </TableCell>
                          <Button
                            onClick={(e) => {
                              savechanges(e, a.made_by);
                            }}
                          >
                            Save
                          </Button>
                          {/* <input
                            type="submit"
                            value="save"
                            onClick={(e) => {
                              savechanges(e, a.made_by);
                            }}
                          /> */}
                        </>
                      );
                    })}
                  </Table>
                </TableContainer>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>Close</Button>
            </DialogActions>
          </Dialog>
        </div>
      </Container>
    </>
  );
};

export default Applications;
