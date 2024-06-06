import React, { useState } from 'react';
import './Contact.css';
import { FaLinkedinIn } from 'react-icons/fa6';

export default function Contact() { // Define state for form data and submission status
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Track form submission status

  const handleChange = (e) => {
    const { name, value } = e.target; // Destructure name and value from the event target
    setFormData((prevData) => ({
      ...prevData, // Spread previous state
      [name]: value, //update field in FormData
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior
    try {
      const response = await fetch('http://localhost:3000/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json', // Specify content type as JSON
        },
        body: JSON.stringify(formData), // Convert formData to JSON string
      });
      if (response.ok) {
        setIsSubmitted(true); // Set submission status to true on successful response
      } else {
        alert('Failed to send message'); // Alert on failed submission
      }
    } catch (error) {
      console.error('Error:', error); // Log any errors
      alert('Failed to send message'); // Alert on error
    }
  };

  return (
    <div className="contact-page"> 
      <div className="contact-container"> {/* Centered container for the form and info */}
        {isSubmitted ? ( // Conditional rendering based on submission status if true- thank you!
          <div className="thank-you-message">Thank you!</div> 
        ) : (
          <form className="contact-form" onSubmit={handleSubmit}> 
            <div className="form-group"> 
              <label htmlFor="email">Email Address *</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Your Email Address..."
              />
            </div>
            <div className="form-group"> 
              <label htmlFor="message">Message *</label> 
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Your Message..."
              ></textarea>
            </div>
            <button type="submit">Submit</button>
          </form>
        )}
        <div className="contact-info"> 
          <p>Contact information:</p>
          <p><span>Phone:</span> +1 646 836 31 33</p>
          <p><span>Email:</span> <a href="mailto:koshkinaekaterina4987@gmail.com">koshkinaekaterina4987@gmail.com</a></p>
          <a href="https://www.linkedin.com/in/kate-koshkina/" target="_blank" rel="linkedin" className="linkedin-link">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </div>
  );
}







