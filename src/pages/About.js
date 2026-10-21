import styled from 'styled-components';
import { motion } from 'framer-motion';
import skillsData from '../data/skills.json'; // Import des données de skills
import { Wrap, PageSection, PageTitle, ButtonLink, ButtonAnchor } from '../components/ui';
import Reveal from '../components/Reveal';

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1.1fr 1fr;
  gap: clamp(32px, 6vw, 72px);
  align-items: start;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Description = styled.p`
  max-width: 62ch;
  margin: 0 0 18px;
  font-size: 1.05rem;
  line-height: 1.65;
  color: var(--muted);
`;

const SkillsCard = styled(motion.div)`
  padding: 28px;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

const SkillsTitle = styled.h3`
  margin: 0 0 20px;
  font-size: 1.15rem;
`;

const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 16px 24px;
  margin: 0;
  padding: 0;
  list-style: none;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

const SkillHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 6px;
  font-size: 0.9rem;
  font-weight: 600;

  b {
    font-weight: 600;
    color: var(--muted);
  }
`;

const Track = styled.div`
  height: 8px;
  border-radius: 8px;
  background: var(--chip);
  overflow: hidden;
`;

// L'animation de remplissage est un scaleX : coupée si prefers-reduced-motion
const Fill = styled(motion.div)`
  height: 100%;
  border-radius: 8px;
  background: var(--bar-gradient);
  transform-origin: left center;
`;

const CVContainer = styled.div`
  margin-top: 28px;

  p {
    margin: 0 0 14px;
    color: var(--muted);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const skillsContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fill = {
  hidden: { scaleX: 0 },
  visible: { scaleX: 1, transition: { duration: 1, ease: [0.2, 0.8, 0.2, 1] } },
};

const About = () => {
  return (
    <PageSection>
      <Wrap>
        <PageTitle>À propos de moi</PageTitle>
        <AboutGrid>
          <Reveal>
            <Description>
              Je m'appelle Thomas, un jeune développeur de 25 ans passionné par le développement, curieux et motivé, toujours prêt à apprendre de nouvelles technologies et à relever des défis techniques.
            </Description>
            <Description>
              Mon cursus universitaire m'a permis d'apprendre les bases de la programmation avec les langages C, C++, C# et Java, ainsi que les technologies web de base, telles que HTML, CSS, Javascript et PHP. De plus, j'ai également appris à gérer des bases de données SQL et à appliquer des méthodes agiles dans des contextes de projets à plusieurs.
            </Description>
            <Description>
              Je suis à la recherche d'une première expérience en tant que développeur web et/ou logiciel pour mettre en pratique mes compétences dans des projets réels et stimulants pour me permettre d'évoluer professionnellement.
            </Description>

            <CVContainer>
              <p>
                Cliquez sur le bouton ci-dessous pour télécharger mon CV dans un format PDF
              </p>
              <Actions>
                <ButtonAnchor
                  $ghost
                  href={`${process.env.PUBLIC_URL}/docs/cv.pdf`}
                  title="Téléchargez mon CV"
                  download="cv_thomas_lieghio_dev_junior"
                  aria-label="Téléchargez CV en PDF"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M12 3v12m0 0l-4-4m4 4l4-4M4 21h16" /></svg>
                  Télécharger mon CV (PDF)
                </ButtonAnchor>
                <ButtonLink to="/contact">Contactez-moi</ButtonLink>
              </Actions>
            </CVContainer>
          </Reveal>

          <SkillsCard
            variants={skillsContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
          >
            <SkillsTitle>Mes compétences clés</SkillsTitle>
            <SkillsList>
              {skillsData.map(skill => (
                <li key={skill.id}>
                  <SkillHeader>
                    <span>{skill.title}</span>
                    <b>{skill.percentage.replace(' ', '')}</b>
                  </SkillHeader>
                  <Track
                    role="progressbar"
                    aria-label={skill.title}
                    aria-valuenow={parseInt(skill.width, 10)}
                    aria-valuemin={0}
                    aria-valuemax={100}
                  >
                    <Fill variants={fill} style={{ width: skill.width }} />
                  </Track>
                </li>
              ))}
            </SkillsList>
          </SkillsCard>
        </AboutGrid>
      </Wrap>
    </PageSection>
  );
};

export default About;
