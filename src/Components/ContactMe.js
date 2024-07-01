import React, { useState } from 'react';
import './ContactMe.css';
import '../index.css';
import { GlobeDemo } from '../Components/'; // Adjust the import path based on your file structure

const ContactMe = () => {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitting form with:', { email, subject, message });
    alert('Thank you for your message!');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div className='flex flex-row'>
      {/* Globe on the left */}
      <div className='w-full md:w-1/2'>
        <GlobeDemo />
      </div>

      {/* Contact form on the right */}
      <div className='AboutPage w-full md:w-1/2'>
        <div className='contact-form-container'>
          <h1 className='contact-header'>Get in Touch</h1>
          <form onSubmit={handleSubmit} className='contact-form'>
            <div className='form-group'>
              <label htmlFor='email' className='form-label'>Email Address</label>
              <input
                type='email'
                id='email'
                className='form-control'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='subject' className='form-label'>Subject</label>
              <input
                type='text'
                id='subject'
                className='form-control'
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                required
              />
            </div>

            <div className='form-group'>
              <label htmlFor='message' className='form-label'>Message</label>
              <textarea
                id='message'
                className='form-control'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              />
            </div>

            <button type='submit' className='send-button'>Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactMe;
