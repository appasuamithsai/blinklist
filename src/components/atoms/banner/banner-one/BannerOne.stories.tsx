import BannerOne from "./BannerOne";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/banner/banner-one/BannerOne',
    Component: BannerOne,
}as ComponentMeta<typeof BannerOne>

const Template:ComponentStory<typeof BannerOne> = ()=><BannerOne />;

export const Primary = Template.bind({});