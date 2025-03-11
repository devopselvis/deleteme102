import React from 'react';
import { render } from '@testing-library/react';
import App from '../src/App';

test('renders hello message', () => {
  const { getByText } = render(<App />);
  const headerElement = getByText(/Hello, Complex Workflow!/i);
  expect(headerElement).toBeInTheDocument();
});
