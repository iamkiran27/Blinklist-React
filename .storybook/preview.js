import React from "react";
import { addDecorator } from "@storybook/react";
import { MemoryRouter } from "react-router";
const id = "5";
addDecorator((story) => (
  <MemoryRouter initialEntries={[`/book/${id}`]}>{story()}</MemoryRouter>
));

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
