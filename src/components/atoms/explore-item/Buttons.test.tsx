import React from 'react';
import {render,screen} from '@testing-library/react';
import Buttons from './Buttons';
import { MemoryRouter } from 'react-router-dom';
import NavDown from '../nav/nav-down/NavDown';
it('Checking the KeyIdeas',()=>{
    const fakeProps={
        handleChange:()=>{console.log("testing");},
        itemicon:<NavDown />,
        itemname:"Testing",
    };
    render(<MemoryRouter><Buttons itemicon={fakeProps.itemicon} itemname={fakeProps.itemname} handleChange={fakeProps.handleChange} /></MemoryRouter>);
   const textContent=screen.getByText("Testing");
   expect(textContent).toBeInTheDocument();
});
