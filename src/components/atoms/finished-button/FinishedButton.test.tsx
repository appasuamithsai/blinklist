/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {cleanup, render,screen,fireEvent} from "@testing-library/react";
import FinishedButton from "./FinishedButton";
import '@testing-library/jest-dom';

afterEach(cleanup);
test("Checking FinishedButton",()=>{
    const fakeFunction=()=>{
        console.log("Fake Function");
    }
  render(<FinishedButton name="Harry" handleFinish={fakeFunction} />);
  const text=screen.getByRole("button");
  expect(text).toBeInTheDocument();
});
test("Checking OnCLick FinishedButton",()=>{
  const fakeFunction=()=>{
      console.log("Fake Function");
  }
render(<FinishedButton name="Harry" handleFinish={fakeFunction} />);
fireEvent.click(screen.getByRole("button"));
});