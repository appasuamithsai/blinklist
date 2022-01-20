import React from 'react';
import {render,screen,fireEvent} from '@testing-library/react';
import Buttons from './Buttons';
import { MemoryRouter } from 'react-router-dom';
import NavDown from '../nav/nav-down/NavDown';
import '@testing-library/jest-dom';

it('Checking the Buttons',()=>{
    const fakeProps={
        handleChange:()=>{console.log("testing");},
        itemicon:<NavDown />,
        itemname:"Testing",
    };
    render(<MemoryRouter><Buttons itemicon={fakeProps.itemicon} itemname={fakeProps.itemname} handleChange={fakeProps.handleChange} /></MemoryRouter>);
   const textContent=screen.getByText("Testing");
   expect(textContent).toBeInTheDocument();
});


it('Checking OnCLick the Buttons',()=>{
    const fakeProps={
        handleChange:()=>{console.log("testing");},
        itemicon:<NavDown />,
        itemname:"Testing",
    };
    render(<MemoryRouter><Buttons itemicon={fakeProps.itemicon} itemname={fakeProps.itemname} handleChange={fakeProps.handleChange} /></MemoryRouter>);
   fireEvent.click(screen.getByText("Testing"));
});