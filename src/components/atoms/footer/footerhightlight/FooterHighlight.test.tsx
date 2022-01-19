/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup} from '@testing-library/react';
import FooterHighlight from "./FooterHighlight";

afterEach(cleanup);
test("Testing FooterHighlight",()=>{
    const {getByTestId}=render(<FooterHighlight />);
    const test=getByTestId("highlight");
    expect(test).toBeInTheDocument();
});