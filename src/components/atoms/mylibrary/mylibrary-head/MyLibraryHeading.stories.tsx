import MyLibraryHeading from './MyLibraryHeading';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/mylibrary/mylibrary-head/MyLibraryHeading',
    Component:MyLibraryHeading,
} as ComponentMeta<typeof MyLibraryHeading>;

const Template:ComponentStory<typeof MyLibraryHeading> = ()=><MyLibraryHeading />;

export const Primary = Template.bind({});
