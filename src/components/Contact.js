import React, { useState, useEffect, useRef } from 'react';
import './Contact.css';
import logo from '../assets/v-films-logo.png';
import footerVector2 from '../assets/Footer Vector2.png';
import footerVector3 from '../assets/Footer Vector3.png';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  
  const [errors, setErrors] = useState({});
  const [submitStatus, setSubmitStatus] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const sectionRef = useRef(null);

  // Email validation regex
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Phone validation - at least 10 digits
  const validatePhone = (phone) => {
    const phoneDigits = phone.replace(/\D/g, ''); // Remove non-digit characters
    return phoneDigits.length >= 10;
  };

  // Reset form when user scrolls away from Contact page
  useEffect(() => {
    const currentSection = sectionRef.current;
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            // User scrolled away from Contact page - reset everything
            setFormData({
              name: '',
              email: '',
              phone: '',
              message: ''
            });
            setErrors({});
            setSubmitStatus('');
            setIsLoading(false);
          }
        });
      },
      {
        threshold: 0.1 // Trigger when less than 10% of the page is visible
      }
    );

    if (currentSection) {
      observer.observe(currentSection);
    }

    return () => {
      if (currentSection) {
        observer.unobserve(currentSection);
      }
    };
  }, []);

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
    // Clear submit status when user starts typing
    if (submitStatus) {
      setSubmitStatus('');
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!validateEmail(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone is required';
    } else if (!validatePhone(formData.phone)) {
      newErrors.phone = 'Phone number must be at least 10 digits';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      const response = await fetch('https://vernanbackend.ezlab.in/api/contact-us/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message
        })
      });

      setIsLoading(false);

      if (response.ok) {
        setSubmitStatus('success');
        // Clear form
        setFormData({
          name: '',
          email: '',
          phone: '',
          message: ''
        });
        setErrors({});
        
        // Hide alert after 3 seconds
        setTimeout(() => {
          setSubmitStatus('');
        }, 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => {
          setSubmitStatus('');
        }, 3000);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setIsLoading(false);
      setSubmitStatus('error');
      setTimeout(() => {
        setSubmitStatus('');
      }, 3000);
    }
  };

  return (
    <div className="section contact-section" ref={sectionRef}>
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
          <form className="contact-form" onSubmit={handleSubmit}>
            <input 
              type="text" 
              name="name"
              placeholder="Your name*" 
              className={`form-input ${errors.name ? 'error' : ''}`}
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
            
            <input 
              type="email" 
              name="email"
              placeholder="Your email*" 
              className={`form-input ${errors.email ? 'error' : ''}`}
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
            
            <input 
              type="tel" 
              name="phone"
              placeholder="Phone*" 
              className={`form-input ${errors.phone ? 'error' : ''}`}
              value={formData.phone}
              onChange={handleChange}
            />
            {errors.phone && <span className="error-message">{errors.phone}</span>}
            
            <textarea 
              name="message"
              placeholder="Your message*" 
              className={`form-textarea ${errors.message ? 'error' : ''}`}
              rows="5"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <span className="error-message">{errors.message}</span>}
          </form>
          
          {/* Alert Message at Top Center */}
          {submitStatus === 'success' && (
            <div className="alert-message success-alert">
              Form Submitted Successfully!
            </div>
          )}
          {submitStatus === 'error' && (
            <div className="alert-message error-alert">
              Submission failed. Please try again.
            </div>
          )}
          
          {/* Submit Button with Loading */}
          <div className="submit-button-container">
            <button type="submit" className="submit-button" onClick={handleSubmit} disabled={isLoading}>
              Submit
            </button>
            {isLoading && <div className="loading-spinner"></div>}
          </div>
          {/* Email */}
          <p className="contact-email">vernita@varnanfilms.co.in</p>
          {/* Vertical Divider */}
          <div className="contact-divider"></div>
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

