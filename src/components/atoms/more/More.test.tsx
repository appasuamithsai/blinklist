/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup} from '@testing-library/react';
import More from "./More";
 
afterEach(cleanup);
test("Testing More",()=>{
   const {getByTestId}=render(<More />);
   const test=getByTestId("more");
   expect(test).toBeInTheDocument();
});
