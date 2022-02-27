import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import ReadAgainButton from "./ReadAgainButton";

export default {
  title: "Atoms/ReadAgainButton",
  component: ReadAgainButton,
} as ComponentMeta<typeof ReadAgainButton>;

const Template: ComponentStory<typeof ReadAgainButton> = (args) => (
  <ReadAgainButton {...args} />
);

export const Button = Template.bind({});
Button.args = {
  handleReadAgain: (bookId = 2) => {
    console.log("Clicked me !", bookId);
  },
  bookId: 3,
};
