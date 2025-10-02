import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom'; // Si tu utilises react-router

const CardContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  height: 350px; // Hauteur fixe pour un design uniforme
`;

const CardImage = styled.img`
  width: 100%;
  height: 200px; // Hauteur de l'image fixe
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 20px;
  text-align: left;
`;

const Title = styled.h3`
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

const ProjectCard = ({ project }) => {
  return (
    <CardContainer>
      <CardImage src={project.image} alt={project.title} />
      <CardContent>
        <Title>{project.title}</Title>
        <Description>{project.description}</Description>
        {/* Pour afficher les technologies utilisées */}
        <TechStack>
          {project.technologies.map((tech, index) => (
            <TechItem key={index}>{tech}</TechItem>
          ))}
        </TechStack>
      </CardContent>
    </CardContainer>
  );
};

export default ProjectCard;