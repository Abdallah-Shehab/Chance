import React, { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useLocation, useParams } from "react-router-dom";

const Job_details = () => {
  const params = useParams();
  let [jobDetails, setJobDetails] = useState([]);
  let { authTokens } = useContext(AuthContext);
  let { user, logOut } = useContext(AuthContext);

  useEffect(() => {
    getjobs();
  }, []);

  let getjobs = async () => {
    let response = await fetch(`http://127.0.0.1:8000/jobs/${params.id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        // Authorization: "Bearer " + String(authTokens.access),
      },
    });
    let data = await response.json();
    // console.log(data);
    if (response.status === 200) {
      setJobDetails(data);
    }
  };
  return (
    <>
      <p>title : </p>
      {jobDetails.title}
      <br /> <p>owner : </p>
      {jobDetails.owner}
      <br />
      <p>place : </p>
      {jobDetails.place}
      <br />
      <p>image : </p>
      {jobDetails.image}
      <br />
      <p>Salary : </p>
      {jobDetails.Salary}
      <br />
      <p>Jop_Type : </p>
      {jobDetails.Jop_Type}
      <br />
      <p>Experiance needed : </p>
      {jobDetails.Experiance}
      <br />
      <p>Description : </p>
      {jobDetails.Description}
      <br />
    </>
  );
};

export default Job_details;
