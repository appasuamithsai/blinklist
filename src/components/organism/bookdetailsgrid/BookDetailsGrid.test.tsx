/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import BookDetailsGrid from "./BookDetailsGrid";
import "@testing-library/jest-dom";
import {MemoryRouter} from 'react-router-dom';
afterEach(cleanup);
test("Checking Book Details Rendering",()=>{
  render(<MemoryRouter><BookDetailsGrid btn={true} handleFinish={()=>console.log("Hello")} /></MemoryRouter>);
  const text=screen.getByText("Finished Reading");
  expect(text).toBeInTheDocument();
});
