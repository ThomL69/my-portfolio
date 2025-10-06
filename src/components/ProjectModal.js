import React, { useState } from 'react';
import styled from 'styled-components';
import projectsData from '../data/universityProjects.json'; // Assurez-vous que ce fichier existe et contient les données de vos projets

// Composants utilitaires pour l'affichage des médias
const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 16px;
`;

const Gif = styled.img`
  width: 100%;
  max-height: 300px; /* Limite la hauteur pour les gifs */
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 16px;
`;

// Styles globaux pour le modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContainer = styled.div`
  background-color: white;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 800px;
  position: relative;

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
`;

// Composant pour afficher les détails du projet dans le modal
const ProjectModal = ({ isOpen, onClose, project  }) => {

  if (!project) return null;

  return (
    <ModalOverlay>
      <ModalContainer>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <ProjectContent>
          {project.coverImage && <Image src={project.coverImage} alt={project.title} />}
          {project.gif && <Gif src={project.gif} alt="GIF de démonstration" />}

          <ProjectTitleModal>{project.title}</ProjectTitleModal>
          <ProjectDescriptionModal dangerouslySetInnerHTML={{ __html: project.description }} />

          {/* Ajoutez d'autres champs si nécessaire */}
        </ProjectContent>
      </ModalContainer>
    </ModalOverlay>
  );
};

export default ProjectModal;