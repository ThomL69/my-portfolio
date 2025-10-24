import styled from 'styled-components';
import { motion } from 'framer-motion';
import '../styles/Overlay.css';

// Composants utilitaires pour l'affichage des médias
const Image = styled.img`
  width: 75%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
  object-fit: cover;
  position: relative;
  left: 12.5%;
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
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow: auto;

`;

const ModalContainer = styled(motion.div)`
  background-color: white;
  border-radius: 16px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 800px;
  position: relative;
  overflow: auto;
  max-height: 100%;

  @media (min-width: 768px) {
    width: 50%;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
  color: #3a86ff;
`;

const ProjectContent = styled.div`
  padding: 24px;
`;

const ProjectTitleModal = styled.h3`
  font-size: 2rem;
  margin-bottom: 12px;
  color: #3a86ff;
`;

const ProjectDescriptionModal = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin-bottom: 24px;
  text-align: justify;
  margin-left: 2.5%;
  margin-right: 2.5%;
`;

const transition = {
  duration: 0.5,
  delay: 0.05,
  ease: [0, 0.61, 0.2, 1.01],
}

// Composant pour afficher les détails du projet dans le modal
const ProjectModal = ({ isOpen, onClose, project }) => {

  if (!project) return null;

  return (
    <ModalOverlay>
      <ModalContainer
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={transition}
      >
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ProjectContent>
          <ProjectTitleModal>{project.title}</ProjectTitleModal>

          {project.image && <Image src={project.image} alt={project.title} />}

          {project.videos && project.videos.map(video => (
            <Video controls>
              <source src={video} type='video/mp4' />
            </Video>
          ))}

          <ProjectDescriptionModal dangerouslySetInnerHTML={{ __html: project.description_modal }} />

          {project.images && project.images.map(image => (
            <Image src={image} alt={project.title} />
          ))}

          {project.codeLink && <a href={project.codeLink}>Lien du code projet</a>}
          {project.link && <a href={project.link}>Lien du projet</a>}
        </ProjectContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectModal;