/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup} from '@testing-library/react';
import BookNote from "./BookNote";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing BookNote",()=>{
    const {getByTestId}=render(<BookNote />);
    const author=getByTestId("BookNote");
    expect(author).toBeInTheDocument();
});