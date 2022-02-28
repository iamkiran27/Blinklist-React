import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import FinishedBookList from "./FinishedBookList";
export default {
  title: "Organisms/FinishedBookList",
  component: FinishedBookList,
} as ComponentMeta<typeof FinishedBookList>;

const Template: ComponentStory<typeof FinishedBookList> = (args) => (
  <FinishedBookList {...args} />
);

export const FinishedBooksStory = Template.bind({});

const data: {
  id: number;
  image: string;
  name: string;
  author: string;
  time: string;
  finished: boolean;
  added: boolean;
}[] = [
  {
    id: 5,
    image: "https://www.linkpicture.com/q/book6.png",
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: false,
    added: false,
  },
  {
    id: 3,
    image: "https://www.linkpicture.com/q/book5.png",
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: true,
    added: true,
  },
];
FinishedBooksStory.args = {
  books: data,
  handleReadAgain: (id) => console.log("Read again !!", id),
};
