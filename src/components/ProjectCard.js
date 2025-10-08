import styled from 'styled-components';

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  height: auto; // Hauteur fixe pour un design uniforme

  &:hover {
    transform: scale(1.02);
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 240px; // Hauteur de l'image fixe
  object-fit: cover;
  align: center;
`;

const CardContent = styled.div`
  padding: 10px;
  text-align: left;
`;

const Title = styled.h3`
  font-size: 24px;
  margin-bottom: 10px;
  color: #3a86ff;
`;

const Description = styled.p`
  font-size: 0.9rem;
  line-height: 1.5;
  color: #6c757d;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  margin-top: 10px;
`;

const TechItem = styled.span`
  background: #eaeaea;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  color: #3a86ff;
`;

const DetailsButton = styled.button`
  background: transparent;
  border-radius: 12px;
  border: 2px solid #0444acff;
  font-size: 20px;
  cursor: pointer;
  color: #3a86ff;
  margin-top: 15px;
`;


const ProjectCard = ({ project, onOpenModal  }) => {  
  return (
    <CardContainer>
      <CardImage src={project.imageCard} alt={project.title} />

      <CardContent>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        {/* Pour afficher les technologies utilisées */}
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
        <DetailsButton onClick={onOpenModal}>En savoir plus</DetailsButton>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;