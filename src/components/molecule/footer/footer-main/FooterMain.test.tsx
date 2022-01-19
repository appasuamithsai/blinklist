/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render} from "@testing-library/react";
import FooterMain from "./FooterMain"; 
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);
test("Checking FooterMain",()=>{
  const {getByTestId}=render(<MemoryRouter><FooterMain /></MemoryRouter>);
  const test=getByTestId("FooterMain");
  expect(test).toBeInTheDocument();
});
