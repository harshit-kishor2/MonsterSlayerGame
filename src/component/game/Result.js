import React from "react";
import { Card } from "react-bootstrap";
export default function Result(props) {
  const res = props.turns.map((turn) => (
    <li>
      <p
        style={
          turn.isplayer
            ? { background: "lightblue" }
            : { background: "lightgreen" }
        }
      >
        {turn.text}
      </p>
    </li>
  ));

  return (
    <div>
      <Card className="mx-auto mt-2 text-center" style={{ width: "60%" }}>
        <ul>
          <li>
            <p>{res}</p>
          </li>
        </ul>
      </Card>
    </div>
  );
}
