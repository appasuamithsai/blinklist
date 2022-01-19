/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import MyLibrary from "./MyLibrary";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Checking MyLibrary",()=>{
   render(<MyLibrary />);
   const text=screen.getByText("My Library");
   expect(text).toBeInTheDocument();
});
