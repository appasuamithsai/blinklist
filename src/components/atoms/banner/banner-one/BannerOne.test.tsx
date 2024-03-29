import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import BannerOne from "./BannerOne";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Checking BannerOne",()=>{
    render(<BannerOne />);
    const text=screen.getByText("Explore Books on entrepreneurship");
    expect(text).toBeInTheDocument(); 
});