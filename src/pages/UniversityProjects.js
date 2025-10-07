import { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/universityProjects.json'; // Import des données de projets
import ProjectModal from '../components/ProjectModal'

const ProjectsContainer = styled.div`
  padding: 80px 20px 50px;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 30px;
  color: #3a86ff;
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
`;

const UniversityProjects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Fonction pour ouvrir le modal avec les détails du projet
  const handleOpenProjectModal = (id) => {
    setSelectedProjectId(id);
  };

  return (
    <ProjectsContainer>
      <SectionTitle>Mes projets universitaires</SectionTitle>
      <ProjectsGrid>
        {projectsData.map(project => (
          <ProjectCard key={project.id} project={project} onOpenModal={() => handleOpenProjectModal(project.id)} />
        ))}
      </ProjectsGrid>
      {/* Modal pour afficher les détails du projet */}
      {selectedProjectId && (
        <ProjectModal
          isOpen={true}
          onClose={() => setSelectedProjectId(null)}
          project={projectsData.find(p => p.id === selectedProjectId)} // Recherche du projet par ID
        />
      )}
    </ProjectsContainer>
  );
};

export default UniversityProjects;
