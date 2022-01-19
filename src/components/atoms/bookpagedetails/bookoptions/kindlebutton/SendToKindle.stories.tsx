import SendToKindle from "./SendToKindle";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/bookpagedetails/bookoptions/sendtokindle/SendToKindle',
    Component: SendToKindle,
}as ComponentMeta<typeof SendToKindle>

const Template:ComponentStory<typeof SendToKindle> = ()=><SendToKindle  />;

export const Primary = Template.bind({});

