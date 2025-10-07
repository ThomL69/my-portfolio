import styled from 'styled-components';


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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 25px;
`;

const ProjectCardContainer = styled.div`
  position: relative;
  height: 260px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 70%;
  object-fit: cover;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const ProjectOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.8);
  height: 70%;
  width: 100%;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const ProjectTitle = styled.h3`
  font-size: 1.4rem;
  margin-bottom: 8px;
`;

const ProjectDescription = styled.p`
  font-size: 0.9rem;
`;

const Projects = () => { 
  return (
    <ProjectsContainer>
      <SectionTitle>Mes projets</SectionTitle>
      <ProjectsGrid>
        <ProjectCardContainer>
          {/* Load the page without creating a new page */}
          {/* <Link to='/projects/universityProjects'>    
            <ProjectImage src="../logo.svg" alt="test" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Universitaires</ProjectTitle>
                <ProjectDescription></ProjectDescription>
              </div>
            </ProjectOverlay>
          </Link> */}
          <a href="/projects/universityProjects" target="_blank" rel="noopener noreferrer">
            <ProjectImage src="../logo.svg" alt="test" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Universitaires</ProjectTitle>
                <ProjectDescription>Pages contenant les projets que j'ai réalisé durant mes différentes formations</ProjectDescription>
              </div>
            </ProjectOverlay>
          </a>
        </ProjectCardContainer>
        <ProjectCardContainer>
          {/* Load the page without creating a new page */}
          {/* <Link to='/projects/gameJamProjects' target="_blank" rel="noopener noreferrer">
            <ProjectImage src="../logo.svg" alt="test" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Games Jam</ProjectTitle>
                <ProjectDescription></ProjectDescription>
              </div>
            </ProjectOverlay>
          </Link> */}
          <a href="/projects/gameJamProjects" target="_blank" rel="noopener noreferrer">
            <ProjectImage src="../logo.svg" alt="test" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Games Jam</ProjectTitle>
                <ProjectDescription>Pages contenant les projets que j'ai effectué durant les games jam</ProjectDescription>
              </div>
            </ProjectOverlay>
          </a>
        </ProjectCardContainer>
        <ProjectCardContainer>
          {/* Load the page without creating a new page */}
          {/* <Link to='/projects/personalProjects'>
            <ProjectImage src="../logo.svg" alt="test" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Personnels</ProjectTitle>
                <ProjectDescription></ProjectDescription>
              </div>
            </ProjectOverlay>
          </Link> */}
          <a href="/projects/personalProjects" target="_blank" rel="noopener noreferrer">
            <ProjectImage src="../logo.svg" alt="test" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Personnels</ProjectTitle>
                <ProjectDescription>Pages contenant les projets que j'ai réalisé durant mes temps libre</ProjectDescription>
              </div>
            </ProjectOverlay>
          </a>
        </ProjectCardContainer>
      </ProjectsGrid>
    </ProjectsContainer>
  );
};

export default Projects;
