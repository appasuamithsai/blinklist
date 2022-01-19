/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup} from '@testing-library/react';
import SearchIcon from "./SearchIcon";
 
afterEach(cleanup);
test("Testing SearchIcon",()=>{
   const {getByTestId}=render(<SearchIcon />);
   const test=getByTestId("SearchIcon");
   expect(test).toBeInTheDocument();
});
