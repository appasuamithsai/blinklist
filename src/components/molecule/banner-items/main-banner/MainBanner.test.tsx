/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import MainBanner from "./MainBanner";
afterEach(cleanup);
test("Checking MainBanner",()=>{
  render(<MainBanner />);
  const text=screen.getByText("Explore Books on entrepreneurship");
  expect(text).toBeInTheDocument();
});
