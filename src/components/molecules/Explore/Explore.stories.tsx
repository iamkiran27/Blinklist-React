import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Explore from "./Explore";

export default {
  title: "Molecules/Explore",
  component: Explore,
} as ComponentMeta<typeof Explore>;

const Template: ComponentStory<typeof Explore> = (args) => (
  <Explore {...args} />
);

export const ExploreStory = Template.bind({});
ExploreStory.args = {
  openExplore: () => {
    console.log("Open Explore");
  },
};
