import CurrentBar from "./CurrentBar";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/current-bar/CurrentBar',
    Component: CurrentBar,
}as ComponentMeta<typeof CurrentBar>

const Template:ComponentStory<typeof CurrentBar> = ()=><CurrentBar  />;

export const Primary = Template.bind({});

