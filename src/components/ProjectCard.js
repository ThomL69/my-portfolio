import styled from 'styled-components';
import { ButtonEl } from './ui';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  overflow: hidden;
  border: 1px solid var(--border);
  border-radius: var(--radius-lg);
  background: var(--surface);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  transition: transform 0.3s, box-shadow 0.3s, border-color 0.3s;

  &:hover {
    transform: translateY(-4px);
    border-color: var(--accent);
    box-shadow: var(--shadow-hover);
  }
`;

const CardImage = styled.img`
  display: block;
  width: 100%;
  height: 220px; /* hauteur d'image fixe */
  object-fit: cover;
`;

const CardContent = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 20px 22px 24px;
  text-align: left;
`;

const Title = styled.h3`
  margin: 0 0 10px;
  font-size: 1.35rem;
  letter-spacing: -0.02em;
  color: var(--text);
`;

const Description = styled.p`
  margin: 0;
  font-size: 0.92rem;
  line-height: 1.55;
  color: var(--muted);
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin-top: 14px;
`;

const TechItem = styled.span`
  padding: 4px 10px;
  border: 1px solid var(--border);
  border-radius: 999px;
  background: var(--chip);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent);
`;

const DetailsWrap = styled.div`
  margin-top: auto;
  padding-top: 18px;
`;

const ProjectCard = ({ project, onOpenModal }) => {
  if (!project) return null;

  return (
    <CardContainer>
      <CardImage src={project.imageCard} alt={project.title} loading="lazy" />

      <CardContent>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        {/* Pour afficher les technologies utilisées */}
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
        <DetailsWrap>
          <ButtonEl type="button" $ghost onClick={onOpenModal}>En savoir plus</ButtonEl>
        </DetailsWrap>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;
