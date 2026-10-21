import styled from 'styled-components';
import { useForm } from '@formspree/react' // Vous devrez installer cette librairie
import { Wrap, PageSection, PageTitle, ButtonEl } from '../components/ui';
import Reveal from '../components/Reveal';

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

const Contact = () => {
  const [state, handleSubmit] = useForm({
    name: '',
    firstname: '',
    company: '',
    email: '',
    message: ''
  });

  return (
    <PageSection>
      <Wrap>
        <PageTitle>Contactez-moi</PageTitle>
        <Reveal>
          <ContactFormContainer>
            <Form onSubmit={handleSubmit}>
              <InputGroup>
                <Label htmlFor="name">Nom:</Label>
                <TextInput type="text" id="name" name="name" autoComplete="name" required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="email">Email:</Label>
                <TextInput type="email" id="email" name="email" autoComplete="email" required />
              </InputGroup>
              <InputGroup>
                <Label htmlFor="message">Message:</Label>
                <TextArea id="message" name="message" rows="5" required />
              </InputGroup>
              <SubmitButton type="submit">Envoyer</SubmitButton>
            </Form>
          </ContactFormContainer>
        </Reveal>
      </Wrap>
    </PageSection>
  );
};

export default Contact;
