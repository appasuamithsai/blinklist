import FooterCopyRight from './FooterCopyRight';
import {ComponentMeta , ComponentStory} from  '@storybook/react';

export default {
    title:'atoms/footer/copyright/FooterCopyRight',
    Component:FooterCopyRight,
} as ComponentMeta<typeof FooterCopyRight>;

const Template:ComponentStory<typeof FooterCopyRight> = ()=> <FooterCopyRight />;

export const Primary = Template.bind({});
