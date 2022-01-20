/* eslint-disable testing-library/prefer-screen-queries */
import React from "react";
import { cleanup, fireEvent, render } from "@testing-library/react";
import MainSearch from "./MainSearch";
import "@testing-library/jest-dom";
afterEach(cleanup);
test("Checking main serach Rendering", () => {
  const { getByTestId } = render(
    <MainSearch search={() => console.log("hello from toolbar header ")} />
  );
  const id = getByTestId("TextField");
  expect(id).toBeInTheDocument();
});
test("Checking OnChange main serach", () => {
  const { getByTestId } = render(
    <MainSearch search={() => console.log("hello from toolbar header ")} />
  );
  fireEvent.change( getByTestId("TextField"));
});