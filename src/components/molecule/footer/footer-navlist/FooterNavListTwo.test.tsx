/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render} from "@testing-library/react";
import FooterNavListTwo from "./FooterNavListTwo";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking Footer Nav List Two Rendering",()=>{
  const {getByTestId}=render(<FooterNavListTwo />);
  const id=getByTestId("FooterNavList2");
  expect(id).toBeInTheDocument();
});
