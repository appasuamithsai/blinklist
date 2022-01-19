/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, render,screen} from '@testing-library/react';
import ReadNow from './ReadNow';

afterEach(cleanup);
it('Checking the ReadNow',()=>{
    render(<ReadNow />);
    const btn=screen.getByRole("button");

    expect(btn).toBeInTheDocument();
});