/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render} from "@testing-library/react";
import Bannertwo from "./BannerTwo";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Checking Bannertwo",()=>{
    const {getByTestId}=render(<Bannertwo />);
    const text=getByTestId("BannerTwo");
    expect(text).toBeInTheDocument(); 
});