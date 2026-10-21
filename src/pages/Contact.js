import styled from 'styled-components';
import { useForm, ValidationError } from '@formspree/react';
import { Wrap, PageSection, PageTitle, ButtonEl } from '../components/ui';
import Reveal from '../components/Reveal';

// Identifiant du formulaire Formspree, défini dans .env (voir .env.example)
const FORMSPREE_ID = process.env.REACT_APP_FORMSPREE_ID;

const ContactFormContainer = styled.div`
  max-width: 640px;
  padding: clamp(22px, 4vw, 36px);
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const Form = styled.form`
  display: grid;
  gap: 18px;
`;

const InputGroup = styled.div`
  display: grid;
  gap: 6px;
`;

const Label = styled.label`
  font-size: 0.95rem;
  font-weight: 600;
`;

const fieldStyles = `
  width: 100%;
  padding: 13px 15px;
  border: 1.5px solid var(--border-strong);
  border-radius: calc(var(--radius) - 2px);
  background: var(--input-bg);
  color: var(--text);
  font: inherit;
  transition: border-color 0.2s, box-shadow 0.2s;

  &::placeholder {
    color: var(--muted);
  }

  &:focus {
    outline: none;
    border-color: var(--accent);
    box-shadow: 0 0 0 4px var(--glow);
  }
`;

const TextInput = styled.input`
  ${fieldStyles}
`;

const TextArea = styled.textarea`
  ${fieldStyles}
  resize: vertical;
`;

const SubmitButton = styled(ButtonEl)`
  justify-self: start;

  @media (max-width: 640px) {
    justify-self: stretch;
  }
`;

const Message = styled.p`
  margin: 0;
  color: var(--text);
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
      <SubmitButton type="submit" disabled={state.submitting}>Envoyer</SubmitButton>
      {state.errors && state.errors.getFormErrors().length > 0 && (
        <Message role="alert">L'envoi a échoué. Veuillez réessayer plus tard.</Message>
      )}
    </Form>
  );
};

const Contact = () => (
  <PageSection>
    <Wrap>
      <PageTitle>Contactez-moi</PageTitle>
      <Reveal>
        <ContactFormContainer>
          {FORMSPREE_ID ? (
            <ContactForm />
          ) : (
            <Message role="alert">
              Le formulaire de contact n'est pas encore configuré. Merci de me contacter via LinkedIn ou GitHub (liens en bas de page).
            </Message>
          )}
        </ContactFormContainer>
      </Reveal>
    </Wrap>
  </PageSection>
);

export default Contact;
