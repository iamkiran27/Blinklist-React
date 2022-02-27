import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import FinishedReadingCard from "./FinishedReadingCard";

export default {
  title: "Molecules/FinishReadingCard",
  component: FinishedReadingCard,
} as ComponentMeta<typeof FinishedReadingCard>;

const Template: ComponentStory<typeof FinishedReadingCard> = (args) => (
  <FinishedReadingCard {...args} />
);

export const FinishReadingCardStory = Template.bind({});
FinishReadingCardStory.args = {
  book: {
    id: 5,
    image: "https://www.linkpicture.com/q/book6.png",
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: false,
    added: false,
  },
  handleReadAgain: () => {
    console.log("Read again ");
  },
};
