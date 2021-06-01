import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import RouterApp from './RouterApp';

describe('<RouterApp />', () => {
    test('it should mount', () => {
        render( < RouterApp / > );

        const routerApp = screen.getByTestId('RouterApp');

        expect(routerApp).toBeInTheDocument();
    });
});