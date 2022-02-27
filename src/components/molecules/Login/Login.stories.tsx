import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import Login from "./Login";

export default {
  title: "Molecules/Login",
  component: Login,
} as ComponentMeta<typeof Login>;

const Template: ComponentStory<typeof Login> = (args) => <Login {...args} />;

export const LoginStory = Template.bind({});
LoginStory.args = {
  logout: () => {
    console.log("CLick me to logout!");
  },
};
