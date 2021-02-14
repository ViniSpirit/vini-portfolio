import React from "react";
import { Card, Button } from "react-bootstrap";
import Header from "../components/Header";

import img4 from "../images/projects/calculadora.jpg";

const Projects = () => {
  return (
    <>
      <Header page projects />
      <div
        className="ax-width"
        style={{ maxWidth: "500px", paddingTop: "100px" }}
      >
        <h1>Projects [in production....]</h1>
        {/* <Card style={{ width: "50rem" }}>
          <Card.Img variant="top" src={img4} />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">"http://github.com/viniSpirit"</Button>
          </Card.Body>
        </Card> */}
      </div>
    </>
  );
};

export default Projects;
