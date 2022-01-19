import FinishReading from "./FinishReading";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
export default {
    title:'atoms/bookpagedetails/bookoptions/finishreading/FinishReading',
    Component: FinishReading,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof FinishReading>

const Template:ComponentStory<typeof FinishReading> = (args)=><FinishReading {...args} />;

export const Primary = Template.bind({});

