import React from "react";

import FinishReadingButton from "./FinishReadingButton";

export default {
  title: "Atoms/FinishReadingButton",
  component: FinishReadingButton,
};
const Template = (args) => <FinishReadingButton {...args} />;

export const Button = Template.bind({});
Button.args = {
  disabled: true,
  bookId: 5,
  setActive: () => {
    console.log("clicked setactive");
  },
  handleFinish: (bookId = 0) => console.log("CLicked handle finish ", bookId),
};
