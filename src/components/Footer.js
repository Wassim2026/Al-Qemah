import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: '#0b0b0b',
        color: '#ccc',
        paddingTop: '60px',
        paddingBottom: '30px',
      }}
    >
      <Container>
        <Row className="gy-4 justify-content-center text-center text-md-start">
          {/* Logo & About */}
          <Col
            md={4}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <img
              src="/img/logo.png"
              alt="AL QEMAH Logo"
              height="110"
              className="mb-3"
            />
            <div className="d-flex gap-3 mt-3">
              <a href="#" className="text-white fs-5">
                <FaFacebookF />
              </a>
              <a href="#" className="text-white fs-5">
                <FaInstagram />
              </a>
              <a href="#" className="text-white fs-5">
                <FaTwitter />
              </a>
              <a href="#" className="text-white fs-5">
                <FaLinkedinIn />
              </a>
            </div>
          </Col>

          {/* Quick Links */}
          <Col
            md={2}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <h6 className="text-white fw-semibold mb-3">Quick Links</h6>
            <ul className="list-unstyled">
              <li>
                <a
                  href="/"
                  className="text-decoration-none text-light"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/gallery"
                  className="text-decoration-none text-light"
                >
                  Gallery
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-decoration-none text-light"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-decoration-none text-light"
                >
                  Contact
                </a>
              </li>
            </ul>
          </Col>

          {/* Contact Info */}
          <Col
            md={3}
            className="d-flex flex-column align-items-center align-items-md-start"
          >
            <h6 className="text-white fw-semibold mb-3">Contact Us</h6>
            <ul className="list-unstyled text-light small">
              <li className="mb-2">
                <FaMapMarkerAlt className="me-2 text-danger" />
                  Shop No:02, Behind Fourth Street Industrial Area 13, Sharjah-U.A.E.
              </li>
              <li className="mb-2">
                <FaPhoneAlt className="me-2 text-danger" />
                +971 54-505-9963
              </li>
              <li className="mb-2">
                <FaEnvelope className="me-2 text-danger" />
                info@alqemah.ae
              </li>
            </ul>
          </Col>
        </Row>

        <hr className="mt-5" style={{ borderColor: '#333' }} />
        <div className="text-center small text-light">
          © {new Date().getFullYear()} AL QEMAH GOLDSMITH L.L.C. All Rights Reserved.
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
