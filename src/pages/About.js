import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const AboutContainer = styled.div`
  text-align: center;
  padding: 20px 20px 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #3a86ff;
`;

const AboutContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Avatar = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
  background: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Description = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #555;
  margin-bottom: 30px;
`;

const SkillsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
`;

const SkillItem = styled.div`
  padding: 12px 18px;
  border-radius: 8px;
  background: #f8f9fa;
  box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.05);
  font-size: 0.9rem;
  transition: all 0.3s ease;

  &:hover {
    background: #edf2f7;
    box-shadow: inset 0 0 0 2px rgba(0, 0, 0, 0.1);
  }
`;

const ImageContainer = styled.div`

`;

const BlockLine = styled.hr`
  width: 250px;
  height: 5px;
  background-color: #3a86ff;
`;

const About = () => {
  return (
    <AboutContainer>
      <SectionTitle>À propos de moi</SectionTitle>
      <AboutContent>
        <Description>
          Je suis Thomas, un jeune développeur de 25 ans passionné par le développement. J'aime résoudre des problèmes complexes et apprendre de nouvelles technologies pour créer des solutions innovantes. <br/> Mon cursus universitaire m'a permis d'apprendre les bases de la programmation avec du C, du C++, C#, du Java ainsi que les technologies web de base, telles que HTML, CSS, Javascript et PHP.
        </Description>
        <BlockLine />
        <Description>
          Je suis à la recherche d'une première expérience en tant que développeur web et/ou logiciel pour mettre en pratique mes compétences dans des projets réels et stimulants pour me permettre d'évoluer professionnellement.
        </Description>
        <BlockLine />
        <SectionTitle>Mes compétences clés</SectionTitle>
        <SkillsContainer>
          <SkillItem>C / C++</SkillItem>
          <SkillItem>C#</SkillItem>
          <SkillItem>Python</SkillItem>
          <SkillItem>Visual Studio</SkillItem>
          <SkillItem>Moteurs Jeux Vidéo (Unity et Unreal Engine)</SkillItem>
          <SkillItem>HTML5</SkillItem>
          <SkillItem>CSS3</SkillItem>
          <SkillItem>PHP</SkillItem>
          <SkillItem>React.js</SkillItem>
          <SkillItem>Symfony</SkillItem>
        </SkillsContainer>
        <br/>
        <br/>
        <Link to="/contact" className="primary-button">Contactez-moi</Link>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
