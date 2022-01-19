import BannerItems from "./BannerItems";
import { ComponentMeta, ComponentStory } from "@storybook/react";

export default {
    title:'molecule/banner-items/BannerItems',
    Component: BannerItems,
}as ComponentMeta<typeof BannerItems>

const Template:ComponentStory<typeof BannerItems> = ()=><BannerItems />;

export const Primary = Template.bind({});


