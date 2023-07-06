import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";

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
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});
const Applications = ({ apps }) => {
  let { authTokens } = useContext(AuthContext);

  const [open, setOpen] = React.useState(false);
  let [applications, setApplications] = useState([]);

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

    // console.log(data);
    if (response.status === 200) {
      console.log(data);
      setApplications(data);
      // setJobs(data);
    }
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
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
                    <TableCell>ID</TableCell>
                    <TableCell align="left">Name</TableCell>

                    <TableCell align="left">Jop Title</TableCell>
                    <TableCell align="left">created at</TableCell>
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
                          <TableCell align="left">{a.id}</TableCell>
                          <TableCell align="left">{a.name}</TableCell>
                          <TableCell component="th" scope="row">
                            {a.jop}
                          </TableCell>
                          <TableCell align="left">{a.creted_at}</TableCell>

                          <TableCell align="left">
                            <Button
                              variant="View"
                              color="error"
                              style={{
                                border: "1px solid #c4bebe",
                                borderRadius: "45%",
                              }}
                              href={`/jobs/${apps}`}
                            >
                              View
                            </Button>
                          </TableCell>
                        </TableRow>
                      </TableBody>
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
  );
};

export default Applications;
