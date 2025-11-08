import React from 'react';
import './Contact.css';
import logo from '../assets/v-films-logo.png';
import footerVector2 from '../assets/Footer Vector2.png';
import footerVector3 from '../assets/Footer Vector3.png';

const Contact = () => {
  return (
    <div className="section contact-section">
      <div className="section-content">
        <div className="contact-container">
          {/* Logo */}
          <div className="contact-logo">
            <img src={logo} alt="V Films" />
          </div>
          {/* Contact Text */}
          <p className="contact-text">
            Whether you have an idea, a question, or simply want<br />
            to explore how V can work together, V're just a<br />
            message away.<br />
            Let's catch up over coffee.<br />
            Great stories always begin with a good conversation
          </p>
          {/* Title */}
          <h2 className="contact-title">Join the Story</h2>
          {/* Subtitle */}
          <p className="contact-subtitle">Ready to bring your vision to life? Let's talk.</p>
          {/* Contact Form */}
          <form className="contact-form">
            <input type="text" placeholder="Your name*" className="form-input" />
            <input type="email" placeholder="Your email*" className="form-input" />
            <input type="tel" placeholder="Phone" className="form-input" />
            <textarea placeholder="Your message*" className="form-textarea" rows="5"></textarea>
            <button type="submit" className="submit-button">Submit</button>
          </form>
          {/* Email */}
          <p className="contact-email">vernita@varnanfilms.co.in</p>
          {/* Phone */}
          <p className="contact-phone">+91 98736 84567</p>
          {/* Footer Vector 2 */}
          <img src={footerVector2} alt="" className="footer-vector-2" />
          {/* Footer Vector 3 */}
          <img src={footerVector3} alt="" className="footer-vector-3" />
        </div>
      </div>
    </div>
  );
};

export default Contact;

