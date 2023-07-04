import React, { useState, useEffect, useContext } from "react";
import Box from "@mui/material/Box";
import AuthContext from "../../context/AuthContext";
const Call = () => {
  let { authTokens, logOut, profileData } = useContext(AuthContext);
  let updateProfile = async (e) => {
    e.preventDefault();
    let response = await fetch("http://127.0.0.1:8000/api/profile/edit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + String(authTokens.access),
      },
      body: JSON.stringify({
        // firstname: e.target.firstname.value,
        // lastname: e.target.lastname.value,
        // username: e.target.username.value,
        bio: "none",
        // password: e.target.password.value,
        // password2: e.target.password2.value,
      }),
    });
    let data = await response.json();
    console.log("yes");
    // if (response.status === 200) {
    //   // setProfile(data);
    // } else if (response.statusText === "Unauthorized") {
    //   // logOut();
    // }
  };
  return (
    <div>
      {" "}
      <Box component="form" onSubmit={updateProfile} noValidate sx={{ mt: 1 }}>
        <input type="submit" />
      </Box>
    </div>
  );
};

export default Call;
