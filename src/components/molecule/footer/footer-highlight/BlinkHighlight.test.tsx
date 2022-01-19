/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render} from "@testing-library/react";
import BlinkHighlight from "./BlinkHighlight";
import { MemoryRouter } from 'react-router-dom';
afterEach(cleanup);
test("Checking BlinkHighlight",()=>{
   const {getByTestId}=render(<MemoryRouter> <BlinkHighlight /> </MemoryRouter>);
   const text=getByTestId("blinkHighlight");
   expect(text).toBeInTheDocument();
});
