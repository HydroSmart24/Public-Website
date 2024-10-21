import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const ContactUsSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(''); // State for success message

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    else if (!validateEmail(email)) newErrors.email = 'Invalid email format';
    if (!message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      // Sending email using EmailJS
      emailjs
        .send('service_x1zhnpe', 'template_gafjofd', {
          name,
          email,
          message,
        }, 'YQ2FTTWe44qGkS655')
        .then((response) => {
          console.log('Email sent successfully:', response.status, response.text);
          setSuccessMessage('Email sent successfully!'); // Set success message
          alert('Email sent successfully!'); // Browser alert
          // Reset form
          setFormData({
            name: '',
            email: '',
            message: '',
          });
          setErrors({});
        })
        .catch((error) => {
          console.error('Failed to send email:', error);
        });
    }
  };

  return (
    <section className="py-16 px-4 md:px-10 lg:px-20 mx-auto bg-white text-gray-700 z-50">
      <h2 className="font-poppins text-lg font-medium text-customBlue text-left">Contact Us</h2>
      <hr className="w-36 h-0.5 bg-customBlue my-2 border-none" />
      <h3 className="font-poppins text-4xl font-medium mb-16 text-left">Get In Touch With Us</h3>

      {/* Success Message */}
      {successMessage && <p className="text-green-500 mb-4">{successMessage}</p>}

      {/* Form Container */}
      <div className="bg-[#F1F8FB] p-8 rounded-md shadow-md max-w-2xl mx-auto lg:ml-0">
        <form onSubmit={handleSubmit} className="flex flex-col space-y-7">
          {/* Name Input */}
          <div className="flex flex-col">
            <label htmlFor="name" className="text-customBlue mb-1 text-left">Your Name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
              className="border border-gray-300 bg-white p-3 rounded-md"
              required
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}
          </div>

          {/* Email Input */}
          <div className="flex flex-col">
            <label htmlFor="email" className="text-customBlue mb-1 text-left">Your Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              className="border border-gray-300 bg-white p-3 rounded-md"
              required
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
          </div>

          {/* Message Input */}
          <div className="flex flex-col">
            <label htmlFor="message" className="text-customBlue mb-1 text-left">Your Message</label>
            <textarea
              name="message"
              id="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 bg-white p-3 rounded-md h-32"
              required
            />
            {errors.message && <p className="text-red-500">{errors.message}</p>}
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#1089B8] text-white py-3 rounded-md hover:bg-[#166d92] transition-all"
          >
            Send
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactUsSection;
