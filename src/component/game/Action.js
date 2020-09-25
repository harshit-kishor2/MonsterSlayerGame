import React from "react";
import { Card, Button } from "react-bootstrap";
import Result from "./Result";
export default function Action(props) {
  return (
    <div>
      <div>
        <Card className="mx-auto mt-2 text-center" style={{ width: "60%" }}>
          <Card.Body>
            {props.show ? (
              <Button onClick={props.startGame}>Play Game</Button>
            ) : (
              <>
                <Button
                  onClick={props.attackHandler}
                  variant="info"
                  className="m-2"
                >
                  Attack
                </Button>
                <Button
                  onClick={props.doubleAttackHandler}
                  variant="danger"
                  className="m-2"
                >
                  Double Attack
                </Button>
                <Button
                  onClick={props.healTabHandler}
                  variant="success"
                  className="m-2"
                >
                  Heal
                </Button>
                <Button
                  onClick={props.giveUpHandler}
                  variant="warning"
                  className="m-2"
                >
                  Give Up
                </Button>
              </>
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}
