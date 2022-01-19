import FooterNavListOne from "./FooterNavListOne";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecule/footer/footer-navlist/FooterNavListOne',
    Component: FooterNavListOne,
}as ComponentMeta<typeof FooterNavListOne>

const Template:ComponentStory<typeof FooterNavListOne> = ()=><FooterNavListOne  />;

export const Primary = Template.bind({});

Primary.args={
    
};