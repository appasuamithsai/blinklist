
import { ComponentStory, ComponentMeta } from '@storybook/react';
import AvatarDrop from './AvatarDrop';



export default {
  title: 'molecule/AvatarDrop',
  component: AvatarDrop,

} as ComponentMeta<typeof AvatarDrop>;


const Template: ComponentStory<typeof AvatarDrop> = () => <AvatarDrop />;




export const Primary = Template.bind({});
