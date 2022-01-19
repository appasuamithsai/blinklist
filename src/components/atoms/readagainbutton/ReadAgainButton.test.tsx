/* eslint-disable testing-library/prefer-screen-queries */
import React  from "react";
import {render,cleanup, screen} from '@testing-library/react';
import ReadAgainButton from "./ReadAgainButton";
 
afterEach(cleanup);
test("Testing ReadAgainButton",()=>{
    const func=()=>{
        console.log("fake func");
    };
   render(<ReadAgainButton name="Harry" handleReadAgain={func} />);
   const test=screen.getByText("Read Again");
   expect(test).toBeInTheDocument();
});
