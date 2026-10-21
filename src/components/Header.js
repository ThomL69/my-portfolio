import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';

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

const NAV_LINKS = [
  { to: '/', label: 'Accueil' },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => (
  <HeaderContainer>
    <Logo>Mon Portfolio</Logo>
    <Nav aria-label="Navigation principale">
      {NAV_LINKS.map(({ to, label }) => (
        <NavItem key={to}>
          <MotionLink
            className="link-styles inline-block"
            to={to}
            // Effet "jelly" au survol
            animate={{ rotate: 0, scale: 1, textShadow: "0px 0px 0px rgba(0, 181, 33, 0)" }}
            whileHover={{
              scale: 1.2,
              rotate: [0, -5, 5, -3, 0],
              textShadow: "0px 0px 10px rgba(0, 181, 33, 1)",
            }}
            transition={{ duration: 0.5 }}
          >
            {label}
          </MotionLink>
        </NavItem>
      ))}
    </Nav>
  </HeaderContainer>
);

export default Header;
