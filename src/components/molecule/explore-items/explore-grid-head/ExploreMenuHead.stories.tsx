
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExploreMenuHead from './ExploreMenuHead';

import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'molecule/explore-items/explore-grid-head/ExploreMenuHead',
  component: ExploreMenuHead,

  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]

} as ComponentMeta<typeof ExploreMenuHead>;


const Template: ComponentStory<typeof ExploreMenuHead> = () => <ExploreMenuHead />;




export const Primary = Template.bind({});

