import React from 'react';
import {render,screen} from '@testing-library/react';
import KeyIdeas from './KeyIdeas';
 
it('Checking the KeyIdeas',()=>{
   render(<KeyIdeas />);
   const textContent=screen.getByText("Get the key ideas from");
// console.log(btn);
   expect(textContent).toBeInTheDocument();
});
