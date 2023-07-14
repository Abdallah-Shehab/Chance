import React from "react";
import "./ProfileCard.css";
import avatar from "./images/download.png";
import abdallah from "./images/abdalla.jpg";
import alaa from "./images/alaa.jpg";
import abdelmaksoud from "./images/abdelmaksoud4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";

import Button from "@mui/material/Button";

function ProfileCard(props) {
  let data = props.data;
  console.log(data.image);
  return (
    <>
      {/* {alldata.map((data) => ( */}

      <div className="card-container">
        <header className="card-header">
          {" "}
          <img src={avatar} alt={data.name} />{" "}
        </header>
        <h1 className="bold-text">{data.name}</h1>
        <div className="social-container">
          <div className="followers">
            {/* <h1 className="bold-text">{data.title}</h1> */}
            <h2 className="normal-text">{data.title}</h2>
            <span className="smaller-text">{data.des}</span>
            <h2 className="smaller-text">Followers</h2>
          </div>
          {/* <div className="likes">
            <h1 className="bold-text">{props.likes}</h1>
            <h2 className="smaller-text">Likes</h2>
          </div>
          <div className="photos">
            <h1 className="bold-text">{props.photos}</h1>
            <h2 className="smaller-text">Photos</h2>
          </div> */}
        </div>
        <div className="likes">
          <Button variant="contained">GitHub</Button>
          <Button variant="contained">Linked In</Button>
        </div>
      </div>

      {/* ))} */}
    </>
  );
}

export default ProfileCard;
