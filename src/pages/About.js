import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json'; // Import des données de skills

const AboutContainer = styled(motion.div)`
  text-align: center;
  padding: 20px 20px 50px;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.5rem;
  margin-bottom: 20px;
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

const Description = styled(motion.p)`
  text-align: justify;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #555;
  margin-left: 5%;
  margin-right: 5%;
`;

const SkillsContainer = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

const progressBarAnimation = keyframes`
  0%{width : 0}
`;

const SkillItem = styled.div`
  animation-name: ${progressBarAnimation};
  animation-duration: 1s;
  animation-timing-function: ease-in-out;
`;

const CVContainer = styled.div`
  text-align: center;
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
      delayChildren: 0.1,
      staggerChildren: 0.3
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
      <AboutContent>
        <SectionTitle>À propos de moi</SectionTitle>
        <Description>
          Je m'appelle Thomas, un jeune développeur de 25 ans passionné par le développement, curieux et motivé, toujours prêt à apprendre de nouvelles technologies et à relever des défis techniques. <br /> Mon cursus universitaire m'a permis d'apprendre les bases de la programmation avec les langages C, C++, C# et Java, ainsi que les technologies web de base, telles que HTML, CSS, Javascript et PHP. De plus, j'ai égalemment appris à gérer des bases de données SQL et à appliquer des méthodes agiles dans des contextes de projets à plusieurs. <br />
        </Description>
        <BlockLine />
        <Description>
          Je suis à la recherche d'une première expérience en tant que développeur web et/ou logiciel pour mettre en pratique mes compétences dans des projets réels et stimulants pour me permettre d'évoluer professionnellement.
        </Description>

        <BlockLine />

        <div className="container-fluid mx-auto my-3">
          <SectionTitle>Mes compétences clés</SectionTitle>
          <SkillsContainer>
            {skillsData.map(skill => (
              <section key={skill.id} className="col-12 col-lg-6 d-flex flex-column flex-md-row align-items-center mb-3">
                <div className="card-body d-flex flex-column col">
                  <h4 className="card-title text-center mt-2">{skill.title}</h4>
                  <div className="progress shadow-sm" >
                    <SkillItem className="progress-bar" role="progressbar" style={{ width: skill.width }}
                      aria-valuenow={{ width: skill.width }} aria-valuemin="0" aria-valuemax="100"
                      aria-label="progressbar for HTML and CSS">{skill.percentage}</SkillItem>
                  </div>
                </div>
              </section>
            ))}
          </SkillsContainer>
        </div>

        <BlockLine />

        <CVContainer>
            <p>
              Cliquez sur l'icône ci-dessous pour télécharger mon CV dans un format PDF
            </p>
            <a href='docs/cv.pdf' id="link-pdf" title='Téléchargez mon CV' download="cv_thomas_lieghio_dev_junior" aria-label='Téléchargez CV en PDF'>
              <img id="skill-pdf" src="imgs/icons/pdf-icon.png" width="80" className='mb-3' alt="Icon file PDF download" />
            </a>
        </CVContainer>

        <Link to="/contact" className="primary-button">Contactez-moi</Link>
      </AboutContent>
    </AboutContainer>
  );
};

export default About;
