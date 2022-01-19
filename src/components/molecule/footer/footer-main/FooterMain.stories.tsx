import FooterMain from "./FooterMain";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
export default {
    title:'molecule/footer/footer-main/FooterMain',
    Component: FooterMain,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof FooterMain>

const Template:ComponentStory<typeof FooterMain> = ()=><FooterMain  />;

export const Primary = Template.bind({});

Primary.args={
    
};