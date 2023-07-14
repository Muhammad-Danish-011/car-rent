import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import Final from './Final';

describe('Final component', () => {
  test('renders thanks message ', () => {
    render(
      <BrowserRouter>
        <Final />
      </BrowserRouter>
    );

   
    
    expect(screen.getByText('THANKS FOR YOUR ORDER')).toBeInTheDocument();

  });

  test(' successfully rented message ', () => {
    render(
      <BrowserRouter>
        <Final />
      </BrowserRouter>
    );

   
    expect(screen.getByText('SUCCESSFULLY RENTED')).toBeInTheDocument();
});

test(' Start over button', () => {
    render(
      <BrowserRouter>
        <Final />
      </BrowserRouter>
    );

   
    const startOverButton = screen.getByRole('button', { name: /start over/i });
    expect(startOverButton).toBeInTheDocument();
});

test(' clear form button', () => {
    render(
      <BrowserRouter>
        <Final />
      </BrowserRouter>
    );

   
    const clearFormButton = screen.getByRole('button', { name: /clear form/i });
    expect(clearFormButton).toBeInTheDocument();
});
});
