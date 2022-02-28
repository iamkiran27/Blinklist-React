import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import EntrepreneurPage from "./EntrepreneurPage";
import { Route, Routes } from "react-router-dom";

export default {
  title: "Templates/EntrepreneurPage",
  component: EntrepreneurPage,
} as ComponentMeta<typeof EntrepreneurPage>;

// const id = "5";
const Template: ComponentStory<typeof EntrepreneurPage> = (args) => (
  //   <MemoryRouter initialEntries={[`/book/${id}`]}>
  <Routes>
    <Route path="/book/:id" element={<EntrepreneurPage {...args} />} />
  </Routes>
  //   </MemoryRouter>
  //   <BookDetailPage {...args} />
);

export const EntrepreneurPageStory = Template.bind({});
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
    id: 6,
    image: "https://www.linkpicture.com/q/book7.png",
    name: "The Lonely Century",
    author: "Noreena Hertz",
    time: "15-minute read",
    finished: false,
    added: true,
  },
  {
    id: 4,
    image: "https://www.linkpicture.com/q/book6.png",
    name: "Loving Your Business",
    author: "Debbie King",
    time: "13-minute read",
    finished: false,
    added: false,
  },
];
EntrepreneurPageStory.args = {
  booksdata: data,
  handleFinish: (id) => console.log("Handle finish !!", id),
};
