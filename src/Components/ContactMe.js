import React, { useState } from 'react';
import './ContactMe.css';
import '../index.css';
import { FiMail, FiSend, FiMessageSquare, FiUser } from 'react-icons/fi';

const ContactMe = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    
    try {
      // FormSubmit will handle the actual submission
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error) {
      console.error('Submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='AboutPage'>
        <div className='AboutText'>
          <h1 className='AboutTextHeading'>Get in <b>touch</b>!</h1>
          <p>
            Interested in working together or have questions about my work? 
            Feel free to reach out using the form or through my other contact channels.
            I'm always open to discussing new projects, creative ideas, or opportunities
            to be part of your vision.
          </p>

          <form 
            onSubmit={handleSubmit} 
            className='contact-form'
            action="https://formsubmit.co/pritompaul98official@gmail.com" 
            method="POST"
          >
            {/* Add this hidden input to prevent spam */}
            <input type="text" name="_honey" style={{display: 'none'}} />
            
            {/* Add redirect after submission (optional)
            <input type="hidden" name="_next" value="https://yourwebsite.com/thank-you" /> */}
            
            {submitSuccess && (
              <div className="success-message">
                <p>Thank you for your message! I'll get back to you soon.</p>
              </div>
            )}

            <div className="form-group">
              <label htmlFor="name" className="form-label">
                <FiUser className="input-icon" /> Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                <FiMail className="input-icon" /> Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject" className="form-label">
                <FiMessageSquare className="input-icon" /> Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                className="form-control"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="Regarding a potential project"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="form-label">Your Message</label>
              <textarea
                id="message"
                name="message"
                className="form-control"
                rows="6"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Hello, I'd like to discuss..."
              />
            </div>

            <button 
              type="submit" 
              className="send-button"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : (
                <>
                  <FiSend className="button-icon" /> Send Message
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactMe;