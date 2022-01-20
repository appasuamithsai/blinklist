/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { cleanup, render } from "@testing-library/react";
import ToolBarHeader from "./ToolBarHeader";
import "@testing-library/jest-dom";
import {MemoryRouter} from 'react-router-dom';
afterEach(cleanup);
test("Checking header left Rendering", () => {
  const { getByTestId } = render(<MemoryRouter>
    <ToolBarHeader
        icon={true}
        handleChange={()=>console.log("hello from toolbar header ")}
    /></MemoryRouter>
  );
  const id = getByTestId("ToolBarHeader");
  expect(id).toBeInTheDocument();
});
