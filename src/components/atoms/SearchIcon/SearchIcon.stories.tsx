import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import SearchIconComponent from "./SearchIconComponent";

export default {
  title: "Atoms/SearchIcon",
  component: SearchIconComponent,
} as ComponentMeta<typeof SearchIconComponent>;

const Template: ComponentStory<typeof SearchIconComponent> = () => (
  <SearchIconComponent />
);

export const Button = Template.bind({});
