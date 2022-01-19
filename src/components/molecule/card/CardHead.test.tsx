/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import CardHead from './CardHead';
import "@testing-library/jest-dom";
import book1 from "../src/components/atoms/assets/book1.png";
afterEach(cleanup);
it('Checking the Card Head rendering',()=>{
    const {getByTestId}=render(<CardHead image={book1}
        bookName="Harry"
        authorName="potter"
        time="24 minutes" />);
    const btn=getByTestId("CardHead");
    expect(btn).toBeInTheDocument();
});