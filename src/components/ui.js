// Briques de style partagées (thème : voir src/styles/theme.css)
import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  width: min(1120px, 100% - 32px);
  margin-inline: auto;
`;

export const PageSection = styled.section`
  padding: clamp(40px, 7vw, 80px) 0 clamp(48px, 8vw, 100px);
`;

export const PageTitle = styled.h2`
  font-size: clamp(1.9rem, 4vw, 2.8rem);
  letter-spacing: -0.03em;
  line-height: 1.1;
  margin: 0 0 40px;
  color: var(--text);

  &::after {
    content: "";
    display: block;
    width: 56px;
    height: 4px;
    border-radius: 4px;
    background: var(--accent);
    margin-top: 14px;
  }
`;

// Style de bouton commun. Variante pleine par défaut, `$ghost` pour le contour.
export const buttonStyles = css`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  min-height: 48px;
  margin: 0;
  padding: 12px 26px;
  border-radius: var(--radius);
  border: 2px solid transparent;
  font: 700 1rem/1.2 var(--font);
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s, border-color 0.2s;

  ${({ $ghost }) =>
    $ghost
      ? css`
          background: transparent;
          color: var(--text);
          border-color: var(--border-strong);

          &:hover {
            background: var(--chip);
            color: var(--text);
            transform: translateY(-2px);
          }
        `
      : css`
          background: var(--accent);
          color: var(--on-accent);
          box-shadow: 0 0 28px var(--glow);

          &:hover {
            background: var(--accent-hover);
            color: var(--on-accent);
            transform: translateY(-2px);
          }
        `}
`;

export const ButtonLink = styled(Link)`
  ${buttonStyles}
`;

export const ButtonAnchor = styled.a`
  ${buttonStyles}
`;

export const ButtonEl = styled.button`
  ${buttonStyles}
`;

export const BackButton = styled.button.attrs({ $ghost: true })`
  ${buttonStyles}
  min-height: 40px;
  padding: 8px 18px;
  margin-bottom: 28px;
`;

export const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 300px), 1fr));
  gap: 28px;
`;
