import NavItem from './NavItem';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/footer/navitems/NavItem',
    Component:NavItem,
} as ComponentMeta<typeof NavItem>;

const Template:ComponentStory<typeof NavItem> = (args)=><NavItem {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    name:"Testing name"
};