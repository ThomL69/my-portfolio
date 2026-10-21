import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
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

const Subtitle = styled(motion.h2)`
  max-width: 640px;
  min-height: 3.2em;
  margin: 0 0 36px;
  font-size: clamp(1.1rem, 2.2vw, 1.45rem);
  font-weight: 400;
  line-height: 1.5;
  color: var(--muted);

  .rotating {
    color: var(--text);
    font-weight: 700;
  }

  @media (max-width: 640px) {
    min-height: 4.6em;
  }
`;

const ROTATING_WORDS = [' Unity', ' Unreal Engine'];

const Cursor = styled.span`
  border-right: 0.08em solid var(--accent);
`;

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// Effet machine à écrire (remplace l'ancien script public/js/anim.js)
const RotatingText = ({ words, period = 2000 }) => {
  const reduced = prefersReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (reduced) return undefined;
    const full = words[wordIndex % words.length];
    let delay = (300 - Math.random() * 400) / (isDeleting ? 2 : 1);
    let next;

    if (!isDeleting && text === full) {
      delay = period;
      next = () => setIsDeleting(true);
    } else if (isDeleting && text === '') {
      delay = 500;
      next = () => { setIsDeleting(false); setWordIndex(i => i + 1); };
    } else {
      next = () => setText(isDeleting ? full.substring(0, text.length - 1) : full.substring(0, text.length + 1));
    }

    const id = setTimeout(next, Math.max(delay, 50));
    return () => clearTimeout(id);
  }, [text, isDeleting, wordIndex, words, period, reduced]);

  // Préférence "moins d'animations" : texte fixe, sans effet de frappe
  if (reduced) return <Cursor style={{ borderRight: 0 }}>{words[0]}</Cursor>;
  return <Cursor>{text}</Cursor>;
};

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
        <Eyebrow variants={rise}>Portfolio · Analyste-développeur</Eyebrow>
        <MyTitle variants={rise}>Thomas <em>Lieghio</em></MyTitle>
        <Subtitle variants={rise}>
          Analyste-développeur Cobol et C#. Sur mon temps libre, je participe à des game jams
          et je développe des projets sur
          <span className="rotating">
            <RotatingText words={ROTATING_WORDS} period={2000} />
          </span>
        </Subtitle>

        <ButtonGroup variants={rise}>
          <ButtonLink to="/projects">Découvrez mes projets</ButtonLink>
          <ButtonLink to="/contact" $ghost>Contactez-moi</ButtonLink>
        </ButtonGroup>

        <Chips variants={rise} aria-label="Technologies">
          <li>Cobol</li>
          <li>C#</li>
          <li>C / C++</li>
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
