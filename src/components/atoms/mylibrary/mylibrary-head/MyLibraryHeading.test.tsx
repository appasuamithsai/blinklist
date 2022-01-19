/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import MyLibraryHeading from "./MyLibraryHeading";
 
afterEach(cleanup);
test("Checking MyLibraryHeading",()=>{
   render(<MyLibraryHeading />);
   const text=screen.getByText("My Library");
   expect(text).toBeInTheDocument();
});
