/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { cleanup, render } from "@testing-library/react";
import MainReading from "./MainReading";
import "@testing-library/jest-dom";
import {MemoryRouter} from 'react-router-dom';
import book1 from "../src/components/atoms/assets/book1.png";
afterEach(cleanup);
test("Checking main Reading Rendering", () => {
  const { getByTestId } = render(<MemoryRouter>
    <MainReading
      currentReading={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" ,finished:true},
      ]}
      handleReadAgain={()=>console.log("hello from main reading")}
      handleFinish={()=>console.log("hello main reading")}
    /></MemoryRouter>
  );
  const id = getByTestId("MainReading");
  expect(id).toBeInTheDocument();
});
