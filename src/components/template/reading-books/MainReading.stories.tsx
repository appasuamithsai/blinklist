import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import book2 from '../../../atoms/assets/book2.png';
import MainReading from './MainReading';
import { MemoryRouter } from "react-router-dom";


export default {
  title: 'template/reading-books/MainReading',
  component: MainReading,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),]
} as ComponentMeta<typeof MainReading>;


const Template: ComponentStory<typeof MainReading> = (args) => <MainReading {...args} />;




export const Primary = Template.bind({});

Primary.args = {

    currentReading: [{image:book2, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:true,}],
  };
  

