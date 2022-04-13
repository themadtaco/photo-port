import React from "react";
import '@testing-library/jest-dom/extend-expect';
import {render, cleanup} from '@testing-library/react';
import Contact from '..';

afterEach(cleanup);

describe('Contact component', () => {
    it('renders', () => {
        <Contact></Contact>
    })

    it('matches snapshot', () => {
        const {asFragment} = render(<Contact></Contact>);

        expect(asFragment()).toMatchSnapshot();
    })

    it('matches h1 tag', () => {
        const {getByTestId} = render(<Contact></Contact>);

        expect(getByTestId('contact')).toHaveTextContent('Contact me')
    })

    it('matches button id', () => {
        const {getByTestId} = render(<Contact></Contact>);

        expect(getByTestId('button')).toHaveTextContent('Submit');
    })
})