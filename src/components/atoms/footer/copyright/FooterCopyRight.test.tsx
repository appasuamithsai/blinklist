/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {render} from '@testing-library/react';
import FooterCopyRight from './FooterCopyRight';
import '@testing-library/jest-dom';

it('Checking the footercopyright',()=>{
   const {getByTestId}=render(<FooterCopyRight/>);
   const textContent=getByTestId("copyright");
   expect(textContent).toBeInTheDocument();
});
