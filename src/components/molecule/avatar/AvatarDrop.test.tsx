/* eslint-disable testing-library/prefer-screen-queries */
import React from 'react';
import {cleanup, render} from '@testing-library/react';
import AvatarDrop from './AvatarDrop';

afterEach(cleanup);
it('Checking the Avatar Drop',()=>{
    const {getByTestId}=render(<AvatarDrop />);
    const grid=getByTestId("avatarDrop");
    expect(grid).toBeInTheDocument();
});