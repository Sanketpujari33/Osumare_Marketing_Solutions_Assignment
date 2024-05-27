import React from 'react';
import styled from 'styled-components';

const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 4rem 1rem;
  background: linear-gradient(to right, #e0f7fa, #ffebee);
  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

const Content = styled.div`
  max-width: 800px;
  width: 100%;
  background: #fff;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: #333;
  margin-bottom: 0.5rem;
  @media (max-width: 768px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.25rem;
  color: #555;
  margin-bottom: 2rem;
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

const FormGroup = styled.div`
  flex: 1 1 calc(50% - 1rem);
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    flex: 1 1 100%;
  }
`;

const Label = styled.label`
  font-size: 0.875rem;
  color: #666;
  margin-bottom: 0.5rem;
  text-align: left;
`;

const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Textarea = styled.textarea`
  padding: 0.75rem;
  font-size: 1rem;
  border: 1px solid #ddd;
  border-radius: 4px;
  resize: none;
  height: 120px;
  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  cursor: pointer;
  font-size: 1rem;
  width: 300px;
  margin-top: 1rem;
  &:hover {
    background-color: #0056b3;
  }
  @media (max-width: 768px) {
    width: 100%;
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
  }
`;
const ContactSection = () => {
  return (
    <Section>
      <Content>
        <Title>Connect with Our Digital Marketing Experts</Title>
        <Subtitle>
          Reach Out for Tailored Strategies and Results-Driven Solutions.
          <br />
          Let's Elevate Your Online Presence Together
        </Subtitle>
        <Form>
          <FormGroup>
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Enter your name" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="phone">Phone</Label>
            <Input type="text" id="phone" placeholder="Enter your number" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Enter your email" />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="message">Message</Label>
            <Textarea id="message" placeholder="Enter your message"></Textarea>
          </FormGroup>
          <Button>Get started</Button>
        </Form>
      </Content>
    </Section>
  );
};
export default ContactSection;
