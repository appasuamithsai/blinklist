/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render} from "@testing-library/react";
import FooterNavListOne from "./FooterNavListOne";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking Footer Nav List One Rendering",()=>{
  const {getByTestId}=render(<FooterNavListOne />);
  const id=getByTestId("FooterNavList1");
  expect(id).toBeInTheDocument();
});
