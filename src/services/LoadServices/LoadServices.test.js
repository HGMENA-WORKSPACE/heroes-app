import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Services/LoadServices from './Services/LoadServices';

describe('<Services/LoadServices />', () => {
  test('it should mount', () => {
    render(<Services/LoadServices />);
    
    const servicesLoadServices = screen.getByTestId('Services/LoadServices');

    expect(servicesLoadServices).toBeInTheDocument();
  });
});