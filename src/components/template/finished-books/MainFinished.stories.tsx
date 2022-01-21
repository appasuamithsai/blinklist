import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import book2 from '../../../atoms/assets/book2.png';
import MainFinished from './MainFinished';
import { MemoryRouter } from "react-router-dom";


export default {
  title: 'template/finished-books/MainFinished',
  component: MainFinished,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof MainFinished>;


const Template: ComponentStory<typeof MainFinished> = (args) => <MainFinished {...args} />;




export const Primary = Template.bind({});

Primary.args = {

    finishedReading: [{image:book2, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:true,}],
  };
  

