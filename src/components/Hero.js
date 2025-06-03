import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Hero = ({ darkMode }) => {
  return (
    <div 
      className="hero-section"
      style={{
        backgroundImage: "url('/images/banner.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '60vh',
        position: 'relative'
      }}
    >
      <div className="hero-overlay" />
      <Container className="hero-content h-100">
        <Row className="h-100 align-items-center">
          <Col md={8} className="mx-auto text-center">
            <h1 className="display-3 fw-bold text-white mb-4">
              Discover TwinCity Events
            </h1>
            <p className="lead text-white fs-4">
              Your gateway to local experiences
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Hero; 