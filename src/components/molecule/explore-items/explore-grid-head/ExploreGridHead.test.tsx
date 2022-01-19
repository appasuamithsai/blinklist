/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import ExploreMenuHead from "./ExploreMenuHead";
afterEach(cleanup);
test("Checking ExploreMenuHead",()=>{
  render(<ExploreMenuHead />);
  const text=screen.getByText("Explore by category");
  expect(text).toBeInTheDocument();
});
