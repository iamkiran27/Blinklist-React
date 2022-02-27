import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import SearchBar from "./SearchBar";

export default {
  title: "Molecules/SearchBar",
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

const Template: ComponentStory<typeof SearchBar> = (args) => (
  <SearchBar {...args} />
);

export const SearchBarStory = Template.bind({});
SearchBarStory.args = {
  filter: () => {
    console.log("Filter opt is selected !");
  },
  setVal: () => console.log("set val function"),
};
