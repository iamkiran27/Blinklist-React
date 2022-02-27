import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Logout from "./Logout";

export default {
  title: "Molecules/Logout",
  component: Logout,
} as ComponentMeta<typeof Logout>;

const Template: ComponentStory<typeof Logout> = (args) => <Logout {...args} />;

export const LogoutStory = Template.bind({});
LogoutStory.args = {};
