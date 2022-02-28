import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EntrepreneurBooks from "./EntrepreneurBooks";

export default {
  title: "Organisms/EntrepreneurBooks",
  component: EntrepreneurBooks,
} as ComponentMeta<typeof EntrepreneurBooks>;

const Template: ComponentStory<typeof EntrepreneurBooks> = (args) => (
  <EntrepreneurBooks {...args} />
);

export const EntrepreneurBooksStory = Template.bind({});
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
    finished: false,
    added: true,
  },
];
EntrepreneurBooksStory.args = {
  booksdata: data,
  handleFinish: (id: number) => console.log("Handle Finish Reading ", id),
};
