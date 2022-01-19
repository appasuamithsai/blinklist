/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render} from '@testing-library/react';
import FinishedBar from './FinishedBar';
 
it('Checking the FinishedBar',()=>{
   const {getByTestId}=render(<FinishedBar />);
   const bar=getByTestId("FinishedBar");
   expect(bar).toBeInTheDocument();
});
