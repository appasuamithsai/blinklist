import FooterNavListTwo from "./FooterNavListTwo";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecule/footer/footer-navlist/FooterNavListTwo',
    Component: FooterNavListTwo,
}as ComponentMeta<typeof FooterNavListTwo>

const Template:ComponentStory<typeof FooterNavListTwo> = ()=><FooterNavListTwo  />;

export const Primary = Template.bind({});

Primary.args={
    
};