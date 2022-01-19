import CardHead from "./CardHead";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
export default {
    title:'molecule/card/CardHead',
    Component: CardHead,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof CardHead>

const Template:ComponentStory<typeof CardHead> = (args)=><CardHead  {...args}/>;

export const Primary = Template.bind({});

