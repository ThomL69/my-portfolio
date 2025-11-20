import styled from 'styled-components';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';

const HeaderContainer = styled.header`
  background: #f8f9fa;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
  color: #3a86ff;
  text-decoration: none;
  cursor: default;
`;

const Nav = styled.nav`
  display: flex;
  list-style: none;
`;

const NavItem = styled.li`
  margin-left: 25px;
  text-decoration: none;
`;

const MotionLink = motion.create(Link);

const Header = () => {
  const location = useLocation("/");

  return (
    <HeaderContainer>
      <Logo>Mon Portfolio</Logo>
      <Nav>
        <NavItem>
          <MotionLink id="link-styles" to="/" 
            key={location.pathname}
            // Glowing effect
            // whileHover={{
            //   textShadow: "0px 0px 10px rgba(98, 93, 253, 0.97)",
            // }}
            // transition={{ duration: 0.25 }}
            // Jelly Hover effect
            animate={{ rotate: 0, scale: 1, textShadow: "0px 0px 0px rgba(0, 181, 33, 0)",}}
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, -3, 0],
              textShadow: "0px 0px 10px rgba(0, 181, 33, 1)",
            }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >Accueil
          </MotionLink>
        </NavItem>
        <NavItem>
          <MotionLink id="link-styles" to="/about"
            // Jelly Hover effect
            animate={{ rotate: 0, scale: 1, textShadow: "0px 0px 0px rgba(0, 181, 33, 0)",}}
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, -3, 0],
              textShadow: "0px 0px 10px rgba(0, 181, 33, 1)",
            }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >À propos</MotionLink>
        </NavItem>
        <NavItem>
          <MotionLink id="link-styles" to="/projects"
            // Jelly Hover effect
            animate={{ rotate: 0, scale: 1, textShadow: "0px 0px 0px rgba(0, 181, 33, 0)",}}
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, -3, 0],
              textShadow: "0px 0px 10px rgba(0, 181, 33, 1)",
            }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >Projets</MotionLink>
        </NavItem>
        <NavItem>
          <MotionLink id="link-styles" to="/contact"
            // Jelly Hover effect
            animate={{ rotate: 0, scale: 1, textShadow: "0px 0px 0px rgba(0, 181, 33, 0)",}}
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, -3, 0],
              textShadow: "0px 0px 10px rgba(0, 181, 33, 1)",
            }}
            transition={{ duration: 0.5 }}
            className="inline-block"
          >Contact</MotionLink>
        </NavItem>
      </Nav>
    </HeaderContainer>
  );
};

export default Header;
