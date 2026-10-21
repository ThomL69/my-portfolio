import { render, screen } from '@testing-library/react';
import App from './App';

// Le fond WebGL (ogl) n'est pas supporté par jsdom
jest.mock('./components/Orb', () => () => null);

test('affiche la navigation principale et le titre de l\'accueil', () => {
  render(<App />);
  expect(screen.getByRole('navigation', { name: /navigation principale/i })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: /^projets$/i })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: /thomas lieghio/i })).toBeInTheDocument();
});
