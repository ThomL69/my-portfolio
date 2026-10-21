import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Wrap, ButtonLink } from '../components/ui';

const Hero = styled(motion.section)`
  padding: clamp(56px, 12vw, 140px) 0 clamp(48px, 8vw, 100px);
`;

const Eyebrow = styled(motion.p)`
  margin: 0 0 16px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--accent);
`;

const MyTitle = styled(motion.h1)`
  margin: 0 0 24px;
  font-size: clamp(2.8rem, 8vw, 6rem);
  line-height: 1;
  letter-spacing: -0.04em;
  background: linear-gradient(120deg, #fff 30%, var(--accent-hover));
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;

  em {
    font-style: normal;
    color: var(--accent);
    -webkit-text-fill-color: var(--accent);
  }
`;

// Le texte rotatif est animé par public/js/anim.js (classe .txt-rotate)
const Subtitle = styled(motion.h2)`
  max-width: 640px;
  min-height: 3.2em;
  margin: 0 0 36px;
  font-size: clamp(1.1rem, 2.2vw, 1.45rem);
  font-weight: 400;
  line-height: 1.5;
  color: var(--muted);

  .txt-rotate {
    color: var(--text);
    font-weight: 700;
  }

  @media (max-width: 640px) {
    min-height: 4.6em;
  }
`;

const ButtonGroup = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 14px;

  @media (max-width: 640px) {
    flex-direction: column;
  }
`;

const Chips = styled(motion.ul)`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 48px 0 0;
  padding: 0;
  list-style: none;

  li {
    padding: 6px 14px;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: var(--chip);
    color: var(--muted);
    font-size: 0.85rem;
    font-weight: 600;
  }
`;

const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.12
    }
  }
};

const rise = {
  hidden: {
    opacity: 0,
    y: 24
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.2, 0.8, 0.2, 1],
    }
  }
};

const Home = () => {
  return (
    <Hero
      variants={container}
      initial="hidden"
      animate="visible"
    >
      <Wrap>
        <Eyebrow variants={rise}>Portfolio · Développeur junior</Eyebrow>
        <MyTitle variants={rise}>Thomas <em>Lieghio</em></MyTitle>
        <Subtitle variants={rise}>
          Développeur junior en recherche actuelle d'un poste de
          <span className="txt-rotate" data-period="2000" data-rotate="[ &quot; Développeur web&quot;, &quot; Développeur logiciel&quot;, &quot; Développeur Fullstack&quot;, &quot; Développeur Gameplay&quot;]">
            <span className="wrap"></span>
          </span>
        </Subtitle>

        <ButtonGroup variants={rise}>
          <ButtonLink to="/projects">Découvrez mes projets</ButtonLink>
          <ButtonLink to="/contact" $ghost>Contactez-moi</ButtonLink>
        </ButtonGroup>

        <Chips variants={rise} aria-label="Technologies">
          <li>C / C++</li>
          <li>C#</li>
          <li>Unity</li>
          <li>Unreal Engine</li>
          <li>Python</li>
          <li>SQL</li>
        </Chips>
      </Wrap>
    </Hero>
  );
};

export default Home;
