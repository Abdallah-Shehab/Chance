import React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const FilterJobs = (props) => {
  function onFilterValueChange(event) {
    // console.log(event.target.value);
    props.FilterValueSelected(event.target.value);
    setType(event.target.value);
  }
  let [type, setType] = useState("all");
  let [city, setCity] = useState("all");
  return (
    <div>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Job Type</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Job Type"
          name="Jop_Type"
          value={type}
          onChange={onFilterValueChange}
          style={{ color: "black" }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"Full Time"}>Full Time</MenuItem>
          <MenuItem value={"Part Time"}>Part Time</MenuItem>
        </Select>
      </FormControl>
      <br />
      <br />
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">City</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="City"
          name="city"
          value={city}
          // onChange={onFilterValueChange}
          style={{ color: "black" }}
        >
          <MenuItem value={"all"}>All</MenuItem>
          <MenuItem value={"Cairo"}>Cairo</MenuItem>
          <MenuItem value={"Giza"}>Giza</MenuItem>
          {/* <MenuItem value={"Part Time"}>Part Time</MenuItem> */}
        </Select>
      </FormControl>
    </div>
  );
};

export default FilterJobs;
