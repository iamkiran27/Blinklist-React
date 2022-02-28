import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import Booklist from "./Booklist";

export default {
  title: "Organisms/BookList",
  component: Booklist,
} as ComponentMeta<typeof Booklist>;

const Template: ComponentStory<typeof Booklist> = (args) => (
  <Booklist {...args} />
);

export const BookListStory = Template.bind({});
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
    added: true,
  },
  {
    id: 3,
    image: "https://www.linkpicture.com/q/book6.png",
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: false,
    added: true,
  },
];
BookListStory.args = {
  books: data,
  handleFinishReading: (id: number) =>
    console.log("Handle Finish Reading ", id),
};
