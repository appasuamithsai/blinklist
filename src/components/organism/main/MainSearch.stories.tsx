import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import MainSearch from './MainSearch';



export default {
  title: 'organisam/main/MainSearch',
  component: MainSearch,

} as ComponentMeta<typeof MainSearch>;


const Template: ComponentStory<typeof MainSearch> = (args) => <MainSearch {...args}/>;




export const Primary = Template.bind({});


  

