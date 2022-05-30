import React from "react";
import imgGirl from "../img/landing-page-girl.png";
import Grid from "@mui/material/Grid";

function Main() {
  return (
    <div className="Main">

      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div>
          <img className="imgGirl" src={imgGirl} alt="Girlimg2" />
        </div>
        <div>
          <h1>Feel the music</h1>
          <p>Stream over 20 thousand songs with one click</p>
          <button className="boton">Join now</button>
        </div>
      </Grid>
    </div>
  );
}
export default Main;
