/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import BannerItems from "./BannerItems";
afterEach(cleanup);
test("Checking BannerItems",()=>{
  render(<BannerItems />);
  const text=screen.getByText("Explore Books on entrepreneurship");
  expect(text).toBeInTheDocument();
});
