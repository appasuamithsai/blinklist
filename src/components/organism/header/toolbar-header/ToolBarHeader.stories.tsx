import ToolBarHeader from "./ToolBarHeader";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';

export default {
    title:'organisam/header/ToolBarHeader',
    Component: ToolBarHeader,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof ToolBarHeader>

const Template:ComponentStory<typeof ToolBarHeader> = (args)=><ToolBarHeader  {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    icon:true,
};