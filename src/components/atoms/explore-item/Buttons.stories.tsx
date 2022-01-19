import Buttons from "./Buttons";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
export default {
    title:'atoms/explore-item/Buttons',
    Component: Buttons,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof Buttons>

const Template:ComponentStory<typeof Buttons> = (args)=><Buttons {...args} />;

export const Primary = Template.bind({});


Primary.args={
    itemname:"Science"
};
