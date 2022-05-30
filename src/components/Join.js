import React from "react";
import { Grid } from "@mui/material";

function Join() {
  return (
    <div className="join">
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <div className="grid-block">
          <h1 className="text-join">
            Join the <span className="acent">Fun</span>
          </h1>
        </div>
        <div className="form">
          <p>Name:</p>
          <input className="input"></input>
          <p>Email:</p>
          <input className="input"></input>
          <p>Password:</p>
          <input className="input"></input>
          <div>
            <button className="button-form">Join now</button>
          </div>
        </div>
      </Grid>
    </div>
  );
}

export default Join;
