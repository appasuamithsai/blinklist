import React  from "react";
import {render,screen,cleanup} from '@testing-library/react';
import AuthorName from "./AuthorName";
import '@testing-library/jest-dom';
afterEach(cleanup);
test("Testing AuthorName",()=>{
    render(<AuthorName authName="Amith"/>);
    const author=screen.getByText("Amith");
    expect(author).toBeInTheDocument();
});