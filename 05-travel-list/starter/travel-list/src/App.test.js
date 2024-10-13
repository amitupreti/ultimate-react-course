import { act, render, screen } from '@testing-library/react';

import App from './App';

test('renders learn react link', () => {
  act(() => {
    render(<App />);
  });
  const linkElement = screen.getByText(/Geda/i);
  expect(linkElement).toBeInTheDocument();
});
