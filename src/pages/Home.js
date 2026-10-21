import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

const HomeContainer = styled(motion.div)`
  text-align: center;
  padding: 100px 20px 50px;
`;

const MySection = styled(motion.section)`
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  height: 600px;
`;

const MyContent = styled(motion.div)`
  align-items: center;
  max-width: 500px;
  margin: 50px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const MyTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #3a86ff;
`;

const Subtitle = styled.h2`
  margin-bottom: 40px;
  line-height: 1.6;
  color: #0864f9ff;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const PrimaryButton = styled(Link)`
  background: #3a86ff;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  flex-grow: 4;

  &:hover {
    background: #246ed2;
    color: white;
    text-decoration: none;
  }
`;

const SecondaryButton = styled(Link)`
  background: #eee;
  color: #555;
  padding: 15px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;
  flex-grow: 4;

  &:hover {
    background: #ddd;
    text-decoration: none;
  }
`;

const ROTATING_WORDS = [' Développeur web', ' Développeur logiciel', ' Développeur Fullstack', ' Développeur Gameplay'];

const Cursor = styled.span`
  border-right: 0.08em solid #666;
`;

// Effet machine à écrire (remplace l'ancien script public/js/anim.js)
const RotatingText = ({ words, period = 2000 }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
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
  }, [text, isDeleting, wordIndex, words, period]);

  return <Cursor>{text}</Cursor>;
};

const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2, // this will set a delay before the children start animating
      staggerChildren: 0.5 // this will set the time inbetween children animation
    }
  }
};

const dropUp = {
  hidden: {
    y: "50vw"
  },
  visible: {
    y: 0,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 0.3,
    }
  }
};

const Home = () => {
  return (
    <HomeContainer
      variants={container}
      initial="hidden"
      animate="visible" 
    >
      <MySection variants={dropUp}>
        <MyTitle>Thomas Lieghio</MyTitle>
        <Subtitle className="fs-5 mt-3 interactiveTitle">
          Développeur junior en recherche actuelle d'un poste de
          <span className="fw-bold">
            <RotatingText words={ROTATING_WORDS} period={2000} />
          </span>
        </Subtitle>
        
        <MyContent variants={dropUp}>
          <ButtonGroup>
            <PrimaryButton to="/projects">Découvrez mes projets</PrimaryButton>
            <SecondaryButton to="/contact">Contactez-moi</SecondaryButton>
          </ButtonGroup> 
        </MyContent>
      </MySection>
    </HomeContainer>
  );
};

export default Home;
