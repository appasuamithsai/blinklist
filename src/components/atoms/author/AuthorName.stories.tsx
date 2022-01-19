import AuthorName from './AuthorName';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/author/AuthorName',
    Component:AuthorName,
} as ComponentMeta<typeof AuthorName>;

const Template:ComponentStory<typeof AuthorName> = (args)=><AuthorName {...args}/>;

export const Primary = Template.bind({});

Primary.args={
    authName:"Testing name",
};