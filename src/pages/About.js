import './About.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import React, { useState } from 'react';
import './About.css';
import { FaWhatsapp } from 'react-icons/fa';

const About = () => {
  return (
    <>
       <div className="container my-5">
        <div className="row align-items-center shadow-lg rounded-4 p-4" style={{ background: 'linear-gradient(145deg, #fffdf8, #fef9f3)' }}>
    
    {/* Text Column */}
    <div className="col-md-6 mb-4 mb-md-0">
      <h2 className="fw-bold mb-5" style={{ fontSize: '2.2rem', color: '#333' }}>
        Crafting Legacy, Shaping Elegance
      </h2>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.8' }}>
        Founded in 2023, <strong>Al Qemah Al Thahabiah Goldsmith LLC</strong> specializes in <strong>Kuwaiti and Bahraini gold jewellery</strong>.
        Merging traditional goldsmithing with contemporary design, our creations echo timeless beauty and Gulf heritage.
      </p>
      <p style={{ fontSize: '1.05rem', lineHeight: '1.75' }}>
        Each piece is a syccmbol of meticulous craftsmanship and cultural pride. From retailers to individuals seeking one-of-a-kind designs, we serve with unmatched passion and precision.
      </p>
      <p style={{ fontStyle: 'italic', color: '#666' }}>
        More than just jewellery — we craft stories of elegance and identity.
      </p>
    </div>

    {/* Image Column */}
    <div className="col-md-6 text-center">
      <img
        src="/img/aboutus.webp"
        alt="About Us - Goldsmith"
        className="img-fluid rounded-3"
        style={{ maxHeight: '400px', objectFit: 'cover', width: '100%' }}
      />
    </div>

    {/* WhatsApp Floating Button */}
    <a href="https://wa.me/971545059963" target='blank' className="position-fixed bottom-0 end-0 m-4" style={{ zIndex: 1050 }}>
      <FaWhatsapp size={50} color="#25D366" />
    </a>
  </div>
</div>


    </>

  );
};

export default About;
