import ReadAgainButton from "./ReadAgainButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/readagainbutton/ReadAgainButton',
    Component: ReadAgainButton,
}as ComponentMeta<typeof ReadAgainButton>

const Template:ComponentStory<typeof ReadAgainButton> = (args)=><ReadAgainButton {...args} />;

export const Primary = Template.bind({});

