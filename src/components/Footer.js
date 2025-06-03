import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = ({ darkMode }) => {
  return (
    <footer className={`py-3 ${darkMode ? 'bg-dark text-light' : 'bg-light'}`}>
      <Container className="text-center">
        <p className="mb-0">Developed by Muhammad Moosa Khalil@Dynamics 360</p>
      </Container>
    </footer>
  );
};

export default Footer; 