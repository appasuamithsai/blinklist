import KeyIdeas from "./KeyIdeas";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/bookpagedetails/keyideas/KeyIdeas',
    Component: KeyIdeas,
}as ComponentMeta<typeof KeyIdeas>

const Template:ComponentStory<typeof KeyIdeas> = ()=><KeyIdeas  />;

export const Primary = Template.bind({});

