import FinishedBar from "./FinishedBar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/finished-bar/FinishedBar',
    Component: FinishedBar,
}as ComponentMeta<typeof FinishedBar>

const Template:ComponentStory<typeof FinishedBar> = ()=><FinishedBar  />;

export const Primary = Template.bind({});

