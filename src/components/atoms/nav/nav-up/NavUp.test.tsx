/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup} from '@testing-library/react';
import NavUp from "./NavUp";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing NavUp",()=>{
   const {getByTestId}=render(<NavUp />);
   const test=getByTestId("navup");
   expect(test).toBeInTheDocument();
});
