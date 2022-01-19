/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup,screen} from '@testing-library/react';
import Heading from "./Heading";
 
afterEach(cleanup);
test("Testing Heading",()=>{
   render(<Heading />);
   const name=screen.getByText("Trending blinks");
   expect(name).toBeInTheDocument();
});
