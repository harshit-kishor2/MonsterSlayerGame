import React from "react";
import { ProgressBar } from "react-bootstrap";

export default function GameBody(props) {
  return (
    <div>
      <div className="row">
        <div className="col-6 mt-5 text-center">
          <h4>You</h4>
        </div>
        <div className="col-6 mt-5 text-center">
          <h4>Monster</h4>
        </div>
      </div>
      <div className="row">
        <div className="col-6 mt-5">
          <ProgressBar now={props.player} label={`${props.player}%`} />
        </div>
        <div className="col-6 mt-5">
          <ProgressBar now={props.monster} label={`${props.monster}%`} />
        </div>
      </div>
    </div>
  );
}
