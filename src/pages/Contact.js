import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';

// Identifiant du formulaire Formspree, défini dans .env (voir .env.example)
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

const ContactContainer = styled.div`
  padding: 20px 20px 50px;
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
  text-align: center;
  margin: auto;

  &:hover {
    background: #246ed2;
  }
`;

const Message = styled.p`
  text-align: center;
  margin: 0;
`;

const ContactForm = () => {
  const [state, handleSubmit] = useForm(FORMSPREE_ID);

  if (state.succeeded) {
    return <Message role="status">Merci ! Votre message a bien été envoyé.</Message>;
  }

  return (
    <Form onSubmit={handleSubmit}>
      <InputGroup>
        <Label htmlFor="name">Nom:</Label>
        <TextInput type="text" id="name" name="name" autoComplete="name" required />
        <ValidationError prefix="Nom" field="name" errors={state.errors} />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="email">Email:</Label>
        <TextInput type="email" id="email" name="email" autoComplete="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
      </InputGroup>
      <InputGroup>
        <Label htmlFor="message">Message:</Label>
        <TextArea id="message" name="message" rows="5" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
      </InputGroup>
      <Button type="submit" disabled={state.submitting}>Envoyer</Button>
      {state.errors && state.errors.getFormErrors().length > 0 && (
        <Message role="alert">
          L'envoi a échoué. Veuillez réessayer plus tard.
        </Message>
      )}
    </Form>
  );
};

const Contact = () => (
  <ContactContainer>
    <SectionTitle>Contactez-moi</SectionTitle>
    <ContactFormContainer>
      {FORMSPREE_ID ? (
        <ContactForm />
      ) : (
        <Message role="alert">
          Le formulaire de contact n'est pas encore configuré. Merci de me contacter via LinkedIn ou GitHub (liens en bas de page).
        </Message>
      )}
    </ContactFormContainer>
  </ContactContainer>
);

export default Contact;
