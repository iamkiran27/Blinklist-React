import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ExploreContainer from "./ExploreContainer";

export default {
  title: "Organisms/ExploreContiner",
  component: ExploreContainer,
} as ComponentMeta<typeof ExploreContainer>;

const Template: ComponentStory<typeof ExploreContainer> = (args) => (
  <ExploreContainer {...args} />
);

export const ExploreContainerStory = Template.bind({});

ExploreContainerStory.args = {
  openExplore: Function,
  setIsNavExtended: Function,
};
