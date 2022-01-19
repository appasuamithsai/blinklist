/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, render,screen} from '@testing-library/react';
import FinishReading from './FinishReading';
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);
it('Checking the FinishReading',()=>{
    const func=()=>{
        return "hello";
    };
    render(<MemoryRouter> <FinishReading bookName="Harry Potter" btn={true} handleFinish={func} /> </MemoryRouter>);
    const btn=screen.getByText("Finished Reading");

    expect(btn).toBeInTheDocument();
});