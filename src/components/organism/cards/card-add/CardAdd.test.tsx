/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import {MemoryRouter} from 'react-router-dom';
import { cleanup, render } from "@testing-library/react";
import CardAdd from "./CardAdd";
import "@testing-library/jest-dom";
import book1 from "../src/components/atoms/assets/book1.png";
afterEach(cleanup);
test("Checking card Add Rendering", () => {
  const { getByTestId } = render(<MemoryRouter>
    <CardAdd
      details={[
        { image: book1, name: "Harry", author: "Potter", time: "24 minutes" },
      ]}
    /></MemoryRouter>
  );
  const id = getByTestId("CardAdd");
  expect(id).toBeInTheDocument();
});
