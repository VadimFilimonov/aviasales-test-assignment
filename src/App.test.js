import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

// TODO: fix test
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Количество пересадок/i);
  expect(linkElement).toBeInTheDocument();
});
