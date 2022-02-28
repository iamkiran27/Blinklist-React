import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import LandingPage from "./LandingPage";
import { Route, Routes } from "react-router-dom";

export default {
  title: "Templates/LandingPage",
  component: LandingPage,
} as ComponentMeta<typeof LandingPage>;

// const id = "5";
const Template: ComponentStory<typeof LandingPage> = (args) => (
  <LandingPage {...args} />
);

export const LandingPageStory = Template.bind({});
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
    id: 6,
    image: "https://www.linkpicture.com/q/book7.png",
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    finished: false,
    added: true,
  },
];
LandingPageStory.args = {
  booksdata: data,
  handleFinish: (id) => console.log("Handle finish !!", id),
  handleReadAgain: (id) => console.log("Handle Read again", id),
};
