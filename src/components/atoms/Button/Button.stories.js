import React from "react";

import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  children: "Wypróbuj za darmo",
};

export const Small = Template.bind({});
Small.args = {
  wide: true,
  primary: true,
  children: "Zaloguj",
};
