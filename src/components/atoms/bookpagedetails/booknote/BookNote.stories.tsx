import BookNote from "./BookNote";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/bookpagedetails/booknote/BookNote',
    Component: BookNote,
}as ComponentMeta<typeof BookNote>

const Template:ComponentStory<typeof BookNote> = ()=><BookNote  />;

export const Primary = Template.bind({});

