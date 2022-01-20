/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, render,screen} from '@testing-library/react';
import FinishReading from './FinishReading';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

afterEach(cleanup);
it('Checking the FinishReading for true',()=>{
    const func=()=>{
        return "hello";
    };
    render(<MemoryRouter> <FinishReading bookName="Harry Potter" btn={true} handleFinish={func} /> </MemoryRouter>);
    const btn=screen.getByText("Finished Reading");

    expect(btn).toBeInTheDocument();
});

it('Checking the FinishReading for false',()=>{
    const func=(item:string)=>{
        return "Beyond Entrepreneurship 2.0";
    };
    render(<MemoryRouter> <FinishReading bookName="Harry Potter" btn={false} handleFinish={func} /> </MemoryRouter>);
    const btn=screen.getByText("Finished Reading");

    expect(btn).toBeInTheDocument();
});