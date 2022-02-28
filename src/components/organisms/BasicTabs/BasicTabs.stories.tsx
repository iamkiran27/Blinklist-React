import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BasicTabs from "./BasicTabs";

export default {
  title: "Organisms/BasicTabs",
  component: BasicTabs,
} as ComponentMeta<typeof BasicTabs>;

const Template: ComponentStory<typeof BasicTabs> = (args) => (
  <BasicTabs {...args} />
);

export const BasicTabsStory = Template.bind({});
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
];
BasicTabsStory.args = {
  data: data,
  handleReadAgain: (id: number) => console.log("HandleRead again ", id),
  handleFinishReading: (id: number) =>
    console.log("Handle Finish Reading ", id),
};
