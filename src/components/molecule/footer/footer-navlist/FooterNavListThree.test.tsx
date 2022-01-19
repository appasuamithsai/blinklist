/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render} from "@testing-library/react";
import FooterNavListThree from "./FooterNavListThree";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking Footer Nav List Three Rendering",()=>{
  const {getByTestId}=render(<FooterNavListThree />);
  const id=getByTestId("FooterNavList3");
  expect(id).toBeInTheDocument();
});
