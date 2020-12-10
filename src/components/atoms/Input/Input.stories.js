import React from "react";

import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Login = Template.bind({});
Login.args = {
  value: "Login",
  type: "text",
};

export const Password = Template.bind({});
Password.args = {
  value: "Hasło",
  type: "password",
};
