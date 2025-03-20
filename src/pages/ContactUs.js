import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { pageAnimation, titleAnim } from '../animation';
import styled from 'styled-components';
import { FaInstagram, FaYoutube, FaLinkedin } from 'react-icons/fa'; // Importing social media icons

const ContactUs = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  // State for validation errors
  const [errors, setErrors] = useState({});

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Validate form fields
  const validate = () => {
    let errors = {};

    if (!formData.name.trim()) {
      errors.name = 'Name is required';
    }

    if (!formData.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = 'Invalid email format';
    }

    if (!formData.phone) {
      errors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits';
    }

    if (!formData.message.trim()) {
      errors.message = 'Message cannot be empty';
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      console.log('Form Submitted', formData);
      alert('Thank you! Your message has been sent.');
      setFormData({ name: '', email: '', phone: '', message: '' }); // Reset form after submission
    }
  };

  return (
    <ContactStyle
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      style={{ background: '#fff' }}
    >
      <Title>
        <Hide>
          <motion.h2 variants={titleAnim}>Get in touch.</motion.h2>
        </Hide>
      </Title>

      <Form onSubmit={handleSubmit}>
        <InputWrapper>
          <Label>Name</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
          {errors.name && <Error>{errors.name}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
          {errors.email && <Error>{errors.email}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Label>Phone Number</Label>
          <Input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your phone number"
          />
          {errors.phone && <Error>{errors.phone}</Error>}
        </InputWrapper>

        <InputWrapper>
          <Label>Message</Label>
          <TextArea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter your message"
          />
          {errors.message && <Error>{errors.message}</Error>}
        </InputWrapper>

        <SubmitButton type="submit">Submit</SubmitButton>
      </Form>

      {/* Social Media Icons Section */}
      <SocialMedia>
        <p>Follow us on</p>
        <Icons>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram size={40} color="#E4405F" />
          </a>
          <a
            href="https://www.youtube.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaYoutube size={40} color="#FF0000" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={40} color="#0077B5" />
          </a>
        </Icons>
      </SocialMedia>
    </ContactStyle>
  );
};

// Styled Components
const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;

const Hide = styled.div`
  overflow: hidden;
`;

const Form = styled.form`
  max-width: 800px;
  margin: 0 auto;
  background: #1b1b1b;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
`;

const InputWrapper = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  font-weight: bold;
  display: block;
  color: #ffffff;
  margin-bottom: 0.5rem;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.8rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1rem;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 100px;
  padding: 0.8rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1rem;
  resize: none;
`;

const SubmitButton = styled.button`
  width: 100%;
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  border: 3px solid #23d997;
  border-radius: 5px;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;

const Error = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-top: 0.2rem;
`;

// Social Media Section
const SocialMedia = styled.div`
  margin-top: 2rem;
  text-align: center;

  p {
    font-size: 1.5;
    margin-bottom: 0.1rem;
    color: black;
  }
`;

const Icons = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;

  a {
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ContactUs;
