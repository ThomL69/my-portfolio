import styled from 'styled-components';
import { Link } from 'react-router-dom';

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
`;

const Header = () => {
  return (
    <HeaderContainer>
        <Logo>Mon Portfolio</Logo>
        <Nav>
            <NavItem>
            <Link to="/">Accueil</Link>
            </NavItem>
            <NavItem>
            <Link to="/about">À propos</Link>
            </NavItem>
            <NavItem>
            <Link to="/projects">Projets</Link>
            </NavItem>
            <NavItem>
            <Link to="/contact">Contact</Link>
            </NavItem>
        </Nav>
    </HeaderContainer>
  );
};

export default Header;
