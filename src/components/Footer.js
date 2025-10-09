import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #f8f9fa;
  padding: 30px 20px;
  text-align: center;
  font-size: 0.9rem;
`;

const Copyright = styled.div`
  margin-bottom: 15px;
  color: #6c757d;
`;

const SocialLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`;

const SocialLink = styled.a`
  color: #3a86ff;
  text-decoration: none;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <Copyright>
        © {new Date().getFullYear()} Mon Portfolio - Tous droits réservés
      </Copyright>
      <SocialLinks>
        <SocialLink target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/thomas-lieghio-b308a5170/">LinkedIn</SocialLink>
        <SocialLink target="_blank" rel="noopener noreferrer" href="#">GitHub</SocialLink>
      </SocialLinks>
    </FooterContainer>
  );
};

export default Footer;