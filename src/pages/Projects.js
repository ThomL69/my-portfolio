import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';


const ProjectsContainer = styled(motion.div)`
  padding: 50px 20px 50px;
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

const ProjectCardContainer = styled(motion.div)`
  position: relative;
  height: 260px;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.36);
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

const container = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.5
    }
  }
}

const popUp = {
  hidden: {
    opacity: 0,
    scale: 0
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      mass: 0.3,
    }
  }
}

const Projects = () => {
  return (
    <ProjectsContainer variants={container}
      initial="hidden"
      animate="visible">
      <SectionTitle>Mes projets</SectionTitle>
      <ProjectsGrid>
        <ProjectCardContainer variants={popUp}>
          <Link to='/projects/universityProjects'>
            <ProjectImage src="https://ThomL69.github.io/my-portfolio/imgs/university.jpg" alt="logo_prj_univ" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Universitaires</ProjectTitle>
                <ProjectDescription>
                  Projets réalisés durant mes différentes formations
                </ProjectDescription>
              </div>
            </ProjectOverlay>
          </Link>
        </ProjectCardContainer>
        <ProjectCardContainer variants={popUp}>
          <Link to='/projects/gameJamProjects'>
            <ProjectImage src="https://ThomL69.github.io/my-portfolio/imgs/gamejam.jpg" alt="logo_gamejam" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Games Jam</ProjectTitle>
                <ProjectDescription>
                 Projets réalisés durant les games jam
                </ProjectDescription>
              </div>
            </ProjectOverlay>
          </Link>
        </ProjectCardContainer>
        <ProjectCardContainer variants={popUp}>
          <Link to='/projects/personalProjects'>
            <ProjectImage src="https://ThomL69.github.io/my-portfolio/imgs/personnel.jpg" alt="logo_prj_perso" />
            <ProjectOverlay>
              <div>
                <ProjectTitle>Projets Personnels</ProjectTitle>
                <ProjectDescription>
                  Projets réalisés durant mon temps libre
                </ProjectDescription>
              </div>
            </ProjectOverlay>
          </Link>
        </ProjectCardContainer>
      </ProjectsGrid>
    </ProjectsContainer >
  );
};

export default Projects;
