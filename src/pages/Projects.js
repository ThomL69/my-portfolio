import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Wrap, PageSection, PageTitle, ProjectsGrid } from '../components/ui';
import Reveal from '../components/Reveal';

const IMG = `${process.env.PUBLIC_URL}/imgs/categories`;

const categories = [
  {
    to: '/projects/universityProjects',
    title: 'Projets Universitaires',
    description: 'Projets réalisés durant mes différentes formations',
    image: `${IMG}/projet-universitaire.svg`,
    alt: 'Illustration : fenêtre de code et toque universitaire',
    tag: 'C · C++ · C# · Java',
  },
  {
    to: '/projects/gameJamProjects',
    title: 'Projets Games Jam',
    description: 'Projets réalisés durant les games jam',
    image: `${IMG}/projet-game-jam.svg`,
    alt: 'Illustration : chronomètre 48h et pixels de jeu',
    tag: 'Unity · Équipe · 48h',
  },
  {
    to: '/projects/personalProjects',
    title: 'Projets Personnels',
    description: 'Projets réalisés durant mon temps libre',
    image: `${IMG}/projet-personnel.svg`,
    alt: 'Illustration : fusée en orbite autour d\'une planète',
    tag: 'Unity · Unreal · Web',
  },
];

const CategoryCard = styled(Link)`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  color: var(--text);
  text-decoration: none;
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-6px);
    border-color: var(--accent);
    box-shadow: var(--shadow-hover);
    color: var(--text);
  }
`;

const ImageBox = styled.div`
  aspect-ratio: 16 / 10;
  overflow: hidden;
  background: var(--chip);

  img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s;
  }

  ${CategoryCard}:hover & img {
    transform: scale(1.06);
  }
`;

const Body = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  padding: 22px 24px 26px;
`;

const Tag = styled.span`
  font-size: 0.75rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--accent);
`;

const ProjectTitle = styled.h3`
  margin: 4px 0 0;
  font-size: 1.3rem;
  letter-spacing: -0.02em;
`;

const ProjectDescription = styled.p`
  margin: 0;
  font-size: 0.95rem;
  color: var(--muted);
`;

const More = styled.span`
  margin-top: auto;
  padding-top: 14px;
  font-weight: 700;
  color: var(--accent);

  span {
    display: inline-block;
    transition: transform 0.2s;
  }

  ${CategoryCard}:hover & span {
    transform: translateX(4px);
  }
`;

const Projects = () => {
  return (
    <PageSection>
      <Wrap>
        <PageTitle>Mes projets</PageTitle>
        <ProjectsGrid>
          {categories.map((c, i) => (
            <Reveal key={c.to} delay={i * 0.1} style={{ height: '100%' }}>
              <CategoryCard to={c.to}>
                <ImageBox>
                  <img src={c.image} alt={c.alt} loading="lazy" />
                </ImageBox>
                <Body>
                  <Tag>{c.tag}</Tag>
                  <ProjectTitle>{c.title}</ProjectTitle>
                  <ProjectDescription>{c.description}</ProjectDescription>
                  <More>Voir les projets <span aria-hidden="true">→</span></More>
                </Body>
              </CategoryCard>
            </Reveal>
          ))}
        </ProjectsGrid>
      </Wrap>
    </PageSection>
  );
};

export default Projects;
