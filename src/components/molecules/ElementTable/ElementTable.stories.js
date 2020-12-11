import React from "react";

import ElementTable from "./ElementTable";

export default {
  title: "Molecules/ElementTable",
  component: ElementTable,
};

const Template = (args) => <ElementTable {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  size: "l",
  children: "Numer Klienta",
  data: "#4846842416",
};
