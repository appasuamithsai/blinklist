import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import EnterprenurReading from "./EnterprenurReading";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "template/enterprenur-books/EnterprenurReading",
  component: EnterprenurReading,
  decorators: [
    (Story) => (
      <MemoryRouter>
        <Story />
      </MemoryRouter>
    ),
  ],
} as ComponentMeta<typeof EnterprenurReading>;

const Template: ComponentStory<typeof EnterprenurReading> = (args) => (
  <EnterprenurReading {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  value:'to'
};
