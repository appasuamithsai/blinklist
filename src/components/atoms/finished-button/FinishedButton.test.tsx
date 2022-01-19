/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen} from "@testing-library/react";
import FinishedButton from "./FinishedButton";
afterEach(cleanup);
test("Checking FinishedButton",()=>{
    const fakeFunction=()=>{
        console.log("Fake Function");
    }
  render(<FinishedButton name="Harry" handleFinish={fakeFunction} />);
  const text=screen.getByRole("button");
  expect(text).toBeInTheDocument();
});
