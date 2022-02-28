import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Navbar from "./Navbar";
export default {
  title: "Organisms/Navbar",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

const Template: ComponentStory<typeof Navbar> = (args) => <Navbar />;

export const NavbarStory = Template.bind({});

NavbarStory.args = {};
