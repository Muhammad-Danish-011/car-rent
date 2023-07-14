import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import CarsHome from './CarsHome';

test('renders CarsHome component correctly', () => {
  render(
    <MemoryRouter>
      <CarsHome />
    </MemoryRouter>
  );

  expect(screen.getByText('Cars For Rent')).toBeInTheDocument();
  expect(screen.getByRole('button', { name: 'Go For Cars' })).toBeInTheDocument();
});

