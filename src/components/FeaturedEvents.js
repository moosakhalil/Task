import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import EventCard from './EventCard';
import eventsData from '../data/events.json';

const FeaturedEvents = ({ darkMode }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Simulating API call with setTimeout
    setTimeout(() => {
      setEvents(eventsData.events);
    }, 500);
  }, []);

  const filteredEvents = events.filter(event =>
    event.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Container className={`py-5 ${darkMode ? 'text-light' : ''}`} id="events">
      <h2 className="text-center mb-4">Featured Events</h2>
      
      <Row className="mb-4">
        <Col md={6} className="mx-auto">
          <Form>
            <Form.Control
              type="search"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className={`mb-4 ${darkMode ? 'bg-dark text-light border-secondary' : ''}`}
            />
          </Form>
        </Col>
      </Row>

      <Row xs={1} md={2} lg={3} className="g-4">
        {filteredEvents.map(event => (
          <Col key={event.id}>
            <EventCard event={event} darkMode={darkMode} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeaturedEvents; 