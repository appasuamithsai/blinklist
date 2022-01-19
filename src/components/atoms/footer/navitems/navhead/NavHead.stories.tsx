import NavHead from './NavHead';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/footer/navitems/navhead/NavHead',
    Component:NavHead,
} as ComponentMeta<typeof NavHead>;

const Template:ComponentStory<typeof NavHead> = (args)=><NavHead {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    name:"Testing name"
};