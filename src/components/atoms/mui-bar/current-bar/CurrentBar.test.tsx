/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render} from '@testing-library/react';
import CurrentBar from './CurrentBar';
import '@testing-library/jest-dom';

it('Checking the CurrentBar',()=>{
   const {getByTestId}=render(<CurrentBar />);
   const bar=getByTestId("CurrentBar");
   expect(bar).toBeInTheDocument();
});
