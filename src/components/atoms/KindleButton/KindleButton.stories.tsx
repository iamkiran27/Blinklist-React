import React from "react";

import KindleButton from "./KindleButton";

export default {
  title: "Atoms/KindleButton",
  component: KindleButton,
};
const Template = (args: JSX.IntrinsicAttributes) => <KindleButton {...args} />;

export const Button = Template.bind({});
// Button.args = {
//   variant: "info",
//   color: "primary",
// };
