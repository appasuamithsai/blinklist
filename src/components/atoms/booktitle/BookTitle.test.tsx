import React from 'react';
import {render,screen} from '@testing-library/react';
import BookTitle from './BookTitle';
 
it('Checking the KeyIdeas',()=>{
   render(<BookTitle bookName="Harry potter" />);
   const textContent=screen.getByText("Harry potter");
   expect(textContent).toBeInTheDocument();
});
