import React from "react";
import "@testing-library/jest-dom";
import App from "./App";
import {render,screen} from "@testing-library/react";
it("Checking Rendering of App",()=>{
    render(<App />);
    const text=screen.getByText("Currently reading");
    expect(text).toBeInTheDocument();
    
});