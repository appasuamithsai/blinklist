import React from 'react';
import {render,screen} from '@testing-library/react';
import Explore from './Explore';
import '@testing-library/jest-dom';

it('Checking the KeyIdeas',()=>{
    const fakeProps={
        handleChange:jest.fn(),
        btn:true,
    };
    render(<Explore icon={fakeProps.btn} handleChange={fakeProps.handleChange} />);
   const textContent=screen.getByText("Explore");
   expect(textContent).toBeInTheDocument();
});
