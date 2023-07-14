import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';

import CarsDetail from './CarsDetail';

test('renders CarsDetail component correctly', () => {
  render(
    <MemoryRouter>
      <CarsDetail />
    </MemoryRouter>
  ); 
  expect(screen.getByRole('button', { name: 'Rent Me Now' })).toBeInTheDocument();
});

