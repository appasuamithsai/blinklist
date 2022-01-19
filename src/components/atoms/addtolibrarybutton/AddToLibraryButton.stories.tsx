import AddToLibraryButton from "./AddToLibraryButton";
import { ComponentMeta, ComponentStory } from "@storybook/react";
import { MemoryRouter } from 'react-router-dom';
export default {
    title:'atoms/addtolibrarybutton/AddToLibraryButton',
    Component: AddToLibraryButton,
    decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]
}as ComponentMeta<typeof AddToLibraryButton>

const Template:ComponentStory<typeof AddToLibraryButton> = ()=><AddToLibraryButton  />;

export const Primary = Template.bind({});

