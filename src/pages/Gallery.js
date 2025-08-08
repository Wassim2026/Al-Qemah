import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

/* eslint-disable no-unused-vars */

const Home = () => {
  return (
    <div>

      {/* Our Gallery */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-3" style={{fontSize:'60px', fontFamily: "MyCustomFont", letterSpacing:'3px'}}>Our Gallery</h2>
          <Row className="g-4">
           {[
            "p1.jpeg", "p2.jpeg", "p3.jpeg", "p4.jpeg",
            "p5.jpeg", "p6.jpeg", "p7.jpeg", "p8.jpeg"
           ].map((src, index) => (
             <Col md={3} sm={6} xs={12} key={index}>
               <img
                 src={`img/${src}`}
                 alt={`Project ${index + 1}`}
                 className="img-fluid rounded shadow-sm"
                 style={{ objectFit: 'cover', width: '100%', height: '300px' }}
               />
             </Col>
           ))}
          </Row>
        </Container>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/971524238060" target='blank' className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
        <FaWhatsapp size={50} color="#25D366" />
      </a>
    </div>
  );
};

export default Home;
