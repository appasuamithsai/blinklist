import BannerTwo from "./BannerTwo";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'atoms/banner/banner-two/BannerTwo',
    Component: BannerTwo,
}as ComponentMeta<typeof BannerTwo>

const Template:ComponentStory<typeof BannerTwo> = ()=><BannerTwo />;

export const Primary = Template.bind({});