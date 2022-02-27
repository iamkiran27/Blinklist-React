import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReadNowButton from "./ReadNowButton";

export default {
  title: "Atoms/ReadNowButton",
  component: ReadNowButton,
} as ComponentMeta<typeof ReadNowButton>;

const Template: ComponentStory<typeof ReadNowButton> = (args) => (
  <ReadNowButton {...args} />
);

export const Button = Template.bind({});
