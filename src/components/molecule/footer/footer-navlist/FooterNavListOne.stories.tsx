import FooterNavListThree from "./FooterNavListThree";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecule/footer/footer-navlist/FooterNavListThree',
    Component: FooterNavListThree,
}as ComponentMeta<typeof FooterNavListThree>

const Template:ComponentStory<typeof FooterNavListThree> = ()=><FooterNavListThree  />;

export const Primary = Template.bind({});

Primary.args={
    
};