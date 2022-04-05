import React from "react";
import { GrapesContext } from "./grapesContext";
import { Card } from "react-bootstrap";
import { grapes } from "./grapes";
import "../../css/card.css";

const CardComponent = () => {
  return (
    <>
      <GrapesContext.Consumer>
        {({ grapes }) => (
          <div className="card">
            {grapes.map((grape, key) => (
              <div >
                <Card style={{ width: "18rem", border: "0px" }}>
                  <Card.Body>
                    <Card.Img variant="top" src={grape.photo} /> 
                    <Card.Title className="p-3">{grape.name}</Card.Title>
                    <Card.Text className="p-1">{grape.description}</Card.Text>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        )}
      </GrapesContext.Consumer>
    </>
  );
};

export default CardComponent;
