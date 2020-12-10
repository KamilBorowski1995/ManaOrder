import React from "react";

import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primaryColor: true,
  children: "Wypróbuj za darmo",
};

export const Small = Template.bind({});
Small.args = {
  primaryColor: true,
  children: "Zaloguj",
};
export const Logout = Template.bind({});
Logout.args = {
  primaryColor: true,
  logout: true,
  children: "wyloguj",
};
