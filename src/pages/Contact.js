import React from 'react';
import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react' // Vous devrez installer cette librairie

const ContactContainer = styled.div`
  padding: 80px 20px 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #3a86ff;
`;

const ContactFormContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

const InputGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Label = styled.label`
  font-weight: bold;
`;

const TextInput = styled.input`
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  flex: 1;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #bbb;
    box-shadow: 0 0 0 2px rgba(187, 214, 255, 0.3);
  }
`;

const TextArea = styled.textarea`
  padding: 12px 15px;
  border-radius: 6px;
  border: 1px solid #ddd;
  resize: none;
  flex: 1;
  transition: all 0.3s ease;

  &:focus {
    outline: none;
    border-color: #bbb;
    box-shadow: 0 0 0 2px rgba(187, 214, 255, 0.3);
  }
`;

const Button = styled.button`
  background: #3a86ff;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: #246ed2;
  }
`;

const Contact = () => {
  const [state, handleSubmit] = useForm({
    name: '',
    email: '',
    message: ''
  });

  return (
    <ContactContainer>
      <SectionTitle>Contactez-moi</SectionTitle>
      <ContactFormContainer>
        <Form onSubmit={handleSubmit}>
          {/* Noms des champs à remplacer par vos propres labels */}
          <InputGroup>
            <Label htmlFor="name">Nom:</Label>
            <TextInput type="text" id="name" name="name" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="email">Email:</Label>
            <TextInput type="email" id="email" name="email" required />
          </InputGroup>
          <InputGroup>
            <Label htmlFor="message">Message:</Label>
            <TextArea id="message" name="message" rows="5" required />
          </InputGroup>
          <Button type="submit">Envoyer message</Button>
        </Form>
      </ContactFormContainer>
    </ContactContainer>
  );
};

export default Contact;
