import HeaderLeft from "./HeaderLeft";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';

export default {
    title:'organisam/header/HeaderLeft',
    Component: HeaderLeft,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]

}as ComponentMeta<typeof HeaderLeft>

const Template:ComponentStory<typeof HeaderLeft> = (args)=><HeaderLeft  {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    icon:true,
};