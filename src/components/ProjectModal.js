import { useEffect } from 'react';
import styled from 'styled-components';
import { motion } from 'motion/react';
import '../styles/Overlay.css';

// Composants utilitaires pour l'affichage des médias
const Image = styled.img`
  display: block;
  width: 75%;
  height: auto;
  border-radius: 8px;
  margin: 0 auto 16px;
  object-fit: cover;
`;

const Video = styled.video`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
  position: relative;
`;

// Styles globaux pour le modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  min-height: 50%;
  height: 100%;
  background-color: rgba(3, 6, 12, 0.75);
  backdrop-filter: blur(6px);
  -webkit-backdrop-filter: blur(6px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto;
`;

const ModalContainer = styled(motion.div)`
  position: relative;
  width: min(860px, 92%);
  max-height: 100%;
  overflow: auto;
  border: 1px solid var(--border-strong);
  border-radius: var(--radius-lg);
  background-color: var(--surface-solid);
  color: var(--text);
  box-shadow: 0 30px 80px rgba(0, 0, 0, 0.6);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  border-radius: 50%;
  background-color: var(--chip);
  font-size: 28px;
  line-height: 1;
  cursor: pointer;
  color: var(--text);
  transition: background 0.2s, color 0.2s;

  &:hover {
    background-color: var(--accent);
    color: var(--on-accent);
  }
`;

const ProjectContent = styled.div`
  padding: 28px 24px 24px;

  a {
    display: inline-block;
    margin-right: 16px;
    color: var(--accent);
    font-weight: 600;
  }
  a:hover {
    color: var(--accent-hover);
  }
`;

const ProjectTitleModal = styled.h3`
  margin: 0 48px 16px 0;
  font-size: clamp(1.5rem, 3vw, 2rem);
  letter-spacing: -0.02em;
  color: var(--text);
`;

const ProjectDescriptionModal = styled.p`
  margin: 0 2.5% 24px;
  font-size: 1rem;
  line-height: 1.6;
  text-align: justify;
  color: var(--muted);

  strong {
    color: var(--text);
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
  }

  code {
    padding: 1px 6px;
    border-radius: 6px;
    background: var(--chip);
    color: var(--accent);
  }

  a {
    color: var(--accent);
  }

  th,
  td {
    padding: 6px 10px;
    text-align: center;
  }
`;

const transition = {
  duration: 0.5,
  delay: 0.05,
  ease: [0, 0.61, 0.2, 1.01],
}

// Composant pour afficher les détails du projet dans le modal
const ProjectModal = ({ isOpen, onClose, project }) => {
  // Fermeture du modal avec la touche Échap
  useEffect(() => {
    const onKeyDown = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', onKeyDown);
    return () => document.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <ModalOverlay>
      <ModalContainer
        role="dialog"
        aria-modal="true"
        aria-label={project.title}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={transition}
      >
        <CloseButton type="button" aria-label="Fermer" onClick={onClose}>&times;</CloseButton>
        <ProjectContent>
          <ProjectTitleModal>{project.title}</ProjectTitleModal>

          {project.image && <Image src={project.image} alt={project.title} />}

          {project.videos && project.videos.map((video, i) => (
            <Video key={i} controls>
              <source src={video} type='video/mp4' />
            </Video>
          ))}

          <ProjectDescriptionModal dangerouslySetInnerHTML={{ __html: project.description_modal }} />

          {project.images && project.images.map((image, i) => (
            <Image key={i} src={image} alt={project.title} loading="lazy" />
          ))}

          {project.codeLink && <a href={project.codeLink}>Lien du code projet</a>}
          {project.link && <a href={project.link}>Lien du projet</a>}
        </ProjectContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectModal;
