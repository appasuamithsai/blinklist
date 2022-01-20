/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { cleanup, render } from "@testing-library/react";
import HeaderLeft from "./HeaderLeft";
import "@testing-library/jest-dom";
import {MemoryRouter} from 'react-router-dom';
afterEach(cleanup);
test("Checking header left Rendering", () => {
  const { getByTestId } = render(<MemoryRouter>
    <HeaderLeft
        icon={true}
        handleChange={()=>console.log("hello from header Left")}
    /></MemoryRouter>
  );
  const id = getByTestId("HeaderLeft");
  expect(id).toBeInTheDocument();
});
