import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import AvatarLogin from "./AvatarLogin";

afterEach(cleanup);
test("Checking the Avatar",()=>{
    const {getByText} =render(<AvatarLogin name="F" />);
    // eslint-disable-next-line testing-library/prefer-screen-queries
    const name=getByText("F");
    expect(name).toBeInTheDocument();
});