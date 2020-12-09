import React from "react";

import Paragraph from "./Paragraph";

export default {
  title: "Atoms/Paragraph",
  component: Paragraph,
};

const Template = (args) => <Paragraph {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  weight: "normal",
  children: "Zakończone",
};

export const Bold = Template.bind({});
Bold.args = {
  weight: "bold",
  children: "Zakończone",
};
