import React from 'react';
import { Card, Button } from 'react-bootstrap';

const EventCard = ({ event, darkMode }) => {
  return (
    <Card className={`h-100 ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}>
      <Card.Img
        variant="top"
        src={event.image}
        alt={event.name}
        style={{ height: '200px', objectFit: 'cover' }}
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title>{event.name}</Card.Title>
        <Card.Text>
          <span className="badge bg-primary me-2">
            <i className="bi bi-calendar-event me-1"></i>
            {event.date}
          </span>
          <span className="badge bg-success me-2">
            <i className="bi bi-clock me-1"></i>
            {event.time}
          </span>
          <br />
          <span className="text-danger fw-semibold ms-1">
            <i className="bi bi-geo-alt-fill me-1"></i>
            {event.location}
          </span>
        </Card.Text>
        <Card.Text className="flex-grow-1">{event.description}</Card.Text>
        <Button 
          variant="primary" 
          className="w-100 mt-3"
        >
          Register Now
        </Button>
      </Card.Body>
    </Card>
  );
};

export default EventCard; 