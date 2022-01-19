import ReadNow from "./ReadNow";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/bookpagedetails/bookoptions/readbutton/ReadNow',
    Component: ReadNow,
}as ComponentMeta<typeof ReadNow>

const Template:ComponentStory<typeof ReadNow> = ()=><ReadNow  />;

export const Primary = Template.bind({});

