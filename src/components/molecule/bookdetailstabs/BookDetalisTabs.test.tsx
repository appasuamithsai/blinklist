/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import BookDetailsTabs from "./BookDetailsTabs";
afterEach(cleanup);
test("Checking BookDetailsTabs",()=>{
  render(<BookDetailsTabs />);
  const text=screen.getByText("Synopsis");
  expect(text).toBeInTheDocument();
});
