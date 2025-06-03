import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = ({ darkMode, setDarkMode }) => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Navbar 
      expand="lg" 
      fixed="top" 
      className={`${darkMode ? 'bg-dark' : 'bg-white'} shadow-sm py-2`}
      variant={darkMode ? 'dark' : 'light'}
    >
      <Container>
        <Navbar.Brand 
          href="#" 
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="d-flex align-items-center"
        >
          <img
            src="/images/logo.jpg"
            alt="TwinCity Events Logo"
            height="56"
            className="d-inline-block align-top me-3"
            style={{ borderRadius: '10px' }}
          />
          <span className="fw-bold fs-4">TwinCity Events</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link 
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="fw-medium"
            >
              Home
            </Nav.Link>
            <Nav.Link 
              href="#events"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('events');
              }}
              className="fw-medium"
            >
              Events
            </Nav.Link>
            <Nav.Link 
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('contact');
              }}
              className="fw-medium"
            >
              Contact
            </Nav.Link>
            <div className="theme-toggle ms-4" onClick={() => setDarkMode(!darkMode)} role="button" tabIndex={0} aria-label="Toggle dark mode">
              <div className={`toggle-switch ${darkMode ? 'dark' : 'light'}`}> 
                <span className="toggle-thumb"></span>
              </div>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar; 