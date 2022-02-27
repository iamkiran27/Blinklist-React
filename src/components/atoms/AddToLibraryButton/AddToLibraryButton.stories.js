import React from "react";

import AddToLibraryButton from "./AddToLibraryButton";

export default {
  title: "Atoms/AddToLibraryButton",
  component: AddToLibraryButton,
};
const Template = (args) => <AddToLibraryButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  variant: "info",
  color: "primary",
};
