import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { FaWhatsapp, FaStar, FaTrophy } from 'react-icons/fa';
import './Home.css';
import TestimonialSection from '../components/TestimonialSection';
import { Link } from 'react-router-dom';
/* eslint-disable no-unused-vars */

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="hero-section text-white d-flex align-items-center"
        style={{
          background: 'linear-gradient(to right, #1f4267ff, #232d39ff)',
          minHeight: '82vh',
        }}
      >
        <Container>
          <div className="row align-items-center">
            {/* Left Text */}
            <div className="col-md-6 mb-4 text-md-start text-center">
              <h1 className="fw-bold" style={{ fontSize: '2.8rem' }}>
                Discover Elegant Gold Necklaces
              </h1>
              <p className="fs-5 mt-3">
                Handcrafted designs that define sophistication.<br />
                Perfect for every occasion.
              </p>
            </div>
      
            {/* Right Image */}
            <div className="col-md-6 text-center">
              <img
                src="img/goldnecklace.png"
                alt="Gold Necklace"
                className="img-fluid"
                style={{
                  maxWidth: '50%',
                  boxShadow: '0 8px 20px rgba(255, 215, 0, 0.3)',
                  borderRadius: '10px',
                }}
              />
            </div>
          </div>
        </Container>
      </div>

    <section className="custom-jewelry-section-four text-center" style={{ padding:"50px", backgroundColor:'#F5F5F5'}}>
      <div>
        <h2 className="padding-class">DEDICATED TO CRAFTING WITH PURPOSE AND PRIDE</h2>
        <div 
          className="underline" 
          style={{
            width: '60px',
            height: '3px',
            backgroundColor: '#000', 
            margin: '10px auto'
          }}
        ></div>
        <div className="jwelry-process-text" style={{width: '80%', margin: '30px auto'}}>
          <p>
            Excellence isn’t just a standard—it’s our promise. Every creation begins with passion and is shaped by the skilled hands and hearts of our dedicated team. We pour soul into every detail, ensuring that what we deliver is not just a product, but a reflection of our commitment, creativity, and pride. Your vision deserves nothing less than our very best.
          </p>   
        </div>
        <div className='steps'>

          {/* Step 1 */}
          <div className="step-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '60px 0', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <img src="/img/step1.jpeg" alt="Step 1" style={{ width: '50%', borderRadius: '12px' }} />
            </div>
            <div style={{ flex: 1, Width: '250px', textAlign:'left' }}>
              <h3 style={{letterSpacing:'2px', color:'#245182ff'}}>COMPUTER-AIDED MANUFACTURING (CAM)</h3>
              <p  style={{width: '80%', letterSpacing:'1px'}}>
                Once the vision is perfected through design, it moves into the hands of our cutting-edge CAM technology—where imagination begins to take physical form. With utmost precision, the digital blueprints are transformed into wax molds, laying the foundation for what will soon become a cherished creation. 
              </p>
              <p style={{width: '80%', letterSpacing:'1px'}}>
                This stage ensures not only unmatched accuracy but also honors the complexity and beauty of your design. Every contour, every curve, crafted with care—because your story deserves nothing less than perfection in every detail.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="step-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '60px 0', flexWrap: 'wrap',}}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <img src="/img/step2.jpeg" alt="Step 2" style={{ width: '50%', borderRadius: '12px' }} />
            </div>
             <div style={{ flex: 1, Width: '250px', textAlign:'left', marginLeft:"50px" }}>
              <h3 style={{letterSpacing:'2px', color:'#245182ff'}}>CASTING DEPARTMENT</h3>
              <p  style={{width: '80%', letterSpacing:'1px'}}>
                Our casting department transforms delicate wax designs into precise and durable gold forms using advanced techniques. Each creation showcases the beauty of Bahraini craftsmanship — with clean detailing, smooth surfaces, and perfect gold density.
              </p>
              <p style={{width: '80%', letterSpacing:'1px'}}>
                We ensure every casted piece provides a flawless foundation for further designing and engraving. Precision, quality, and tradition come together here — setting the standard for timeless elegance in gold jewelry.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="step-block" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', margin: '60px 0', flexWrap: 'wrap',}}>
            <div style={{ flex: 1, minWidth: '280px' }}>
              <img src="/img/step3.jpeg" alt="Step 2" style={{ width: '50%', borderRadius: '12px' }} />
            </div>
             <div style={{ flex: 1, Width: '250px', textAlign:'left', marginLeft:"50px" }}>
              <h3 style={{letterSpacing:'2px', color:'#245182ff'}}>POLISHING PERFECTION, SHINING HERTAGE</h3>
              <p  style={{width: '80%', letterSpacing:'1px'}}>
                Every piece of our Kuwaiti and Bahraini jewelry is hand-polished with care to bring out its true brilliance. This final touch ensures a flawless finish, enhancing the intricate designs and giving the gold its signature radiant glow. Beauty you can see — craftsmanship you can feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

      {/* Our Gallery */}
      <section className="py-5">
        <Container>
          <h2 className="text-center mb-5" style={{fontSize:'60px', fontFamily: "MyCustomFont", letterSpacing:'3px'}}>Our Gallery</h2>
          <Row className="g-4">
           {[
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
          <div className="text-center mt-5">
            <Button as={Link} to="/gallery" variant="dark" className="rounded-pill px-4 py-2">
              View More
            </Button>
          </div>
        </Container>
      </section>

      <TestimonialSection />
    
      <section className="custom-jewelry-section-four text-center" style={{backgroundColor:'#F5F5F5', padding:"30px"}}>
        <div>
          <h2 className="padding-class">CONNECT WITH US</h2>
          <div 
            className="underline" 
            style={{
              width: '60px',
              height: '3px',
              backgroundColor: '#000', 
              margin: '10px auto'
            }}
          ></div>
          <div className="custom-jewelry-section-text" style={{width: '50%', margin: '0 auto'}}>
            <p>
              Elevate your brand with custom designs that stand out. We combines your vision with our craftsmanship to create truly unique  jewelry pieces. Let’s collaborate to bring your ideas to life.
            </p>
            <p>Contact us to discuss your design needs or to submit your designs.</p>    
          </div>
          <div className="p-3">
            <button className="design-button">
              <a
                href="https://wa.me/97152420" 
                target="_blank"
                rel="noopener noreferrer"
              >
                BEGIN YOUR DESIGN JOURNEY
              </a>
            </button>
          </div>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a href="https://wa.me/971545059963" target='blank' className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
        <FaWhatsapp size={50} color="#25D366" />
      </a>
    </div>
  );
};

export default Home;
