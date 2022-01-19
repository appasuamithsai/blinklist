import FooterHighlight from './FooterHighlight';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/footer/highlight/FooterHighlight',
    Component:FooterHighlight,
} as ComponentMeta<typeof FooterHighlight>;

const Template:ComponentStory<typeof FooterHighlight> = ()=> <FooterHighlight />;

export const Primary = Template.bind({});
