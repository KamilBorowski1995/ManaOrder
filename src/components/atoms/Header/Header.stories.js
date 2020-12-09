import React from "react";

import Header from "./Header";

export default {
  title: "Atoms/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primaryColor: true,
  children: "Zarządzaj swoimi zamówieniami z jednego miejsca",
};
