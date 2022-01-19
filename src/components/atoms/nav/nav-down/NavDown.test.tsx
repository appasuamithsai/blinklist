/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup} from '@testing-library/react';
import NavDown from "./NavDown";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Testing NavDown",()=>{
   const {getByTestId}=render(<NavDown />);
   const test=getByTestId("navdown");
   expect(test).toBeInTheDocument();
});
