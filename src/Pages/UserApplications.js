import React, { useState, useEffect, useContext } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Button from "@mui/material/Button";
import AuthContext from "../context/AuthContext";
const UserApplications = () => {
  let { authTokens } = useContext(AuthContext);
  let { user, logOut } = useContext(AuthContext);

  let [applications, setApplications] = useState([]);

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
  return (
    <div>
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
                        href={`/jobs/${a.jop}`}
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
    </div>
  );
};

export default UserApplications;
