import Heading from "./Heading";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/heading/Heading',
    Component: Heading,
}as ComponentMeta<typeof Heading>

const Template:ComponentStory<typeof Heading> = ()=><Heading  />;

export const Primary = Template.bind({});

