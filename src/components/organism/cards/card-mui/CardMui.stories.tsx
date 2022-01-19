import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import book2 from '../../../atoms/assets/book2.png';
import CardMui from './CardMui';



export default {
  title: 'organisam/cards/CardMui',
  component: CardMui,

} as ComponentMeta<typeof CardMui>;


const Template: ComponentStory<typeof CardMui> = (args) => <CardMui {...args} />;




export const Primary = Template.bind({});

Primary.args = {

    details: [{image:book2, name:"Bring Your Human to Work", author:"Erica Keswin", time :"13-minute read",
    finished:true,}],
  };
  

