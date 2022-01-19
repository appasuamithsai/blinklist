/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import ExploreMenu from "./ExploreMenu";

import { MemoryRouter } from 'react-router-dom'
afterEach(cleanup);
test("Checking ExploreMenu",()=>{
    const fakeFunction=()=>{

    };
  render(<MemoryRouter><ExploreMenu handleChange={fakeFunction}/></MemoryRouter>);
  const text=screen.getByText("Entrepreneurship");
  expect(text).toBeInTheDocument();
});
