import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

const EventCard = ({ title, description, link }) => {
  return (
    <Card className="event-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>{description}</Card.Text>
      </Card.Body>
      <Card.Footer>
        <div className="button-container">
          <Button variant="primary" href={link} target="_blank">
            Learn More
          </Button>
        </div>
      </Card.Footer>
    </Card>
  );
};

export default EventCard;
