/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup,screen} from '@testing-library/react';
import NavItem from "./NavItem";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing NavItem",()=>{
   render(<NavItem name="testing"/>);
   const author=screen.getByText("testing");
   expect(author).toBeInTheDocument();
});
