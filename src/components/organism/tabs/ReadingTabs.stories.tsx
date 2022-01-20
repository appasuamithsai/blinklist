import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import book2 from "../../atoms/assets/book2.png";
import ReadingTabs from "./ReadingTabs";

import book1 from "../../atoms/assets/book1.png";

export default {
  title: "organisam/cards/tabs/ReadingTabs",
  component: ReadingTabs,
} as ComponentMeta<typeof ReadingTabs>;

const Template: ComponentStory<typeof ReadingTabs> = (args) => (
  <ReadingTabs {...args} />
);

export const Primary = Template.bind({});

Primary.args = {
  currentReading: [
    {
      image: book2,
      name: "Bring Your Human to Work",
      author: "Erica Keswin",
      time: "13-minute read",
      finished: true,
    },
  ],
  finishedReading: [
    {
      image: book1,
      name: "Harry",
      author: "Potter",
      time: "24 minutes",
      finished: true,
    },
  ],
};
