import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import CarList from './CarList';

describe('CarLists component', () => {
  test('renders available car  message ', () => {
    render(
      <BrowserRouter>
        <CarList />
      </BrowserRouter>
    );

   
    
    expect(screen.getByText('LIST OF AVAILABLE CARS')).toBeInTheDocument();

  });

});