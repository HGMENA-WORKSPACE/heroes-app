import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DashboardRoute from './DashboardRoute';

describe('<DashboardRoute />', () => {
    test('it should mount', () => {
        render( < DashboardRoute / > );

        const dashboardRoute = screen.getByTestId('DashboardRoute');

        expect(dashboardRoute).toBeInTheDocument();
    });
});