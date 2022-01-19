/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import BlinkImage from "./BlinkImage";
import { MemoryRouter } from 'react-router-dom';

afterEach(cleanup);
test("Checking BlinkImage",()=>{
    render(<MemoryRouter><BlinkImage /></MemoryRouter>);
    const text=screen.getByAltText("appname");
    expect(text).toBeInTheDocument(); 
});