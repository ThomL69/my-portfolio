import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutContainer = styled(motion.div)`
  text-align: center;
  padding: 20px 20px 50px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #3a86ff;
`;

const AboutContent = styled(motion.div)`
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

const BlockLine = styled.hr`
  width: 50%;
  border: 2px solid #3a86ff;
  border-radius: 5px;
  margin-left: auto;
  margin-right: auto;
`;

const container = {
  hidden: { 
    opacity: 0 
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5
    }
  }
}

const popUp = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 0.3,
    }
  }
}

const About = () => {
  return (
    <AboutContainer 
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <SectionTitle variants={popUp}>À propos de moi</SectionTitle>
      <AboutContent variants={popUp}>
        <Description>
          Je suis Thomas, un jeune développeur de 25 ans passionné par le développement. J'aime résoudre des problèmes complexes et apprendre de nouvelles technologies pour créer des solutions innovantes. <br /> Mon cursus universitaire m'a permis d'apprendre les bases de la programmation avec du C, du C++, C#, du Java ainsi que les technologies web de base, telles que HTML, CSS, Javascript et PHP. De plus, j'ai égalemment appris à gérer des bases de données SQL et à appliquer des méthodes agiles dans des contextes de projets à plusieurs.
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
        <br />
        <br />
        <Link to="/contact" className="primary-button">Contactez-moi</Link>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
