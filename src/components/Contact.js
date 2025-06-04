import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

const Contact = ({ darkMode }) => {
  return (
    <Container className={`py-5 contact-section ${darkMode ? 'text-light' : ''}`} id="contact">
      <h2 className="text-center mb-4">Contact Us</h2>
      <Row className="justify-content-center">
        <Col md={8} lg={7}>
          <Card className={`contact-card flex-md-row shadow-lg border-0 ${darkMode ? 'bg-dark text-light' : 'bg-white'}`}>
            <Row className="g-0 align-items-center flex-md-row flex-column">
              <Col md={5} xs={12} className="d-flex justify-content-center align-items-center py-4 py-md-0">
                <img
                  src="/images/contact.jpg"
                  alt="Contact"
                  className="contact-avatar"
                  style={{ width: '160px', height: '160px', objectFit: 'cover', borderRadius: '50%', boxShadow: '0 2px 12px rgba(0,0,0,0.10)' }}
                />
              </Col>
              <Col md={7} xs={12} className="d-flex align-items-center">
                <Card.Body className="p-4 w-100">
                  <h3 className="mb-3 fw-bold">
                    Muhammad Moosa Khalil
                  </h3>
                  <p className="mb-2"><strong>Email:</strong> <a href="mailto:moosamughal21@gmail.com" className={darkMode ? 'text-info' : 'text-primary'}>moosamughal21@gmail.com</a></p>
                  <p className="mb-2"><strong>Phone:</strong> <a href="tel:+923312674909" className={darkMode ? 'text-info' : 'text-primary'}>0331 2674909</a></p>
                  <p className="mb-2"><strong>Address:</strong> Karachi, Pakistan</p>
                  <div className="mt-4 d-flex align-items-center gap-3">
                    <a href="https://www.linkedin.com/in/muhammad-moosa-khalil-9a3569306/" target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-info d-flex align-items-center' : 'text-primary d-flex align-items-center'} style={{ textDecoration: 'none', fontWeight: 500 }}>
                      <i className="bi bi-linkedin" style={{ fontSize: '1.3rem', marginRight: '6px' }}></i>
                      LinkedIn
                    </a>
                    <a href="https://github.com/moosakhalil" target="_blank" rel="noopener noreferrer" className={darkMode ? 'text-info d-flex align-items-center' : 'text-primary d-flex align-items-center'} style={{ textDecoration: 'none', fontWeight: 500 }}>
                      <i className="bi bi-github" style={{ fontSize: '1.3rem', marginRight: '6px' }}></i>
                      GitHub
                    </a>
                  </div>
                </Card.Body>
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Contact;