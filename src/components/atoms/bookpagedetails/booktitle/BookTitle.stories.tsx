import BookTitle from "./BookTitle";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/bookpagedetails/booktitle/BookTitle',
    Component: BookTitle,
}as ComponentMeta<typeof BookTitle>

const Template:ComponentStory<typeof BookTitle> = ()=><BookTitle  />;

export const Primary = Template.bind({});

