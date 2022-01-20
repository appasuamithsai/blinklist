/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render} from '@testing-library/react';
import EnterprenurReading from './EnterprenurReading';
import { MemoryRouter } from 'react-router-dom';
 import "@testing-library/jest-dom";
it('Checking the Enterprenur Reading',()=>{
   const {getByTestId}=render(<MemoryRouter> <EnterprenurReading value='to' /> </MemoryRouter>);
   const btn=getByTestId("Enterprenur");

   expect(btn).toBeInTheDocument();
});
