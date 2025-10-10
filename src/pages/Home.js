import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HomeContainer = styled.div`
  text-align: center;
  padding: 100px 20px 50px;
`;

const MySection = styled.section`
  margin-bottom: 40px;
  position: relative;
  overflow: hidden;
  height: 600px;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.4);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

const MyContent = styled.div`
  text-align: left;
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 12px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const MyTitle = styled.h1`
  font-size: 3rem;
  margin-bottom: 20px;
  color: #3a86ff;
`;

const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-bottom: 40px;
  line-height: 1.6;
  color: #555;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
`;

const PrimaryButton = styled(Link)`
  background: #3a86ff;
  color: white;
  padding: 15px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #246ed2;
  }
`;

const SecondaryButton = styled(Link)`
  background: #eee;
  color: #555;
  padding: 15px 25px;
  border-radius: 8px;
  text-decoration: none;
  font-weight: bold;
  transition: all 0.3s ease;

  &:hover {
    background: #ddd;
  }
`;

const Home = () => {
  return (
    <HomeContainer>
      <MySection>
        <ImageOverlay>
          <MyContent>
            <MyTitle>Créez l'avenir avec moi</MyTitle>
            <h2 class="fs-4 mt-3 interactiveTitle">
              "Je recherche actuellement un poste de "
              <span class="txt-rotate fw-bold" data-period="2000" data-rotate="[ &quot;Développeur web&quot;, &quot;Développeur logiciel&quot;, &quot;Développeur Fullstack&quot;, &quot;Développeur Gameplay&quot;]">
                <span class="wrap"></span>
              </span>
            </h2>
            
            <Subtitle>Développeur passionné.</Subtitle>
            <ButtonGroup>
              <PrimaryButton to="/projects">Découvrez mes projets</PrimaryButton>
              <SecondaryButton to="/contact">Contactez-moi</SecondaryButton>
            </ButtonGroup>
          </MyContent>
        </ImageOverlay>
      </MySection>
    </HomeContainer>
  );
};

export default Home;
