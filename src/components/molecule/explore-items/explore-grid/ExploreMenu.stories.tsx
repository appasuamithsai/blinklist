
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ExploreMenu from './ExploreMenu';

import { MemoryRouter } from 'react-router-dom';

export default {
  title: 'molecule/explore-items/explore-grid/ExploreMenu',
  component: ExploreMenu,
  decorators : [(Story) => (<MemoryRouter><Story/></MemoryRouter>)]

} as ComponentMeta<typeof ExploreMenu>;


const Template: ComponentStory<typeof ExploreMenu> = (args) => <ExploreMenu {...args}/>;




export const Primary = Template.bind({});

