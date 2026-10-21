import { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from '../components/ProjectCard';
import projectsData from '../data/personalProjects.json'; // Import des données de projets
import ProjectModal from '../components/ProjectModal'
import { useNavigate } from 'react-router-dom';
import { Wrap, PageSection, PageTitle, ProjectsGrid, BackButton } from '../components/ui';
import Reveal from '../components/Reveal';

const SectionMessage = styled.p`
  margin: 0;
  padding: 28px;
  border: 1px dashed var(--border-strong);
  border-radius: var(--radius-lg);
  background: var(--surface);
  font-size: 1.15rem;
  color: var(--muted);
`;

const PersonalProjects = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  // Fonction pour ouvrir le modal avec les détails du projet
  const handleOpenProjectModal = (id) => {
    setSelectedProjectId(id);
  };

  let navigate = useNavigate();
  const returnProjectsPage = () => {
    navigate('/projects/');
  }

  if (projectsData.length == 0)
    return (
      <PageSection>
        <Wrap>
          <BackButton type="button" onClick={returnProjectsPage}>Retour</BackButton>
          <PageTitle>Mes projets personnels</PageTitle>
          <SectionMessage>Insertion de projets personnels en cours...</SectionMessage>
        </Wrap>
      </PageSection>
    );

  return (
    <PageSection>
      <Wrap>
        <BackButton type="button" onClick={returnProjectsPage}>Retour</BackButton>
        <PageTitle>Mes projets personnels</PageTitle>
        <ProjectsGrid>
          {projectsData.map((project, i) => (
            <Reveal key={project.id} delay={(i % 3) * 0.08} style={{ height: '100%' }}>
              <ProjectCard project={project} onOpenModal={() => handleOpenProjectModal(project.id)} />
            </Reveal>
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
      </Wrap>
    </PageSection>
  );
};

export default PersonalProjects;
