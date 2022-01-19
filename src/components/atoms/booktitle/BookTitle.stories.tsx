import BookTitle from "./BookTitle";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/booktitle/BookTitle',
    Component: BookTitle,
}as ComponentMeta<typeof BookTitle>

const Template:ComponentStory<typeof BookTitle> = (args)=><BookTitle {...args} />;

export const Primary = Template.bind({});

Primary.args={
    bookName:"Demo Book"
};