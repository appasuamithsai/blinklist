/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup,screen} from '@testing-library/react';
import NavHead from "./NavHead";
 
afterEach(cleanup);
test("Testing NavHead",()=>{
   render(<NavHead name="testing" />);
   const test=screen.getByText("testing");
   expect(test).toBeInTheDocument();
});
