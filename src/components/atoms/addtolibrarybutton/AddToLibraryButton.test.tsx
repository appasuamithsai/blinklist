/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import AddToLibraryButton from './AddToLibraryButton';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);
it('Checking the AddToLibraray',()=>{
    const {getByTestId}=render(<MemoryRouter> <AddToLibraryButton /> </MemoryRouter>);
    const btn=getByTestId("AddToLibrary");
    // console.log(btn);
    expect(btn).toBeInTheDocument();
});