import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";

import BookTabs from "./BookTabs";

export default {
  title: "Organisms/BasicTabs",
  component: BookTabs,
} as ComponentMeta<typeof BookTabs>;

const Template: ComponentStory<typeof BookTabs> = (args) => <BookTabs />;

export const BookTabsStory = Template.bind({});
