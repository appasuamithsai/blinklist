/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup} from '@testing-library/react';
import Timer from "./Timer";
 
afterEach(cleanup);
test("Testing Timer",()=>{
   const {getByTestId}=render(<Timer />);
   const test=getByTestId("Timer");
   expect(test).toBeInTheDocument();
});
