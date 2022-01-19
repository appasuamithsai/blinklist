/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import ReadTime from "./ReadTime";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking Read Time Rendering",()=>{
  render(<ReadTime time="24 minutes" />);
  const text=screen.getByText("24 minutes");
  expect(text).toBeInTheDocument();
});
