import React from 'react';
import {render,screen} from '@testing-library/react';
import BookTitle from './BookTitle';
import '@testing-library/jest-dom';

it('Checking the BookTitle',()=>{
   render(<BookTitle />);
   const textContent=screen.getByText("Beyond Entrepreneurship 2.0");

   expect(textContent).toBeInTheDocument();
});
