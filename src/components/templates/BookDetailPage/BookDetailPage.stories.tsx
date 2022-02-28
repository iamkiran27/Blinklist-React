import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookDetailPage from "./BookDetailPage";
import { MemoryRouter, Route, Routes } from "react-router-dom";

export default {
  title: "Templates/BookDetailPage",
  component: BookDetailPage,
} as ComponentMeta<typeof BookDetailPage>;

// const id = "5";
const Template: ComponentStory<typeof BookDetailPage> = (args) => (
  //   <MemoryRouter initialEntries={[`/book/${id}`]}>
  <Routes>
    <Route path="/book/:id" element={<BookDetailPage {...args} />} />
  </Routes>
  //   </MemoryRouter>
  //   <BookDetailPage {...args} />
);

export const BookDetailPageStory = Template.bind({});
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
BookDetailPageStory.args = {
  booksdata: data,
  handleFinish: (id) => console.log("Handle finish !!", id),
};
