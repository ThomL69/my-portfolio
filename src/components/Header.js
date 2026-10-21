import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { NavLink, useLocation } from 'react-router-dom';
import { Wrap } from './ui';

const HeaderBar = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: var(--header-bg);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-bottom: 1px solid var(--border);
`;

const Inner = styled(Wrap)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--header-h);
`;

const Logo = styled.div`
  font-size: 1.25rem;
  font-weight: 800;
  letter-spacing: -0.02em;
  color: var(--text);
  cursor: default;

  span {
    color: var(--accent);
  }
`;

const Nav = styled.nav`
  display: flex;
  gap: 4px;

  @media (max-width: 640px) {
    display: ${({ $open }) => ($open ? 'flex' : 'none')};
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    padding: 12px 16px 20px;
    background: var(--surface-solid);
    border-bottom: 1px solid var(--border);
  }
`;

const NavItem = styled(NavLink)`
  padding: 8px 14px;
  border-radius: 999px;
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s, background 0.2s;

  &:hover,
  &.active {
    color: var(--text);
    background: var(--chip);
  }

  @media (max-width: 640px) {
    padding: 12px 14px;
    border-radius: var(--radius);
  }
`;

const Burger = styled.button`
  display: none;
  position: relative;
  width: 44px;
  height: 44px;
  padding: 0;
  border: 0;
  background: none;
  color: var(--text);
  cursor: pointer;

  span {
    position: absolute;
    left: 11px;
    right: 11px;
    height: 2px;
    border-radius: 2px;
    background: currentColor;
    transition: transform 0.25s, top 0.25s;
  }
  span:nth-child(1) { top: 16px; }
  span:nth-child(2) { top: 26px; }

  &[aria-expanded="true"] span:nth-child(1) { top: 21px; transform: rotate(45deg); }
  &[aria-expanded="true"] span:nth-child(2) { top: 21px; transform: rotate(-45deg); }

  @media (max-width: 640px) {
    display: block;
  }
`;

const links = [
  { to: '/', label: 'Accueil', end: true },
  { to: '/about', label: 'À propos' },
  { to: '/projects', label: 'Projets' },
  { to: '/contact', label: 'Contact' },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Referme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Échap referme le menu
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open]);

  return (
    <HeaderBar>
      <a className="skip-link" href="#main">Aller au contenu</a>
      <Inner>
        <Logo>Mon <span>Portfolio</span></Logo>
        <Burger
          type="button"
          aria-label="Menu"
          aria-expanded={open}
          aria-controls="main-nav"
          onClick={() => setOpen((o) => !o)}
        >
          <span />
          <span />
        </Burger>
        <Nav id="main-nav" aria-label="Navigation principale" $open={open}>
          {links.map(({ to, label, end }) => (
            <NavItem key={to} to={to} end={end}>{label}</NavItem>
          ))}
        </Nav>
      </Inner>
    </HeaderBar>
  );
};

export default Header;
