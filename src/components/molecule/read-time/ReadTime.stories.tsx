
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ReadTime from './ReadTime';



export default {
  title: 'molecule/ReadTime',
  component: ReadTime,

} as ComponentMeta<typeof ReadTime>;


const Template: ComponentStory<typeof ReadTime> = (args) => <ReadTime {...args}/>;




export const Primary = Template.bind({});
Primary.args={
    time:'13 minutes'
};

